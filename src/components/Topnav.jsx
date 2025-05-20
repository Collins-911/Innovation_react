import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import '../css/top.css';

export default function TopNav() {

		const w3School = 'https://www.w3schools.com/'
		const nugi = 'https://nugitech.com/'

	return (
		<>
			<div className="topnav-container">
				{/* Desktop view */}
				<div className="top">
					<div className="logo">LOGO</div>
	
					<div className="right-section">

							
			<a href={w3School}>
				<div className="w3">
					<img src="data:image/png;base64,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" alt="" />
				</div>
			</a>

			<a href={nugi}>
				<div className="w3">
					<img src="https://nugigroup.s3.us-west-1.amazonaws.com/nugi-website/public/assets/icons/logo.svg" alt="" />
				</div>
			</a>
					

						<div className="searchInput">
							<input type="text" placeholder="Search..." className="search" />
							<button className="searchBtn">
								<img src={icon2} alt="Search" />
							</button>
						</div>
						<img src={icon7} alt="Profile" className="pfp" />
					</div>
				</div>

				{/* Mobile view */}
				<div className="mobile-top">
					<div className="mobile-logo">LOGO</div>
					<div className="mobile-icons">
						<img src={icon2} alt="Search" className="mobile-icon" />
						<img src={icon7} alt="Profile" className="mobile-icon" />
					</div>
				</div>
			</div>
		</>
	);
}
