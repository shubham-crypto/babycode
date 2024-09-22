import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import React from "react";
import babycode from  '../babycode.png'
import  google from '../google.webp'

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Successful sign-in
      const user = result.user;
      console.log("Login successful:", user);
      
      // Navigate to home
      navigate('/home'); // Use navigate to redirect
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-page flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-blue-900 relative">
      
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src={babycode}
          alt="Babycode Logo" 
          className="w-12 h-12"
        />
        <span className="ml-2 text-2xl  text-white">BabyCode</span>
      </div>
    
      
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center ">
      
        <img 
          src={google} 
          alt="Google Logo" 
          className="w-36 mb-6"
        />
        
      
        <button 
          onClick={handleLogin} 
          className="bg-blue-500  text-white font-bold py-3 px-6 rounded-lg border-2 border-white shadow-xl hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
        >
          Login with Google
        </button>
      </div>
  </div>
  
  );
};

export default Login;
