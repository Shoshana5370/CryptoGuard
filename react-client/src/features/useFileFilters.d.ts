import { FileDto } from '@/types/FileDto';
export declare const useFileFilters: (files: FileDto[]) => {
    searchTerm: string;
    setSearchTerm: import("react").Dispatch<import("react").SetStateAction<string>>;
    sortBy: string;
    setSortBy: import("react").Dispatch<import("react").SetStateAction<string>>;
    sortOrder: "desc" | "asc";
    toggleSortOrder: () => void;
    filterType: string;
    setFilterType: import("react").Dispatch<import("react").SetStateAction<string>>;
    filteredAndSortedFiles: FileDto[];
    resetFilters: () => void;
};
