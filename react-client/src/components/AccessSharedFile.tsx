////////////////////this is my component









// src/components/AccessSharedFile.tsx
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks'; // Adjust according to your setup
import { accessSharedFile, clearAccess } from '../features/shares/accessSlice'; // Adjust according to your setup
// import { Button, Input } from '@/components/ui'; // Update imports to match your design system

const AccessSharedFile: React.FC = () => {
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');

  const { fileBlob, status, error } = useAppSelector((state) => state.access);

  const handleSubmit = () => {
    if (!code) return;
    dispatch(accessSharedFile(code));
  };

  useEffect(() => {
    if (fileBlob) {
      const url = window.URL.createObjectURL(fileBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'shared-file');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  }, [fileBlob]);

  const handleClear = () => {
    dispatch(clearAccess());
    setCode('');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Access Shared File</h2>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter access code"
        className="mb-4"
      />
      <div className="flex gap-2">
        <button onClick={handleSubmit} disabled={status === 'loading' || !code}>
          {status === 'loading' ? 'Downloading...' : 'Download'}
        </button>
        <button  onClick={handleClear}>
          Clear
        </button>
      </div>
      {status === 'failed' && (
        <p className="text-red-500 mt-2">
          {typeof error === 'string' ? error : 'Failed to access the file.'}
        </p>
      )}
      {status === 'succeeded' && (
        <p className="text-green-500 mt-2">File downloaded successfully.</p>
      )}
    </div>
  );
};

export default AccessSharedFile;
