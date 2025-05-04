import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store' // adjust paths
import { fetchFilesByUserId } from '../features/files/filesSlice'; // adjust path as needed
import { FileDto } from '../types/FileDto';
const FilesList: React.FC= () => {
    const userId = 1;
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.files);
    useEffect(() => {
        if (userId) {
            dispatch(fetchFilesByUserId(userId));
        }
    }, [dispatch, userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {items.length === 0 ? (
                <p>No files found.</p>
            ) : (
                <ul>
                    {items.map((file:FileDto) => (
                        <li key={file.id}>
                            {file.name} - Uploaded: {new Date(file.createdAt).toLocaleString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FilesList;
