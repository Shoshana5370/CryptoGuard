// src/components/ShareFileForm.tsx
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { shareFile, clearShare } from '../features/shares/shareSlice';

const ShareFileForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { share, status, error } = useAppSelector((state) => state.share);

  const [fileId, setFileId] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileId || !recipientEmail) return;

    await dispatch(
      shareFile({
        fileId: Number(fileId),
        recipientEmail,
      })
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded">
      <h2 className="text-xl font-bold mb-4">Share File</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">File ID</label>
          <input
            type="number"
            value={fileId}
            onChange={(e) => setFileId(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Recipient Email</label>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sharing...' : 'Share File'}
        </button>
      </form>

      {status === 'succeeded' && share && (
        <div className="mt-4 p-3 bg-green-100 rounded">
          <p>✅ File shared successfully!</p>
          <p>Share ID: {share.id}</p>
          <p>Access Code: {share.accessCode}</p>
          <p>Expires At: {share.expiresAt}</p>
          <button
            className="mt-2 text-sm text-blue-500 underline"
            onClick={() => dispatch(clearShare())}
          >
            Clear
          </button>
        </div>
      )}

      {status === 'failed' && error && (
        <div className="mt-4 p-3 bg-red-100 rounded text-red-700">
          ❌ Error: {error}
        </div>
      )}
    </div>
  );
};

export default ShareFileForm;
