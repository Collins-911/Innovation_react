import '../css/report.css';
import icon2 from '../assets/icon2.svg';
import icon7 from '../assets/icon7.jpg';
import dashboard from '../assets/dashboard.png';
import assignment from '../assets/assignment.png';
import book from '../assets/book.png';
import student from '../assets/student.png';
import report from '../assets/report.png';
import assessments from '../assets/assessments.png';
import setting from '../assets/setting.png';
import logout from '../assets/logout.png';
import payment from '../assets/payment.png';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

export default function Reports() {


  

  return (
    <div className="home-container">
      <Topnav/>
      <div className="home">
        <Navbar/>
        <div className="main-content">
          <div className="email-wrapper">
            <div className="email-header">
              <h1>✉️ Compose Report Email</h1>
              <p>Academic Session: 2024/2025</p>
            </div>

            <div className="email-body">
              <label><strong>Student Name:</strong></label>
              <input type="text" className="text-area" rows="2" readOnly/>

              <label><strong>Teacher’s Comment:</strong></label>
              <textarea
                rows="6"
                className="text-area"
                placeholder="Type your comment here..."
                
              />

              <button className="send-btn" >Send Email</button>
            
            </div>

            <div className="email-footer">
              <p>&copy; 2025 NugiTech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}