// components/LoginComponent.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles.css';


const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();  // Initialize useNavigate
  
  const handleLogin = async () => {
    /* try {
      const user = await login(username, password);
      // Navigate to home or dashboard
    } catch (err) {
      setError("Invalid username or password");
    } */
  };
  
  const goToSignUp = () => {
    navigate('/signUp');  // Navigate to SignUpComponent
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={goToSignUp}>Don't have an account? Sign up</button>  {/* Add this line */}
    </div>
  );
};

export default LoginComponent;
