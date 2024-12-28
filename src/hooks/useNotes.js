import { useState, useEffect, useContext } from "react";
import { useAuth } from "../context/AuthContext";
import * as noteService from "../services/notes";

const useNotes = () => {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const userNotes = await noteService.getNotes(currentUser.uid);

          const uniqueNotes = userNotes.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.id === value.id)
          );

          setNotes(uniqueNotes);
        } catch (error) {
          console.error("Error fetching notes:", error);
        }
      }
    };
    fetchData();
  }, [currentUser]);

  const addNote = async (newNote) => {
    try {
      const noteId = await noteService.addNote(currentUser.uid, newNote);
      const addedNote = { ...newNote, id: noteId };
      setNotes((prevNotes) => [...prevNotes, addedNote]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const editNote = async (updatedNote) => {
    try {
      await noteService.updateNote(updatedNote.id, updatedNote);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === updatedNote.id ? updatedNote : note
        )
      );
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };


  const deleteNote = async (noteId) => {
    try {
      await noteService.deleteNote(noteId); // Hanya tandai sebagai sampah
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, isTrash: true } : note
        )
      );
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Mengarsipkan note
  const archiveNote = async (noteId) => {
    try {
      await noteService.archiveNote(noteId);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, isArchived: true } : note
        )
      );
    } catch (error) {
      console.error("Error archiving note:", error);
    }
  };

  // Membuka arsip
  const unarchiveNote = async (noteId) => {
    try {
      await noteService.unarchiveNote(noteId);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, isArchived: false } : note
        )
      );
    } catch (error) {
      console.error("Error unarchiving note:", error);
    }
  };

  const restoreNote = async (noteId) => {
    try {
      await noteService.restoreNote(noteId);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, isTrash: false } : note
        )
      );
    } catch (error) {
      console.error("Error restoring note:", error);
    }
  };

  const deletePermanentNote = async (noteId) => {
    try {
      await noteService.deletePermanentNote(noteId);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error("Error deleting permanent note:", error);
    }
  };

  return {
    notes,
    addNote,
    editNote,
    deleteNote,
    archiveNote,
    unarchiveNote,
    restoreNote,
    deletePermanentNote,
  };
};

export default useNotes;
