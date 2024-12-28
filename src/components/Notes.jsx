import { useMemo } from "react";
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";

const Notes = ({
  notes,
  onAddNote,
  onDelete,
  onArchive,
  onMoveToTrash,
  onUnarchive,
  isGrid,
  searchQuery,
}) => {
  const filteredNotes = useMemo(() => {
    if (!searchQuery || searchQuery.length === 0) {
      return notes.filter((note) => !note.isTrash && !note.isArchived);
    }
    const query = searchQuery.toLowerCase();

    return notes.filter((note) => {
      const title = note.title?.toLowerCase() || "";
      const content = note.content?.toLowerCase() || "";
      return (
        !note.isTrash &&
        !note.isArchived &&
        (title.includes(query) || content.includes(query))
      );
    });
  }, [searchQuery, notes]);

  return (
    <div className="p-6 gap-32 bg-primary rounded-lg shadow-md">
      <NoteForm onAddNote={onAddNote} />
      <h2 className="text-3xl font-bold mt-6 text-white ">My Notes</h2>
      <div
        className={`mt-6 ${
          isGrid
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex flex-col space-y-4"
        }`}
      >
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
              onMoveToTrash={onMoveToTrash}
              onUnarchive={onUnarchive}
            />
          ))
        ) : (
          <p className="text-gray-500">No matching notes found.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
