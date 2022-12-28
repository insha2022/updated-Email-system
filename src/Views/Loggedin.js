import React, { Component } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Compose from './Compose'
import Navbar from '../Navbartest/Navbar'

export default function Loggedin (){
    return(
<> 
{/* <h1>
    NAVBAR
</h1> */}

<Navbar/>
<Outlet>
    
</Outlet>
</>
    )
}