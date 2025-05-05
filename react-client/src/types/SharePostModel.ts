export interface SharePostModel {
    fileKey: number;  // change fileId --> fileKey
    recipientEmail: string;
    expiresAt?: string;
  }