import { Input } from "@/styles/ui/input";
import { Button } from "@/styles/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/styles/ui/select";
import { Search, Filter, SortAsc, SortDesc, Calendar, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

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

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  sortOrder,
  onSortOrderToggle,
  filterType,
  onFilterTypeChange,
  onReset,
  totalFiles,
  filteredFiles
}: SearchAndFilterProps) => {
  const hasActiveFilters = searchTerm || filterType !== 'all' || sortBy !== 'name';

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search files by name..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-11 pl-10 pr-4 rounded-lg border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* File Type Filter */}
          <div className="flex items-center gap-2 min-w-[180px]">
            <Filter className="w-4 h-4 text-gray-500" />
            <Select value={filterType} onValueChange={onFilterTypeChange}>
              <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:ring-2 focus:ring-emerald-500">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
                <SelectItem value="all">All Files</SelectItem>
                <SelectItem value="image">Images</SelectItem>
                <SelectItem value="document">Documents</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="archive">Archives</SelectItem>
                <SelectItem value="code">Code Files</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          {/* Sort Controls */}
          <div className="flex items-center gap-2 min-w-[160px]">
            <Calendar className="w-4 h-4 text-gray-500" />
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:ring-2 focus:ring-emerald-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date Modified</SelectItem>
                <SelectItem value="type">File Type</SelectItem>
                <SelectItem value="size">File Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort Order Toggle */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={onSortOrderToggle}
              className="h-11 w-11 rounded-lg border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all"
              title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
            >
              {sortOrder === 'asc' ? 
                <SortAsc className="w-4 h-4" /> : 
                <SortDesc className="w-4 h-4" />
              }
            </Button>
          </motion.div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={onReset}
                className="h-11 px-4 rounded-lg border-gray-200 hover:bg-orange-50 hover:border-orange-300 transition-all text-gray-600 hover:text-orange-600"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Results Summary */}
      {(searchTerm || filterType !== 'all') && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-gray-100"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Showing <span className="font-semibold text-emerald-600">{filteredFiles}</span> of{' '}
              <span className="font-semibold">{totalFiles}</span> files
            </span>
            {searchTerm && (
              <span className="text-gray-500">
                Search: "<span className="text-emerald-600 font-medium">{searchTerm}</span>"
              </span>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchAndFilter;
