import React from "react";
import '../css/home.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';


export default function Home() {
  return (
    <>

    <div className="home-flex">
        <Navbar/>
        <Topnav/> 
    </div>
       
    </>
  )
}
