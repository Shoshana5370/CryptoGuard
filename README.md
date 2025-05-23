# CryptoGuard

**CryptoGuard** is an advanced file encryption and sharing system built with **.NET 9** and **React 19**. It provides secure file uploads, AES-256 encryption, controlled access, and integrity verification—all within a modern and professional interface.

---

## 🛡️ Features

- 🔐 **AES-256 File Encryption** – Secure files at rest with strong encryption.
- ☁️ **AWS S3 Secure Uploads** – Files are uploaded using presigned URLs.
- 📁 **File Sharing** – Share encrypted files with time-limited, secure links.
- ✅ **File Integrity Check** – Ensure decrypted content matches the original using SHA-256.
- 👤 **User Authentication** – Register and log in securely.
- 🧩 **reCAPTCHA v2 Integration** – Protect authentication from abuse.
- 📊 **Planned Activity Monitoring** – Detect suspicious activity and audit access.

---

## 🌐 Live Preview

🚧 **Website Under Construction**  
View the preview:  
🔗 [https://cryptoguardapplication.onrender.com/](https://cryptoguardapplication.onrender.com/)

---

## 🧱 Tech Stack

- **Backend**: .NET 9, ASP.NET Core Web API, Clean Architecture, AWS SDK
- **Frontend**: React 19, Vite, Redux Toolkit, Tailwind CSS
- **Security**: AES-256, SHA-256, reCAPTCHA v2, Presigned S3 URLs
- **Storage**: AWS S3
- **Database**: PostgreSQL (Clever Cloud)

---

## 🚀 Getting Started

### Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/)
- [Node.js (v18+)](https://nodejs.org/)
- AWS S3 Bucket + Access Keys
- GitHub Token (for project fetching)
- reCAPTCHA v2 Site Key & Secret

### Backend Setup

```bash
cd CryptoGuard.Server
dotnet restore
dotnet run
