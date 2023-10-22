// src/utils/SignUpComponent.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();  // Initialize useNavigate

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');  // Navigate to homepage
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleSignUp}>SignUp</button>
    </div>
  );
};

export default SignUpComponent;
