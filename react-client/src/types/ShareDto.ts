export interface ShareDto {
    id: number;
    recipientEmail: string;
    accessCode?: string;
    expiresAt: string;
  }