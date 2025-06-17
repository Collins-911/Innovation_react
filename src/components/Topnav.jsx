import { Link } from 'react-router-dom';
import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import '../css/top.css';
import React, {useState} from 'react';
import { FaReact } from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";


export default function TopNav() {
	const w3School = 'https://www.w3schools.com/';
	const nugi = 'https://nugitech.com/';
	const front = 'https://www.frontendmentor.io/home'
	const free = 'https://www.freecodecamp.org/'




  return (
    <div className="topnav-container">
            <div className="top">
               <div className="hamburger">
      <CiMenuFries size={30} color="#fff" style={{ cursor: 'pointer' }} />


      

       
         
        </div>
        
                <div className="right-section">
                    <a href={w3School} target="_blank" rel="noopener noreferrer">
                        <div className="w3">
                            <img src="data:image/png;base64,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" alt="" />
                        </div>
                    </a>

                    <a href={nugi} target="_blank" rel="noopener noreferrer">
                        <div className="w3">
                            <img src="https://nugigroup.s3.us-west-1.amazonaws.com/nugi-website/public/assets/icons/logo.svg" alt="NUGI" />
                        </div>
                    </a>

					<a href={front}>
						<div className="w3">
							<img src="data:image/jpeg;base64,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" alt="" />
						</div>
					</a>

						<a href={free}>
						<div className="w3">
							<img src="data:image/png;base64,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" alt="" />
						</div>
					</a>


                    <div className="searchInput">
                        <input type="text" placeholder="Search..." className="search" />
                        <button className="searchBtn">
                            <img src={icon2} alt="Search" />
                        </button>
                    </div>

                    <Link to="/profile/profile">
                        <img src={icon7} alt="Profile" className="pfp" />
                    </Link>
                </div>
            </div>

             <div>
    
    
   
  </div>

            

            
        </div>
    );
}

