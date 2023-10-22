// src/components/auth.js
import { useState, useEffect } from "react";
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsUserLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsUserLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="InputButtonContainer">
      {isUserLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button className="ActionButton" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <input 
            className="InputField"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            className="InputField"
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="ActionButton" onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};
