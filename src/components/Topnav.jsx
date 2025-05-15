import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import '../css/home.css';

export default function TopNav(){
	return(
		<>
			<div className="top">
	          <div className="searchInput">	
	            <input type="text" placeholder="Search..." className="search" />
	            <button className="searchBtn">    
	              <img src={icon2} alt="Search" />
	            </button>
	          </div>
	          <img src={icon7} alt="Profile" className="pfp" />
	        </div>
		</>
	)
}