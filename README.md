# CryptoGuard 🔐

**Advanced File Encryption System**  
Secure cloud file storage with AES encryption and integrity verification.

---

## 📦 Tech Stack

- **Backend**: .NET 9 (ASP.NET Core Web API)
- **Frontend**: React 19 + TypeScript + Redux Toolkit
- **Database**: MySQL (hosted on Clever Cloud)
- **Cloud Storage**: AWS S3
- **Security**: AES encryption, SHA-256 hashing, reCAPTCHA v2
- **Deployment**: Render.com (client + API)

---

## 🔐 Key Features

- End-to-end encrypted file upload and download
- Server-side AES encryption with IV generation
- SHA-256 hash verification for data integrity
- Files stored in AWS S3 (no pre-signed URLs)
- Role-based user access and file ownership
- Captcha verification for enhanced protection
- Clean architecture with repository pattern

---

## 🧪 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shoshana5370/CryptoGuard.git
cd CryptoGuard
