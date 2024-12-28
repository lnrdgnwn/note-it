import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WorkspaceHeader from "../components/WorkspaceHeader";
import WorkspaceSidebar from "../components/WorkspaceSidebar";
import Notes from "../components/Notes";
import ArchivedNotes from "../components/ArchivedNotes";
import TrashNotes from "../components/TrashNotes";
import useNotes from "../hooks/useNotes";

function Workspace() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleLayout = () => setIsGrid((prev) => !prev);

  const {
    notes,
    addNote,
    editNote,
    deleteNote,
    archiveNote,
    unarchiveNote,
    moveToTrash,
    restoreNote,
    deletePermanentNote,
  } = useNotes("userId");

  return (
    <div className="flex flex-col sm:flex-row md:ml-64 ">
      <WorkspaceSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex-1 bg-primary">
        <WorkspaceHeader
          toggleSidebar={toggleSidebar}
          toggleLayout={toggleLayout}
          isGrid={isGrid}
          onSearch={setSearchQuery}
          isSidebarOpen={isSidebarOpen}
        />

        <div className="min-h-screen flex-1 bg-primary transition-all duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <Notes
                  isGrid={isGrid}
                  notes={notes}
                  searchQuery={searchQuery}
                  onAddNote={addNote}
                  onEdit={editNote}
                  onDelete={deleteNote}
                  onArchive={archiveNote}
                  onUnarchive={unarchiveNote}
                  onMoveToTrash={moveToTrash}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <ArchivedNotes
                  isGrid={isGrid}
                  searchQuery={searchQuery}
                  notes={notes}
                  onUnarchive={unarchiveNote}
                  onDelete={deleteNote}
                />
              }
            />
            <Route
              path="/trash"
              element={
                <TrashNotes
                  isGrid={isGrid}
                  searchQuery={searchQuery}
                  notes={notes}
                  onDeletePermanently={deletePermanentNote}
                  onRestore={restoreNote}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
