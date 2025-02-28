
import { ClassificationItem } from "./types";

export const filterAndSortClassifications = (
  classifications: ClassificationItem[],
  searchQuery: string,
  sortField: "time" | "species" | "confidence",
  sortDirection: "asc" | "desc"
): ClassificationItem[] => {
  return classifications
    .filter(item => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.species.toLowerCase().includes(query) ||
        item.time.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      // Sort logic
      if (sortField === "time") {
        return sortDirection === "asc" 
          ? new Date(a.time).getTime() - new Date(b.time).getTime()
          : new Date(b.time).getTime() - new Date(a.time).getTime();
      } else if (sortField === "species") {
        return sortDirection === "asc"
          ? a.species.localeCompare(b.species)
          : b.species.localeCompare(a.species);
      } else { // confidence
        return sortDirection === "asc" 
          ? a.confidence - b.confidence 
          : b.confidence - a.confidence;
      }
    });
};
