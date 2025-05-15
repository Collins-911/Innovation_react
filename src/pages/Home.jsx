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
            <div className="carousel">
              <Carousel/>
              <div className="carousel-title">
                <h1>Students/Staffs at the Last Innovations Presentation</h1>
              </div>
            </div>
            <div className="columns">
              <div style={{backgroundColor: "rgba(106, 115, 250, 1)"}} className="col-1">
                <div className="col-icon">
                  <div className="icon-div">
                    <img src={group}/>
                  </div>
                </div>
                <div className="col-text">
                  <h4>Total Students</h4>
                  <h1>200</h1>
                  <div className="rate">
                    <div className="ratio"></div>
                  </div>
                  <p>80% increase in three months</p>
                </div>
              </div>
              <div style={{backgroundColor: "rgba(255, 170, 22, 1)"}} className="col-1">
                <div className="col-icon">
                  <div className="icon-div">
                     <img src={user}/>
                  </div>
                </div>
                <div className="col-text">
                  <h4>New Students</h4>
                  <h1>40</h1>
                  <div className="rate">
                    <div className="ratio-2"></div>
                  </div>
                  <p>20% increase in three months</p>
                </div>
              </div>
              <div style={{backgroundColor: "rgba(103, 59, 183, 1)"}} className="col-1">
                <div className="col-icon">
                  <div className="icon-div">
                     <img src={hat}/>
                  </div>
                </div>
                <div className="col-text">
                  <h4>Total Courses</h4>
                  <h1>16</h1>
                  <div className="rate">
                    <div className="ratio-3"></div>
                  </div>
                  <p>76% increase in three months</p>
                </div>
              </div>
              <div style={{backgroundColor: "rgba(255, 22, 22 ,1"}} className="col-1">
                 <div className="col-icon">
                  <div className="icon-div">
                     <img src={money}/>
                  </div>
                </div>

                <div className="col-text">
                  <h4>Payment</h4>
                  <h1>300$</h1>
                  <div className="rate">
                    <div className="ratio-4"></div>
                  </div>
                  <p>30% increase in three months</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
