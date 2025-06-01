import { useMemo, useState } from 'react';
export const useFileFilters = (files) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterType, setFilterType] = useState('all');
    const getFileTypeCategory = (contentType) => {
        const type = contentType.toLowerCase();
        if (type.startsWith('image/'))
            return 'image';
        if (type.startsWith('audio/'))
            return 'audio';
        if (type.startsWith('video/'))
            return 'video';
        if (type.includes('zip') || type.includes('archive') || type.includes('compressed'))
            return 'archive';
        if (type.includes('javascript') || type.includes('python') || type.includes('code'))
            return 'code';
        return 'document';
    };
    const filteredAndSortedFiles = useMemo(() => {
        let filtered = files.filter(file => !file.isDelete);
        if (searchTerm) {
            filtered = filtered.filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (filterType !== 'all') {
            filtered = filtered.filter(file => getFileTypeCategory(file.contentType) === filterType);
        }
        filtered.sort((a, b) => {
            let comparison = 0;
            switch (sortBy) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'date':
                    comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
                    break;
                case 'type':
                    comparison = a.contentType.localeCompare(b.contentType);
                    break;
                default:
                    comparison = 0;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
        return filtered;
    }, [files, searchTerm, sortBy, sortOrder, filterType]);
    const toggleSortOrder = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };
    const resetFilters = () => {
        setSearchTerm('');
        setSortBy('name');
        setSortOrder('asc');
        setFilterType('all');
    };
    return {
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        sortOrder,
        toggleSortOrder,
        filterType,
        setFilterType,
        filteredAndSortedFiles,
        resetFilters,
    };
};
