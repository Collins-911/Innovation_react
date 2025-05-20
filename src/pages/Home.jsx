import React from "react";
import '../css/home.css';
import user from '../assets/user.svg';
import group from '../assets/group.svg';
import hat from '../assets/hat.svg';
import money from '../assets/money.svg';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';
import Carousel from "../components/Carousel.jsx"





export default function Home() {



  return (
    <>
      <div className="home-container">
        <Topnav/>
        <div className="home">
          <Navbar/>
          <section className="dash-home">
           
          </section>
        </div>
      </div>
    </>
  )
}
