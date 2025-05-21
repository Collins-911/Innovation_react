import React from "react";
import '../css/home.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Home() {
  
  const Username = 'Nathan'
  
  return (
  
    <>
  <div className="home-content">
    <Navbar/>
      <div className="top-content">
         <Topnav/>
        <div className="content">

              
              <div className="info-home">
                <h4>Welcome to the dashboard, <span>{Username}</span>😜</h4>
                
              </div>
          </div>

         </div> 
</div>
  
  


 
  

   
    
  

   
        
       
  
       
    </>
  )
}
