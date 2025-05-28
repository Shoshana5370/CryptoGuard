interface SearchAndFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    sortBy: string;
    onSortChange: (value: string) => void;
    sortOrder: 'asc' | 'desc';
    onSortOrderToggle: () => void;
    filterType: string;
    onFilterTypeChange: (value: string) => void;
    onReset: () => void;
    totalFiles: number;
    filteredFiles: number;
}
declare const SearchAndFilter: ({ searchTerm, onSearchChange, sortBy, onSortChange, sortOrder, onSortOrderToggle, filterType, onFilterTypeChange, onReset, totalFiles, filteredFiles }: SearchAndFilterProps) => import("react/jsx-runtime").JSX.Element;
export default SearchAndFilter;
