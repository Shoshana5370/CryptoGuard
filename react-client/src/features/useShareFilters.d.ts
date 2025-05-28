import { ShareDto } from '@/types/ShareDto';
export declare const useShareFilters: (shares: ShareDto[], shareType: "received" | "sent") => {
    searchTerm: string;
    setSearchTerm: import("react").Dispatch<import("react").SetStateAction<string>>;
    sortBy: string;
    setSortBy: import("react").Dispatch<import("react").SetStateAction<string>>;
    sortOrder: "desc" | "asc";
    toggleSortOrder: () => void;
    filterStatus: string;
    setFilterStatus: import("react").Dispatch<import("react").SetStateAction<string>>;
    filteredAndSortedShares: ShareDto[];
    resetFilters: () => void;
};
