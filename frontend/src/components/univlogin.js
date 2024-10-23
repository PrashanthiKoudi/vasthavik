import Navbar from './Navbar/Navbar'
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import univImage from './assets_components/univ2.png'; 
import { useNavigate } from "react-router-dom";
import { red } from '@mui/material/colors';


export default function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const logInUser = () => {
        setError(false);
        if (username.length === 0) {
            alert("Username has left Blank!");
        }
        else if (password.length === 0) {
            alert("Password has left Blank!");
        }
        else {
            axios.post('http://127.0.0.1:5000/post_univ', { username, password })
                .then(response => {
                    // alert(response)
                    if (response) {
                        // setError(false);
                        // console.log("response", response.data);
                        localStorage.setItem("loginData",JSON.stringify(response.data))
                        navigate('/univindex');
                        // window.location.href = '/emplogin'; // Redirect to emplogin page
                    }
                }).catch((e) => {
                    console.log("error: ",e);
                    setError(true);
                });
        };
    };

    return (

        <>
            <Navbar />
            <div className='uni'>
                <div className='univbox'>
                    <div className='loginModal'>
                        <div>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='univbox'>
                <div 
    className='login' 
    style={{ 
        backgroundImage: `url(${univImage})`, 
        position: 'relative', 
        left: '39%', 
        top: '-1px', 
        zIndex: 1, 
        padding: '5px', 
        width: '100px', 
        height: '100px', 
        backgroundSize: 'cover'
    }}
></div>
                <div className='loginModal'>
                        <div>
                            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => { setUsername(e.target.value); }} style={{ marginBottom: '20px', }} />

                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                        </div>
                        {error && <Typography sx={{color: "red"}}>Invalid Username Password</Typography>}
                        <button type="submit" className="submitButton" onClick={logInUser} style={{ marginTop: '20px' }}>Submit</button>
                    </div>
                </div>
            </div>
        </>

    )
}