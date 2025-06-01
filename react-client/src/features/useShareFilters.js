import { useState, useMemo } from 'react';
export const useShareFilters = (shares, shareType) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterStatus, setFilterStatus] = useState('all');
    const filteredAndSortedShares = useMemo(() => {
        let filtered = [...shares];
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(share => {
                const fileName = share.fileName?.toLowerCase() || '';
                const searchField = shareType === 'received'
                    ? share.sharedByUserName?.toLowerCase() || ''
                    : share.recipientEmail?.toLowerCase() || '';
                return fileName.includes(searchLower) || searchField.includes(searchLower);
            });
        }
        if (filterStatus !== 'all') {
            const now = new Date();
            filtered = filtered.filter(share => {
                switch (filterStatus) {
                    case 'active':
                        return !share.used && !share.fileIsDeleted && new Date(share.expiresAt) > now;
                    case 'used':
                        return share.used;
                    case 'expired':
                        return !share.used && !share.fileIsDeleted && new Date(share.expiresAt) <= now;
                    case 'deleted':
                        return share.fileIsDeleted;
                    default:
                        return true;
                }
            });
        }
        filtered.sort((a, b) => {
            let aValue;
            let bValue;
            switch (sortBy) {
                case 'fileName':
                    aValue = a.fileName || '';
                    bValue = b.fileName || '';
                    break;
                case 'sender':
                    aValue = a.sharedByUserName || '';
                    bValue = b.sharedByUserName || '';
                    break;
                case 'recipient':
                    aValue = a.recipientEmail || '';
                    bValue = b.recipientEmail || '';
                    break;
                case 'status':
                    aValue = getStatusPriority(a);
                    bValue = getStatusPriority(b);
                    break;
                case 'date':
                default:
                    aValue = new Date(a.expiresAt || 0);
                    bValue = new Date(b.expiresAt || 0);
                    break;
            }
            if (sortBy === 'date' || sortBy === 'status') {
                return sortOrder === 'asc' ?
                    (aValue > bValue ? 1 : -1) :
                    (aValue < bValue ? 1 : -1);
            }
            else {
                return sortOrder === 'asc' ?
                    aValue.localeCompare(bValue) :
                    bValue.localeCompare(aValue);
            }
        });
        return filtered;
    }, [shares, searchTerm, sortBy, sortOrder, filterStatus, shareType]);
    const getStatusPriority = (share) => {
        if (share.fileIsDeleted)
            return 4;
        if (share.used)
            return 3;
        const now = new Date();
        if (new Date(share.expiresAt) <= now)
            return 2;
        return 1;
    };
    const toggleSortOrder = () => {
        setSortOrder(current => current === 'asc' ? 'desc' : 'asc');
    };
    const resetFilters = () => {
        setSearchTerm('');
        setSortBy('date');
        setSortOrder('desc');
        setFilterStatus('all');
    };
    return {
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        sortOrder,
        toggleSortOrder,
        filterStatus,
        setFilterStatus,
        filteredAndSortedShares,
        resetFilters,
    };
};
