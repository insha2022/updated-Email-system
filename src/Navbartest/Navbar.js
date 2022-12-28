import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/Loggedin/Home'>Home</Link>
      <Link to='/Loggedin/Users'>Users</Link>
      <Link to='/Loggedin/Compose'>Compose</Link>
 
    </nav>
  );
  }