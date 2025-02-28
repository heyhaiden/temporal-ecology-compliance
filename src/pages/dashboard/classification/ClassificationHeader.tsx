
import React from "react";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";

interface ClassificationHeaderProps {
  viewMode: "list" | "grid";
  setViewMode: (mode: "list" | "grid") => void;
}

const ClassificationHeader = ({ viewMode, setViewMode }: ClassificationHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">Classification</h1>
      
      <div className="flex border rounded-md">
        <Button
          variant={viewMode === "list" ? "default" : "ghost"}
          size="sm"
          className="rounded-r-none"
          onClick={() => setViewMode("list")}
        >
          <List className="h-4 w-4 mr-1" /> List
        </Button>
        <Button
          variant={viewMode === "grid" ? "default" : "ghost"}
          size="sm"
          className="rounded-l-none"
          onClick={() => setViewMode("grid")}
        >
          <Grid className="h-4 w-4 mr-1" /> Grid
        </Button>
      </div>
    </div>
  );
};

export default ClassificationHeader;
