import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate = useNavigate();
const [id, setId] = useState("");

  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/> 
       <span className='logo-text'>Vastavik</span> 
        <ul class="nav-items">
            <li onClick={()=> navigate("/university")} >University</li>
            <li onClick={()=> navigate("/student")} >Student</li>
            <li onClick={()=> navigate("/employee")} >Employee</li>
        </ul>
    </div>
  )
}

export default Navbar



