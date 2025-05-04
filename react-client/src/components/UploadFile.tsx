import React, { useState, ChangeEvent, FormEvent } from 'react';
import {  RootState } from '../store/store'; // adjust the path as needed
import { uploadFileContent, postFileMetadata, resetUploadState } from '../features/files/uploadslice'; // adjust the path as needed
import { useAppDispatch, useAppSelector } from '../hooks';
const UploadFile: React.FC= () => {
    const userId = 1;
    const [file, setFile] = useState<File | null>(null);
    const dispatch = useAppDispatch();
    const { uploading, success, error, uploadedFile } = useAppSelector((state: RootState) => state.upFiles); // Adjust the state slice name as needed

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            dispatch(resetUploadState()); // Clear previous state
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;

        try {
            // Step 1: Upload file content
            const s3Key = await dispatch(uploadFileContent(file)).unwrap();

            // Step 2: Post metadata
            const metadata = {
                name: file.name,
                encryptedUrl: s3Key,
                createdBy: userId,
            };
            await dispatch(postFileMetadata(metadata)).unwrap();
        } catch (err) {
            console.error('Upload error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Upload Encrypted File (Redux)</h2>
            <input
                type="file"
                onChange={handleFileChange}
                className="block mb-4"
                disabled={uploading}
            />
            <button
                type="submit"
                disabled={uploading || !file}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {success && uploadedFile && (
                <p className="mt-4 text-green-600">Uploaded: {uploadedFile.name}</p>
            )}
        </form>
    );
};

export default UploadFile;
