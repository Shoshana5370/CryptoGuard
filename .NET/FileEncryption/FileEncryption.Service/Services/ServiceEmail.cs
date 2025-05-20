using FileEncryption.Core.IServices;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using System.Reflection.Metadata.Ecma335;
using System.Text.Json;
namespace FileEncryption.Service.Services
{
    public class ServiceEmail : IServiceSendMessage
    {

        private readonly IConfiguration _config;

        public ServiceEmail(IConfiguration config)
        {
            _config = config;
        }

        public async Task<bool> SendAsync(string to, string toUser,string fromUser, string accessCode,string fileName)
        {
//            bool correct = await IsEmailValid(to);
//            if(correct)
//{
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config["EmailSettings:SenderEmail"]));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = "Your AcsessCode";

            // You can format the body as needed
            email.Body = new TextPart("html")
            {
                Text = $@"
              <p>Hello {(toUser != null ? toUser : "guest")},</p>
              <p>User {fromUser} has shared a file with you.</p>
              <p>Your access code to file <b>{fileName}</b> is: <b>{accessCode}</b></p>
              <p>Best regards to you.</p>"
            };
            using var smtp = new SmtpClient();
            await smtp.ConnectAsync(_config["EmailSettings:SmtpHost"], int.Parse(_config["EmailSettings:SmtpPort"]), true);
            await smtp.AuthenticateAsync(_config["EmailSettings:SenderEmail"], _config["EmailSettings:SenderPassword"]);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
            return true;
            }
        
        //}
        private async Task<bool> IsEmailValid(string email)
        {
            var apiKey = _config["MailboxLayer:ApiKey"]; // ודאי שיש מפתח בקובץ appsettings
            var url = $"http://apilayer.net/api/check?access_key={apiKey}&email={email}&smtp=1&format=1";

            using var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);

            if (!response.IsSuccessStatusCode)
                return false;

            var content = await response.Content.ReadAsStringAsync();
            var json = JsonDocument.Parse(content);

            // בדיקת השדה smtp_check
            return json.RootElement.TryGetProperty("smtp_check", out var smtpCheck) && smtpCheck.GetBoolean();
        }
        
    }
}
