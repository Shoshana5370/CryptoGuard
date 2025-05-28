
using Amazon.S3;
using Amazon.S3.Model;
using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;
using System.Text;

namespace FileEncryption.Service.Services
{
    public class ServiceFile(IRepositoryManager repositoryManager, IMapper mapper, IAmazonS3 s3client, IConfiguration config,IServiceActivityLogs serviceActivityLogs) : IServiceFile
    {
        private readonly IRepositoryManager _repositoryManager = repositoryManager;
        private readonly IMapper _mapper = mapper;
        private readonly IAmazonS3 _s3Client = s3client;
        private readonly IConfiguration _config = config;
        private readonly IServiceActivityLogs _serviceActivityLogs=serviceActivityLogs;
        public async Task<bool> DiscardFileAsync(int id)
        {  
            
            bool success = await _repositoryManager.Files.DeleteFileAsync(id); 
            if (success)
            {
                _repositoryManager.Save(); 
                return true;
            }
            return false;
        }

        private Aes CreateAes()
        {
            var secretKey = _config["Encryption:SecretKey"];
            if (string.IsNullOrWhiteSpace(secretKey))
                throw new InvalidOperationException("Encryption:SecretKey is not set in configuration.");

            var keyBytes = Encoding.UTF8.GetBytes(secretKey);

            if (keyBytes.Length != 32) 
                throw new InvalidOperationException("Encryption key must be 32 bytes (256 bits) long.");

            var aes = Aes.Create();
            aes.Key = keyBytes;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            return aes;
        }

        public async Task<IEnumerable<Core.Entities.File>> FindAllFilesAsync()
        {
            return await _repositoryManager.Files.GetAllFileAsync();
        }

        public async Task<Core.Entities.File> FindFileByIdAsync(int id)
        {
            return await _repositoryManager.Files.GetByIdFileAsync(id); 
        }

        public async Task<Core.Entities.File> InsertFileAsync(FileDto file)
        {
            var fileEntity = _mapper.Map<Core.Entities.File>(file);
            fileEntity.CreatedAt = DateTime.Now;
            fileEntity.Name = Path.GetFileNameWithoutExtension(fileEntity.Name);
            await _repositoryManager.Files.AddFileAsync(fileEntity); 
            _repositoryManager.Save(); 
            return fileEntity;
        }

        public async Task<Core.Entities.File> UpdateExistingFileAsync(int id, FileDto file)
        {
            var fileEntity = _mapper.Map<Core.Entities.File>(file); 
            var updatedFile = await _repositoryManager.Files.UpdateFileAsync(id, fileEntity); 
            if (updatedFile != null)
            {
                _ = _repositoryManager.Save(); 
            }
            await _serviceActivityLogs.LogActionAsync(new CreateActivityLogDto
            {
                UserId = (int)updatedFile.CreatedBy,
                Action = "RenameFile",
                TargetId = updatedFile.Id.ToString(),
                TargetType = "File",
                Description = $"File '{file.Name}' rename {updatedFile.Name}"
            });
            return updatedFile;
        }
        public async Task<FileDto> EncryptAndUploadFileAsync(FileFormDto file, FileDto fileDto)
        {
            var bucketName = _config["AWS:BucketName"];
            var key = $"uploads/{Guid.NewGuid()}_{file.FileName}";
            using var aes = CreateAes();
            aes.GenerateIV();
            var encryptedContentStream = new MemoryStream();
            using (var cryptoStream = new CryptoStream(encryptedContentStream, aes.CreateEncryptor(), CryptoStreamMode.Write))
            {
                await file.Content.CopyToAsync(cryptoStream);
            }
            var encryptedBytes = encryptedContentStream.ToArray();
            using var sha256 = SHA256.Create();
            var hashBytes = sha256.ComputeHash(encryptedBytes);
            var hashHex = BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
            using var uploadStream = new MemoryStream();
            await uploadStream.WriteAsync(aes.IV);                    
            await uploadStream.WriteAsync(encryptedBytes);             
            await uploadStream.WriteAsync(hashBytes);                
            uploadStream.Position = 0;
            var putRequest = new PutObjectRequest
            {
                BucketName = bucketName,
                Key = key,
                InputStream = uploadStream,
                ContentType = file.ContentType
            };
            await _s3Client.PutObjectAsync(putRequest);

            fileDto.EncryptedUrl = key;
            fileDto.Sha256 = hashHex;
            fileDto.CreatedAt = DateTime.Now;
            fileDto.UpdatedAt = DateTime.Now;
            var fileEntity = _mapper.Map<Core.Entities.File>(fileDto);
            var f = await _repositoryManager.Files.AddFileAsync(fileEntity);
            await _repositoryManager.Save();
            Console.WriteLine("this is log the file", f);
            await _serviceActivityLogs.LogActionAsync(new CreateActivityLogDto
            {
                UserId = (int)fileEntity.CreatedBy,
                Action = "Upload",
                TargetId = fileEntity.Id.ToString(),
                TargetType = "File",
                Description = $"File '{file.FileName}' Upload"
            });
            return _mapper.Map<FileDto>(f);
        }


        public async Task<(Stream Stream, string FileName, string ContentType ,string Hash)> DecryptAndDownloadFileAsync(int fileKey)
        {
            var file = await _repositoryManager.Files.GetByIdFileAsync(fileKey)
                       ?? throw new Exception("File not found");

            var s3Object = await _s3Client.GetObjectAsync(_config["AWS:BucketName"], file.EncryptedUrl);

            using var responseStream = s3Object.ResponseStream;
            using var encryptedDataWithHash = new MemoryStream();
            await responseStream.CopyToAsync(encryptedDataWithHash);
            encryptedDataWithHash.Position = 0;
            var iv = new byte[16];
            encryptedDataWithHash.Read(iv, 0, iv.Length);
            using var aes = CreateAes();
            aes.IV = iv;

            var encryptedLength = encryptedDataWithHash.Length - 16 - 32; 
            var encryptedOnly = new byte[encryptedLength];
            encryptedDataWithHash.Read(encryptedOnly, 0, encryptedOnly.Length);

            var hash = new byte[32]; 
            encryptedDataWithHash.Read(hash, 0, hash.Length);
            using var sha256 = SHA256.Create();
            var computedHash = sha256.ComputeHash(encryptedOnly);
            if (!computedHash.SequenceEqual(hash))
                throw new Exception("File integrity check failed: hash mismatch");
            using var cryptoStream = new CryptoStream(new MemoryStream(encryptedOnly), aes.CreateDecryptor(), CryptoStreamMode.Read);
            var decryptedStream = new MemoryStream();
            await cryptoStream.CopyToAsync(decryptedStream);
            decryptedStream.Position = 0;
            await _serviceActivityLogs.LogActionAsync(new CreateActivityLogDto
            {
                UserId = (int)file.CreatedBy,
                Action = "DownLoad",
                TargetId = file.Id.ToString(),
                TargetType = "File",
                Description = $"File '{file.Name}' download by user {(file.UserCreated?.Name ?? "Unknown")}"
            });
            return (decryptedStream, file.Name, file.ContentType,file.OriginalHash);
        }



    }
}
