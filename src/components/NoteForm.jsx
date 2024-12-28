import  { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";

const NoteForm = ({ onAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addNote = async (e) => {
    e.preventDefault();
    setError("");

    if (!noteTitle.trim()) {
      setError("Title is required");
      return;
    }
    if (!noteContent.trim()) {
      setError("Content cannot be empty");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setError("You must be logged in to add notes.");
      return;
    }

    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(db, "notes"), {
        title: noteTitle.trim(),
        content: noteContent.trim(),
        userId: user.uid,
        createdAt: new Date(),
      });

      onAddNote({
        id: docRef.id,
        title: noteTitle.trim(),
        content: noteContent.trim(),
        userId: user.uid,
        createdAt: new Date(),
      });

      setNoteTitle("");
      setNoteContent("");
      setError("");
    } catch (error) {
      setError("Error adding note: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Note</h2>
      <form onSubmit={addNote} className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Content</label>
          <textarea
            placeholder="Enter content"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className={`w-full px-4 py-2 ${
            isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-medium rounded-lg shadow`}
          disabled={isLoading}
        >
          {isLoading ? <span className="animate-spin">🔄</span> : "Add Note"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
