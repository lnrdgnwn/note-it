import { useMemo } from "react";
import NoteCard from "./NoteCard";

const ArchivedNotes = ({
  notes,
  isGrid,
  onDelete,
  onUnarchive,
  searchQuery,
}) => {
  const filteredNotes = useMemo(() => {
    if (!searchQuery || searchQuery.length === 0) {
      return notes.filter((note) => note.isArchived && !note.isTrash);
    }
    const query = searchQuery.toLowerCase();

    return notes.filter((note) => {
      const title = note.title?.toLowerCase() || "";
      const content = note.content?.toLowerCase() || "";
      return (
        note.isArchived &&
        !note.isTrash &&
        (title.includes(query) || content.includes(query))
      );
    });
  }, [searchQuery, notes]);

  return (
    <div className="p-6 bg-primary rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Archived Notes</h2>
      <div
        className={`mt-6 ${
          isGrid
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex flex-col space-y-4 justify-center"
        }`}
      >
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={onDelete}
              onUnarchive={onUnarchive}
            />
          ))
        ) : (
          <p className="text-gray-500">No Matching Archived Notes Found</p>
        )}
      </div>
    </div>
  );
};

export default ArchivedNotes;
