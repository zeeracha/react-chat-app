import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Zeebrrra Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="userpic" />
        <span>John</span>
        <button onClick={()=> signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar