using Amazon.S3;
using Amazon.S3.Model;
using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;
using System.Text;

namespace FileEncryption.Service.Services
{
    public class ServiceFile : IServiceFile
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;
        private readonly IAmazonS3 _s3Client;
        private readonly IConfiguration _config;

        public ServiceFile(IRepositoryManager repositoryManager, IMapper mapper, IAmazonS3 s3client, IConfiguration config)
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
            _config = config;
            _s3Client = s3client;
        }

         public async Task<bool> DiscardFileAsync(int id)
        {
            bool success = await _repositoryManager.Files.DeleteAsync(id); // Call repository method to delete file
            if (success)
            {
                await _repositoryManager.SaveAsync(); // Save changes to the database
                return true;
            }
            return false;
        }

        private Aes CreateAes()
        {
            var secretKey = _config["Encryption:SecretKey"];
            var aes = Aes.Create();
            aes.Key = Encoding.UTF8.GetBytes(secretKey);
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            return aes;
        }
 
        public async Task<IEnumerable<Core.Entities.File>> FindAllFilesAsync()
        {
            return await _repositoryManager.Files.GetAllAsync(); // Call repository method to get all files
        }

        public async Task<Core.Entities.File> FindFileByIdAsync(int id)
        {
            return await _repositoryManager.Files.GetByIdAsync(id); // Call repository method to find file by ID
        }

        public async Task<Core.Entities.File> InsertFileAsync(FileDto file)
        {
            var fileEntity = _mapper.Map<Core.Entities.File>(file); // Map DTO to entity
            await _repositoryManager.Files.AddAsync(fileEntity); // Call method to add file
            await _repositoryManager.SaveAsync(); // Save changes to the database
            return fileEntity;
        }

        public async Task<Core.Entities.File> UpdateExistingFileAsync(int id, FileDto file)
        {
            var fileEntity = _mapper.Map<Core.Entities.File>(file); // Map DTO to entity
            var updatedFile = await _repositoryManager.Files.UpdateAsync(id, fileEntity); // Call repository method to update file
            if (updatedFile != null)
            {
                await _repositoryManager.SaveAsync(); // Save changes to the database
            }
            return updatedFile;
        }

        public async Task<FileDto> EncryptAndUploadFileAsync(FileFormDto file, FileDto fileDto)
        {
            var bucketName = _config["AWS:BucketName"];
            var key = $"uploads/{Guid.NewGuid()}_{file.FileName}";
            using var aes = CreateAes();
            aes.GenerateIV();
            using var uploadStream = new MemoryStream();
            await uploadStream.WriteAsync(aes.IV, 0, aes.IV.Length); // שומרים את ה-IV בתחילת הקובץ

            using (var cryptoStream = new CryptoStream(uploadStream, aes.CreateEncryptor(), CryptoStreamMode.Write, leaveOpen: true))
            {
                await file.Content.CopyToAsync(cryptoStream);
            }

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
            var fileEntity=_mapper.Map<Core.Entities.File>(fileDto); // Map DTO to entity
            await _repositoryManager.Files.AddAsync(fileEntity); // Call method to add file
            await _repositoryManager.SaveAsync(); // Save changes to the database
            //return fileEntity;
            return _mapper.Map<FileDto>(fileEntity);
        }

        public async Task<Stream> DecryptAndDownloadFileAsync(int fileKey)
        {
            var file = await _repositoryManager.Files.GetByIdAsync(fileKey);
            if (file == null) throw new Exception("File not found");
            var s3Object = await _s3Client.GetObjectAsync(_config["AWS:BucketName"], file.EncryptedUrl);
            using var responseStream = s3Object.ResponseStream;
            var memoryStream = new MemoryStream();
            await responseStream.CopyToAsync(memoryStream);
            memoryStream.Position = 0;
            // Extract IV from the beginning of the file
            var iv = new byte[16];
            memoryStream.Read(iv, 0, iv.Length);
            using var aes = CreateAes();
            aes.IV = iv;
            var decryptedStream = new MemoryStream();
            using (var cryptoStream = new CryptoStream(memoryStream, aes.CreateDecryptor(), CryptoStreamMode.Read))
            {
                await cryptoStream.CopyToAsync(decryptedStream);
            }
            decryptedStream.Position = 0;
            return decryptedStream;
        }
    }
}
