using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceFile
    {
            Task<Entities.File> FindFileByIdAsync(int id);
            Task<IEnumerable<Entities.File>> FindAllFilesAsync();
            Task<Entities.File> InsertFileAsync(FileDto file);
            Task<Entities.File> UpdateExistingFileAsync(int id, FileDto file);
            Task<bool> DiscardFileAsync(int id);
            Task<FileDto> EncryptAndUploadFileAsync(FileFormDto file,FileDto fileDto);
            Task<(Stream Stream, string FileName, string ContentType)> DecryptAndDownloadFileAsync(int fileKey);
            //Task<byte[]> GetDecryptedFileStreamAsync(int fileKey);
    }
}
