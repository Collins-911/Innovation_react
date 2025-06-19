import React from "react";
import '../css/home.css';
import '../css/student_payment.css';
import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';



export default function Student_payment(){


	return(
		<>
			<div className="home-content">
				<Sidebar/>
		        <div className="top-content">
			       <Topnav/> 
			        <section className="content" style={{padding: "1rem"}}>
			        	<div className="sp-title" style={{marginTop: "4rem"}}>
			           		<h4>Student Payment</h4>
			           		<p>Students / <span>Student Payment</span></p>
			           	</div>
			           	<div className="reciept-home">
			           		<div className="reciept-title">
			           			<p><strong>Deposit</strong></p>
			           		</div>
			           		<div className="reciept">
			           			<div className="transfer">
									<div className="bank">
										<h5>Bank Name:</h5>
										<h6 className="bank-text">My Cross River App</h6>
									</div>
									<div className="bank">
										<h5>Account Number:</h5>
										<h6 className="bank-text">1234567890</h6>
									</div>
									<div className="bank">
										<h5>Account Name:</h5>
										<h6 className="bank-text">Nugi Innovations</h6>
									</div>
								</div>
								<div className="transfer-amount">
									<h5>Amount:</h5>
									<input type="text" />
								</div>
								<p>The account listed above, is for this transaction only</p>
								<div className="transfer-buttons">
									<button>Payment Done</button>
									<button>Cancel Payment</button>
								</div>
			           		</div>
			           	</div>
			        </section>
		        </div>
		    </div>
		</>
	)
}