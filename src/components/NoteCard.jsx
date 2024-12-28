import { useState } from "react";

const NoteCard = ({
  note,
  onArchive,
  onUnarchive,
  onDelete,
  onDeletePermanently,
  onRestore,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editedNote);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const renderButtons = () => {
    return (
      <div className="flex justify-end gap-2 mt-4">
        {!note.isArchived && !note.isTrash && (
          <>
            <button
              onClick={() => onArchive(note.id)}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Archive
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Move to Trash
            </button>
          </>
        )}

        {note.isArchived && !note.isTrash && (
          <>
            <button
              onClick={() => onUnarchive(note.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Unarchive
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="px-3 py-1 bg-red-700 text-white rounded-md hover:bg-red-800"
            >
              Delete
            </button>
          </>
        )}

        {note.isTrash && (
          <>
            <button
              onClick={() => onRestore(note.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Restore
            </button>
            <button
              onClick={() => onDeletePermanently(note.id)}
              className="px-3 py-1 bg-red-700 text-white rounded-md hover:bg-red-800"
            >
              Delete Permanently
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white flex flex-col p-4 justify-between rounded-lg shadow-md space-y-4">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            style={{ height: "auto", minHeight: "100px" }}
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col">
          <h3
            className="text-xl font-semibold break-words cursor-pointer"
            onClick={handleEditClick}
          >
            {note.title}
          </h3>
          <p
            className="whitespace-normal break-words cursor-pointer"
            onClick={handleEditClick}
          >
            {note.content}
          </p>
        </div>
      )}
      {renderButtons()}
    </div>
  );
};

export default NoteCard;
