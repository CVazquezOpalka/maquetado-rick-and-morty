import { firebaseAuth } from "../firebase.config";
import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


export const AuthContext = createContext();

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("no me pasaste el contexto");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const suscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => suscribe();
  }, []);
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
  };
  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
  };
  const loginWhitGoogle = async () => {
    const googleResponse = new GoogleAuthProvider();
    return await signInWithPopup(firebaseAuth, googleResponse);
  };

  const logOut = async () => {
    const response = signOut(firebaseAuth);
  };
  return (
    <AuthContext.Provider value={{ register, signIn, loginWhitGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
