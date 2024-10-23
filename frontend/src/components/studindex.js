import Navstud from './Navbar/navstud'
import React, { useState } from 'react';


const Studindex = () => {
    const userData = JSON.parse(localStorage.getItem("loginData"));

    return(
        <>
        <Navstud/>
        </>
    )
};

export default Studindex;