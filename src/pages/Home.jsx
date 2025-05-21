import React from "react";
import '../css/home.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';


export default function Home() {
  return (
    <>
  <div className="home-content">
      <Navbar/>
      <div className="top-content">
         <Topnav/>
        <div className="content">
         
         
         <div class="miniplayer">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADwAPAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAwEEBQIH/8QAMhAAAgIBAQUFBAsAAAAAAAAAAQIAAxEEBRIhMUETMmFxoRRRYoEGIiNCcpGSscHR8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDw2TiddcRq/WGMQEYPuhg+6aKpk7p4DrHU0tah7NCdwEkjp5wMeTgjmDNc6O1m3tzOPeZVZd1iGIGOnPMCjCNs58WLes4MCI2pghB6fvFSQcEeEDd2WKHsAtrZhgd3Ax0yOHnNqrWaFqNU9KP2ItWutM5B7xHT4fWYmwVrNOs1NquVqVEGDyZ2ABPDwMdotGE+jJfUamvTtrNrU1Vs/wB1a0sFj/hHapygTtGxLLgu9uoqqxUDkGUMD48COEytTgk5B6ZJ5Dh/sv7Tu092p1mq0Db1BudakYHIqQKKyfErvfpMxrre0bIgcWd7AxiR5QJycmRAIQhA1NiU26uvaOkob7SzS7yVdbSjqxA8d0MflKus1turTTpYcJRXuIo5cSWJ8ySTEVWPTaltTsliMGRlOCpHIiXduezHWq+lqNS2UVWOmMKHZAW3fhyTiBSQuoYryxg/Ph/c4jWKrp0VTlmYs3DljgP59IqAQhCAQkQgTL+1tfVrV0K00mr2bSJQ2WzvsCxLesz4QHXWq9dKqm6a0Ksc947xOfyIHyipEIEwzIhA/9k=" alt="Album Art" class="cover"/>
              <div class="track-info">
                <h4> In The Stars </h4>
                <p>Benson Boone</p>
                          </div>
              <div class="controls">
                <button>⏮️</button>
                <button>⏯️</button>
                <button>⏭️</button>
              </div>
</div>


 
    </div>

          </div>
      </div>
  

   
        
       
  
       
    </>
  )
}
