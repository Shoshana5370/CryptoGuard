export type ShareDto = {
    id: number;
    fileKey: number;
    fileDeleted: boolean;
    accessCode?: string | null;
    expiresAt: string; 
    recipientEmail?: string | null;
    sharedByUserId: number;
    recipientUserId?: number | null;
    used: boolean;
    fileName?: string | null;
    sharedByUserName?: string | null;
    recipientUserName?: string | null;
  };
  