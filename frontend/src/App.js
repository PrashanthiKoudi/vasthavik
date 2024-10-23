import React from 'react'
import { BrowserRouter as Router,Routes,Route,   createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import Univlogin from './components/univlogin';
import Studlogin from './components/studlogin';
import Emplogin from './components/emplogin';
import Univindex from './components/univindex';
import Navbar from './components/Navbar/Navbar'
import Addstud from './components/addstud'
import Viewstud from './components/viewstud'
import "./App.css";
import Studindex from './components/studindex';
import Certireq from './components/certireq';
import Sndcerti from './components/sndcerti';
import Viewreq from './components/viewreq';
import Issuecerti from './components/issuecerti';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='container'>
         <Navbar/>
      </div>
    ),
  },
  {
    path: "/university",
    element: <Univlogin />,
  },
  {
    path: "/student/",
    element: <Studlogin />,
  },
  {
    path: "/employee",
    element: <Emplogin />,
  },
  {
    path: "/univindex",
    element: <Univindex />,
  },
  {
    path: "/addstud",
    element: <Addstud />,
  },
  {
    path: "/viewstud",
    element: <Viewstud />,
  },

  {
    path: "/studindex",
    element: <Studindex />,
  },
  {
    path: "/certireq",
    element: <Certireq />,
  },
  {
    path: "/sndcerti",
    element: <Sndcerti />,
  },
  {
    path: "/viewreq",
    element: <Viewreq />,
  },

  {
    path: "/issuecerti",
    element: <Issuecerti />,
  },

]);

const App = () => {
  return (
    <div className="bg">
    <RouterProvider router={router} />
  </div>
  )
}

export default App
