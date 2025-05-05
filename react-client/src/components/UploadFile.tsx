import React, { useState, ChangeEvent, FormEvent } from 'react';
import { RootState } from '../store/store';
import { uploadFileContent, resetUploadState } from '../features/files/uploadslice';
import { useAppDispatch, useAppSelector } from '../hooks';
const UploadFile: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const dispatch = useAppDispatch();
    const { uploading, success, error, uploadedFile } = useAppSelector((state: RootState) => state.upFiles);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            dispatch(resetUploadState());
        }
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;

        try {
            // Upload file + userId in a single request
            await dispatch(uploadFileContent({ file })).unwrap();
        } catch (err) {
            console.error('Upload error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Upload Encrypted File</h2>
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
            {error && <p className="mt-4 text-red-500">{error && (
                <div>
                    {typeof error === 'string'
                        ? error
                        : JSON.stringify(error, null, 2)}
                </div>
            )}</p>}
            {success && uploadedFile && (
                <p className="mt-4 text-green-600">Uploaded: {uploadedFile.name}</p>
            )}
        </form>
    );
};

export default UploadFile;
