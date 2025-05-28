interface ShareSearchAndFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    sortBy: string;
    onSortChange: (value: string) => void;
    sortOrder: 'asc' | 'desc';
    onSortOrderToggle: () => void;
    filterStatus: string;
    onFilterStatusChange: (value: string) => void;
    onReset: () => void;
    totalShares: number;
    filteredShares: number;
    shareType: 'received' | 'sent';
}
declare const ShareSearchAndFilter: ({ searchTerm, onSearchChange, sortBy, onSortChange, sortOrder, onSortOrderToggle, filterStatus, onFilterStatusChange, onReset, totalShares, filteredShares, shareType }: ShareSearchAndFilterProps) => import("react/jsx-runtime").JSX.Element;
export default ShareSearchAndFilter;
