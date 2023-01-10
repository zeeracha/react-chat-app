import Add from "../img/addAvatar.png" 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    // console.log(e.target[0].value)
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }catch(err){
      setErr(true);
    } 
  }

  
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className="logo">Zeebrrra Chat</span>
        <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login