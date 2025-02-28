
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

// Import components
import ClassificationHeader from "./classification/ClassificationHeader";
import ClassificationSearch from "./classification/ClassificationSearch";
import ClassificationListView from "./classification/ClassificationListView";
import ClassificationGridView from "./classification/ClassificationGridView";
import ClassificationPagination from "./classification/ClassificationPagination";
import AudioAnnotationView from "./classification/AudioAnnotationView";
import { mockClassifications } from "./classification/mockData";
import { filterAndSortClassifications } from "./classification/utils";
import { ClassificationItem } from "./classification/types";

const Classification = () => {
  const [selectedClassification, setSelectedClassification] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<"time" | "species" | "confidence">("time");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingSpecies, setEditingSpecies] = useState<string | null>(null);
  const [newSpeciesName, setNewSpeciesName] = useState("");
  const [allClassifications, setAllClassifications] = useState<ClassificationItem[]>(mockClassifications);
  
  const recordingsPerPage = 10;

  // Filter and sort classifications
  const filteredClassifications = filterAndSortClassifications(
    allClassifications,
    searchQuery,
    sortField,
    sortDirection
  );

  // Filter out verified items
  const unverifiedClassifications = filteredClassifications.filter(item => !item.verified);
  
  // Pagination
  const totalPages = Math.ceil(unverifiedClassifications.length / recordingsPerPage);
  const paginatedClassifications = unverifiedClassifications.slice(
    (currentPage - 1) * recordingsPerPage,
    currentPage * recordingsPerPage
  );
  
  const selectedItem = selectedClassification 
    ? allClassifications.find(c => c.id === selectedClassification) 
    : null;

  const handleAnnotate = (id: string) => {
    setSelectedClassification(id);
  };

  const handleSaveAnnotation = (annotations: any[]) => {
    console.log("Saved annotations:", annotations);
    if (selectedItem) {
      toast.success(`Saved ${annotations.length} annotations for ${selectedItem.species}`);
    }
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === "asc" ? "desc" : "asc");
  };

  const handleChangePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleVerifyClassification = (id: string) => {
    setAllClassifications(prevClassifications => 
      prevClassifications.map(c => 
        c.id === id ? { ...c, verified: true } : c
      )
    );
    toast.success("Classification verified!");
  };

  const handleStartEdit = (id: string, currentSpecies: string) => {
    setEditingSpecies(id);
    setNewSpeciesName(currentSpecies);
  };

  const handleCancelEdit = () => {
    setEditingSpecies(null);
    setNewSpeciesName("");
  };

  const handleSaveEdit = (id: string) => {
    if (newSpeciesName.trim()) {
      setAllClassifications(prevClassifications => 
        prevClassifications.map(c => 
          c.id === id ? { ...c, species: newSpeciesName.trim(), verified: true } : c
        )
      );
      setEditingSpecies(null);
      setNewSpeciesName("");
      toast.success("Species name updated and verified!");
    }
  };

  const handleDeleteClassification = (id: string) => {
    setAllClassifications(prevClassifications => 
      prevClassifications.filter(c => c.id !== id)
    );
    toast.success("Classification removed!");
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
    toast.info("Playing audio");
  };

  return (
    <div className="p-8">
      <ClassificationHeader viewMode={viewMode} setViewMode={setViewMode} />
      
      <div className="mb-6">
        <Card className="p-6">
          <ClassificationSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortField={sortField}
            setSortField={setSortField}
            sortDirection={sortDirection}
            toggleSortDirection={toggleSortDirection}
            setCurrentPage={setCurrentPage}
          />

          {unverifiedClassifications.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">No unverified classifications to display</p>
              <p className="text-sm text-gray-400 mt-2">All classifications have been verified or removed</p>
            </div>
          ) : (
            <>
              {/* Classification items */}
              {viewMode === "list" ? (
                <ClassificationListView 
                  classifications={paginatedClassifications}
                  editingSpecies={editingSpecies}
                  newSpeciesName={newSpeciesName}
                  setNewSpeciesName={setNewSpeciesName}
                  handleSaveEdit={handleSaveEdit}
                  handleCancelEdit={handleCancelEdit}
                  playAudio={playAudio}
                  handleAnnotate={handleAnnotate}
                  handleVerifyClassification={handleVerifyClassification}
                  handleDeleteClassification={handleDeleteClassification}
                />
              ) : (
                <ClassificationGridView 
                  classifications={paginatedClassifications}
                  editingSpecies={editingSpecies}
                  newSpeciesName={newSpeciesName}
                  setNewSpeciesName={setNewSpeciesName}
                  handleSaveEdit={handleSaveEdit}
                  handleCancelEdit={handleCancelEdit}
                  playAudio={playAudio}
                  handleAnnotate={handleAnnotate}
                  handleVerifyClassification={handleVerifyClassification}
                  handleDeleteClassification={handleDeleteClassification}
                />
              )}

              {/* Pagination */}
              <ClassificationPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={unverifiedClassifications.length}
                itemsPerPage={recordingsPerPage}
                handleChangePage={handleChangePage}
              />
            </>
          )}
        </Card>
      </div>

      {selectedClassification && selectedItem && (
        <AudioAnnotationView 
          selectedItem={selectedItem}
          handleSaveAnnotation={handleSaveAnnotation}
          setSelectedClassification={setSelectedClassification}
        />
      )}
    </div>
  );
};

export default Classification;
