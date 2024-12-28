import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";

export const getNotes = async (userId) => {
  try {
    const notesRef = collection(db, "notes");
    const q = query(notesRef, where("userId", "==", userId));
    const notesSnapshot = await getDocs(q);
    const notesList = notesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return notesList;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

export const updateNote = async (id, updatedData) => {
  const noteRef = doc(db, "notes", id);
  await updateDoc(noteRef, updatedData);
};

export const deleteNote = async (noteId) => {
  const noteRef = doc(db, "notes", noteId);
  await updateDoc(noteRef, { isTrash: true });
};

export const addNote = async (userId, newNote) => {
  const notesRef = collection(db, "notes");
  const noteWithUserId = { ...newNote, userId };
  const docRef = await addDoc(notesRef, noteWithUserId);
  return docRef.id;
};

export const archiveNote = async (noteId) => {
  const noteRef = doc(db, "notes", noteId);
  await updateDoc(noteRef, { isArchived: true });
};

export const unarchiveNote = async (noteId) => {
  const noteRef = doc(db, "notes", noteId);
  await updateDoc(noteRef, { isArchived: false });
};

export const restoreNote = async (noteId) => {
  const noteRef = doc(db, "notes", noteId);
  await updateDoc(noteRef, { isTrash: false });
};

export const deletePermanentNote = async (noteId) => {
  const noteRef = doc(db, "notes", noteId);
  await deleteDoc(noteRef);
};
