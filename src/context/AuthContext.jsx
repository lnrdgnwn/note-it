import  { createContext, useState, useEffect, useContext } from "react";
import { db, auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = async (userId) => {
    try {
      const docRef = doc(db, "notes", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNotes(docSnap.data().content);
      } else {
        setNotes([]);
      }
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Failed to fetch notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(true);
        fetchNotes(user.uid);
      } else {
        setCurrentUser(null);
        setNotes([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Save notes to Firestore
  const saveNotes = async (content) => {
    if (currentUser) {
      try {
        const docRef = doc(db, "notes", currentUser.uid);
        await setDoc(docRef, { content });
        setNotes(content);
      } catch (err) {
        console.error("Error saving notes:", err);
        setError("Failed to save notes");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 border-solid"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        notes,
        saveNotes,
        loading,
        error,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
