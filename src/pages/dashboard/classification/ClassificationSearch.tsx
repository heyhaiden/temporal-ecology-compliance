
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, ArrowUp, ArrowDown } from "lucide-react";

interface ClassificationSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortField: "time" | "species" | "confidence";
  setSortField: (field: "time" | "species" | "confidence") => void;
  sortDirection: "asc" | "desc";
  toggleSortDirection: () => void;
  setCurrentPage: (page: number) => void;
}

const ClassificationSearch = ({
  searchQuery,
  setSearchQuery,
  sortField,
  setSortField,
  sortDirection,
  toggleSortDirection,
  setCurrentPage
}: ClassificationSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
      <div className="flex items-center gap-2 flex-grow max-w-md">
        <Search className="h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search by species or date..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
          className="max-w-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center">
          <Select 
            value={sortField} 
            onValueChange={(value) => setSortField(value as "time" | "species" | "confidence")}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="time">Date/Time</SelectItem>
              <SelectItem value="species">Species</SelectItem>
              <SelectItem value="confidence">Confidence</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSortDirection}
            className="ml-1"
          >
            {sortDirection === "asc" ? 
              <ArrowUp className="h-4 w-4" /> : 
              <ArrowDown className="h-4 w-4" />
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClassificationSearch;
