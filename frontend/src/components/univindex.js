import * as React from 'react';
import { ImageListItem, ImageList, Typography } from '@mui/material';
import Navbar from './Navbar/Navbar'
import univImage from './assets_components/univ2.png';
import stud from './assets_components/stude.png';
import certi from './assets_components/certi.png';
import req from './assets_components/requ.png';
import viewstu from './assets_components/viewstude.png';
import { useNavigate } from "react-router-dom";


export default function () {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("loginData"));
    return (
        <>
            <Navbar />
            <div className='page'>
                <Typography>{`Welcome ${userData.name},`}</Typography>
                <div className='row'>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${stud})`, cursor: 'pointer' }}onClick={() => navigate('/Addstud')}></div>
                        <text> Add new student</text>
                    </div>
                    <div className='block'>
                        <div className='certiimg' style={{ backgroundImage: `url(${certi})` }}></div>
                        <text> Issue Certificates</text>
                    </div>
                    <div className='block'>
                        <div className='reqimg' style={{ backgroundImage: `url(${req})` }}></div>
                        <text> View All Requests</text>
                    </div>
                </div>
                <div className='row'>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${viewstu})`, cursor: 'pointer' }}onClick={() => navigate('/viewstud')}>
                        </div>
                        <text> View All Students</text>
                    </div>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${viewstu})` }}>
                        </div>
                        <text> View All Students</text>
                    </div>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${viewstu})` }}>
                        </div>
                        <text> View All Students</text>
                    </div>
                </div>
                <div className='row'>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${univImage})` }}></div>
                        <text> Add new student</text>
                    </div>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${univImage})` }}></div>
                        <text> Issue Certificates</text>
                    </div>
                    <div className='block'>
                        <div className='blkimg' style={{ backgroundImage: `url(${univImage})` }}></div>
                        <text> View All Requests</text>
                    </div>
                </div>
            </div>
        </>
    )
}