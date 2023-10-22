// Updated LoginComponent.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const LoginComponent = () => {
  const [email, setEmail] = useState("");  // Added this line
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();  // Initialize useNavigate
  
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);  // Updated this line
      navigate('/home');
    } catch (err) {
      setError("Invalid email or password");
    }
  };
  
  const goToSignUp = () => {
    navigate('/signUp');  // Navigate to SignUpComponent
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Email" 
        value={email}  // Added this line
        onChange={(e) => setEmail(e.target.value)}  // Added this line
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={goToSignUp}>Don&apos;t have an account? Sign up</button>
    </div>
  );
};

export default LoginComponent;
