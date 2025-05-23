import React from "react";
import '../css/home.css';
import '../css/student_payment.css';
import '../css/home.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';



export default function Student_payment(){


	return(
		<>
			<div className="home-content">
				<Navbar/>
		        <div className="top-content">
			       <Topnav/> 
			        <section className="content" style={{padding: "1rem"}}>
			        	<div className="sp-title" style={{marginTop: "4rem"}}>
			           		<h4>Fees Reciept</h4>
			           		<p>Students / <span>Fees Receipt</span></p>
			           	</div>
			           	<div className="reciept-home">
			           		<div className="reciept-title">
			           			<p><strong>01/01/2025</strong></p>
			           			<p id="reciept-p"><strong>Status:</strong> Paid</p>
			           		</div>
			           		<div className="reciept">
			           			<div className="reciept-address">
				           			<div className="address-from">
				           				<h5>From:</h5>
				           				<p><strong>Nugi Innovations</strong></p>
				           				<p>Solomom Ikpa street</p>
				           				<p>Email: info@example.com</p>
				           				<p>Phone: +01 123 456 7890</p>
				           			</div>
				           			<div className="address-to">
				           				<h5>To:</h5>
				           				<p><strong>Jacinta Bisong</strong></p>
				           				<p>#9 Ekpo Iso street</p>
				           				<p>Email: info@example.com</p>
				           				<p>Phone: +01 123 456 7890</p>
				           			</div>
				           		</div>
				           		<div className="student-table">
				           			<table >
				           				<thead>
				           					<tr>
					           					<th style={{paddingBottom: "8px"}}>Name</th>
					           					<th style={{paddingBottom: "8px"}}>Course</th>
					           					<th style={{paddingBottom: "8px"}}>Duration</th>
					           					<th style={{paddingBottom: "8px"}}>Date</th>
					           					<th style={{paddingBottom: "8px"}}>Amount</th>
					           				</tr>
				           				</thead>
				           				<tbody>
				           					<tr style={{backgroundColor: "rgba(200, 200, 200, 0.3)"}}>
					           					<td style={{color: "black", height: "50px"}}>Jacinta Bisong</td>
					           					<td style={{color: "black", height: "50px"}}>Web Development</td>
					           					<td style={{color: "black", height: "50px"}}>6 months</td>
					           					<td style={{color: "black", height: "50px"}}>01/01/2025</td>
					           					<td style={{color: "black", height: "50px"}}>123456789</td>
					           				</tr>
				           				</tbody>
				           			</table>
				           			<p id="total-p"><strong>Total:</strong> 123456789</p>
				           		</div>
				           		<button>Report an issue</button>
			           		</div>
			           	</div>
			        </section>
		        </div>
		    </div>
		</>
	)
}