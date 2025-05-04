using FileEncryption.Core.IServices;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
namespace FileEncryption.Service.Services
{
    public class ServiceEmail : IServiceSendMessage
    {

        private readonly IConfiguration _config;

        public ServiceEmail(IConfiguration config)
        {
            _config = config;
        }

        public async Task SendAsync(string to, string fromUserId, string accessCode)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config["EmailSettings:SenderEmail"]));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = "Your AcsessCode";

            // You can format the body as needed
            email.Body = new TextPart("plain")
            {
                Text = $"Hello,\n\nUser {fromUserId} has shared a file with you.\nYour access code is: {accessCode}\n\nBest regards."
            };

            using var smtp = new SmtpClient();
            await smtp.ConnectAsync(_config["EmailSettings:SmtpHost"], int.Parse(_config["EmailSettings:SmtpPort"]), true);
            await smtp.AuthenticateAsync(_config["EmailSettings:SenderEmail"], _config["EmailSettings:SenderPassword"]);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}
