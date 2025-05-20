export interface FileDto {
    id: number; 
    name: string; 
    encryptedUrl: string; 
    contentType: string ; 
    createdAt: string; 
    updatedAt: string;
    createdBy: number; 
    isDelete: boolean;
}
