import { Button } from "@/styles/ui/button";
import { Input } from "@/styles/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/styles/ui/select";
import { Search, Filter, RotateCcw } from "lucide-react";

interface ActivityLogFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  sortOrder: "asc" | "desc";
  onSortOrderChange: (value: "asc" | "desc") => void;
  totalLogs: number;
  filteredLogs: number;
}

const ActivityLogFilters = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  sortOrder,
  onSortOrderChange,
  totalLogs,
  filteredLogs,
}: ActivityLogFiltersProps) => {
  const handleReset = () => {
    onSearchChange("");
    onFilterChange("all");
    onSortOrderChange("desc");
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-0 p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-11 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <Select value={filterType} onValueChange={onFilterChange}>
            <SelectTrigger className="w-full sm:w-48 h-11 border-gray-200 rounded-xl">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <SelectValue placeholder="Filter by type" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
              <SelectItem value="all">All Activities</SelectItem>
              <SelectItem value="upload">Uploads</SelectItem>
              <SelectItem value="delete">Deletions</SelectItem>
              <SelectItem value="share">Shares</SelectItem>
              <SelectItem value="update">Updates</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortOrder} onValueChange={onSortOrderChange}>
            <SelectTrigger className="w-full sm:w-48 h-11 border-gray-200 rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium text-emerald-600">{filteredLogs}</span>
            {filteredLogs !== totalLogs && (
              <span> of {totalLogs}</span>
            )} activities
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="gap-2 hover:bg-emerald-50"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogFilters;
