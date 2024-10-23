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
        <ul class="nav-items">
            <li onClick={()=> navigate("../App")} >Logout</li>
        </ul>
    </div>
  )
}

export default Navbar


