export type ShareDto = {
    id: number;
    fileKey: number;
    accessCode?: string | null;
    expiresAt: string; // Use `string` because DateTime is serialized as ISO string in JSON
    recipientEmail?: string | null;
    sharedByUserId: number;
    recipientUserId?: number | null;
    used: boolean;
  };
  