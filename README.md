# CryptoGuard

**CryptoGuard** is a secure, scalable, and user-friendly file encryption and sharing system built with **.NET 8**, **React (Vite)**, and **AWS S3**. It enables organizations and individuals to protect sensitive files with strong AES encryption, manage access control, and monitor activity—all through a clean and intuitive interface.

---

## 🛡️ Features

- 🔐 **AES File Encryption** – Encrypt and decrypt files securely on the server.
- ☁️ **Secure File Uploads** – Upload encrypted files directly to S3 using presigned URLs.
- 📁 **File Sharing** – Share encrypted files with others using time-limited access tokens.
- ✅ **File Integrity Verification** – SHA-256 hashes are used to ensure file integrity after decryption.
- 👥 **User Management** – Basic authentication and registration system.
- 📊 **Audit Logging (Planned)** – Future support for logging file access and suspicious activity.
- 🌍 **Modern Frontend** – Fast and responsive UI built with React + TypeScript + Tailwind.

---

## 📂 Project Structure

### Backend (.NET 8 - Clean Architecture)
- **Domain**: Core business logic and encryption interfaces.
- **Application**: Use cases, DTOs, service interfaces.
- **Infrastructure**: AWS S3 integration, AES encryption implementation.
- **API**: REST controllers for file upload, download, and sharing.

### Frontend (React + Vite + Redux)
- **File Upload & Share**: Drag-and-drop, file preview, expiration setup.
- **Login/Register**: Integrated with reCAPTCHA v2.
- **File Viewer**: Supports verifying decrypted file against original hash.

---

## 🚀 Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js (v18+)](https://nodejs.org/)
- AWS account with S3 bucket
- GitHub token (for CV feature)
- reCAPTCHA site key & secret

### Backend Setup

```bash
cd CryptoGuard.Server
dotnet restore
dotnet run
