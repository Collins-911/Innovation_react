import React from "react";
import '../css/home.css';
import '../css/payment.css';
import '../css/student.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';



export default function Payment(){
	

	return(
		<>
			<div className="home-content">
		       <Navbar/>
		        <div className="top-content">
		          	<Topnav/>
			        <section className="content" style={{padding: "1rem"}}>
			        	<div className="payment-title" style={{marginTop: "4rem"}}>
			           		<h4>Payment</h4>
			           		<p>Students / <span>Payment</span></p>
			           	</div>
			           	<div className="payment-list">
			           		<div className="list-title">
			           			<h3>Fees collection</h3>
			           		</div>
			           		<div className="student-table payment-table">
			           			<table >
			           				<thead>
			           					<tr>
				           					<th>Student Name</th>
				           					<th>Mobile</th>
				           					<th>Payment Type</th>
				           					<th>Date</th>
				           					<th>Amount</th>
				           					<th>Status</th>
				           				</tr>
			           				</thead>
			           				<tbody>
			           					<tr>
				           					<td>image</td>
				           					<td>person1</td>
				           					<td>course1</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button className="paid">Paid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person2</td>
				           					<td>course2</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="paid">Paid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person3</td>
				           					<td>course3</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="pending">Pending</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person4</td>
				           					<td>course4</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Unpaid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person5</td>
				           					<td>course5</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="paid">Paid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person6</td>
				           					<td>course6</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button>Unpaid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person7</td>
				           					<td>course7</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="paid">Paid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person8</td>
				           					<td>course8</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="paid">Paid</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person9</td>
				           					<td>course9</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="pending">Pending</button></td>
				           				</tr>
				           				<tr>
				           					<td>image</td>
				           					<td>person10</td>
				           					<td>course10</td>
				           					<td>email address</td>
				           					<td>12222222</td>
				           					<td><button  className="paid">Paid</button></td>
				           				</tr>
			           				</tbody>
			           			</table>
			           			<div className="list-btn">
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)"}}>Previous</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white", width: "40px"}}>1</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>2</button>
			           				<button style={{backgroundColor: "rgba(200, 200, 200, 0.7)", width: "40px"}}>3</button>
			           				<button style={{backgroundColor: "rgba(15, 1, 122)", color: "white"}}>Next</button>
			           			</div>
			           		</div>
			           	</div>
			        </section>
		        </div>
			
	      	</div>
		</>
	)
}