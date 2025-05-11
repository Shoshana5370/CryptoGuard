// src/types/FileDto.ts

export interface FileDto {
    id: number; // מזהה קובץ
    name: string; // שם הקובץ
    encryptedUrl: string; 
    contentType: string ; // כתובת הקובץ המוצפן ב-S3
    createdAt: string; // תאריך העלאה (ISO string)
    createdBy: number; // מזהה המשתמש שיצר את הרשומה
    isDelete: boolean;
}
