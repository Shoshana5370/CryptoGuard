using System.Xml.Linq;
using Microsoft.AspNetCore.DataProtection.Repositories;
using Amazon.S3;
using Amazon.S3.Model;
namespace FileEncryption.Api
{


    public class S3XmlRepository : IXmlRepository
    {
        private readonly IAmazonS3 _s3Client;
        private readonly string _bucketName;
        private readonly string _prefix;

        public S3XmlRepository(IAmazonS3 s3Client, string bucketName, string prefix)
        {
            _s3Client = s3Client;
            _bucketName = bucketName;
            _prefix = prefix;
        }

        public IReadOnlyCollection<XElement> GetAllElements()
        {
            var result = new List<XElement>();

            var listResponse = _s3Client.ListObjectsV2Async(new ListObjectsV2Request
            {
                BucketName = _bucketName,
                Prefix = _prefix
            }).Result;

            foreach (var obj in listResponse.S3Objects)
            {
                var getResponse = _s3Client.GetObjectAsync(_bucketName, obj.Key).Result;
                using var reader = new StreamReader(getResponse.ResponseStream);
                var xmlString = reader.ReadToEnd();
                result.Add(XElement.Parse(xmlString));
            }

            return result;
        }

        public void StoreElement(XElement element, string friendlyName)
        {
            var key = $"{_prefix}{friendlyName}-{Guid.NewGuid()}.xml";
            var putRequest = new PutObjectRequest
            {
                BucketName = _bucketName,
                Key = key,
                ContentBody = element.ToString(SaveOptions.DisableFormatting)
            };

            var putResponse = _s3Client.PutObjectAsync(putRequest).Result;
        }
    }

}
