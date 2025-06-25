import '../css/report.css';
import Sidebar from '../components/Sidebar.jsx';
import TopNav from "../components/Topnav";

const EmailReports = () => {
  return (
    <div className="home-content">
       <Sidebar/>

      <div className="top-content">
        <TopNav />

        <section className="content">
          <div className="courses-title">
            <h4>Email Reports</h4>
            <p>Reports / <span>Email</span></p>
          </div>

          <div className="main-content">
            {/* Left Side - Compose */}
            <div className="compose-section">
              <h4>Compose Email</h4>
              <form id="emailForm" className="email-form">
                <label htmlFor="to">To:</label>
                <input type="text" id="to" name="to" placeholder="recipient@example.com" required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Email Subject" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>

                <label htmlFor="attachment">Attachment:</label>
                <input type="file" name="attachment" />
                <div id="file-name">No file selected</div>

                <button type="submit" className="report-button">Send</button>
              </form>
            </div>

            {/* Right Side - Inbox (Static) */}
            <div className="inbox-section">
              <h4>Inbox/Outbox</h4>
              <div className="email-box">
                <div className="email-item">
                  <h4>Welcome!</h4>
                  <p>admin@example.com</p>
                </div>
                <div className="email-item">
                  <h4>Report Feedback</h4>
                  <p>teacher@example.com</p>
                </div>
              </div>

              {/* Static Email Details */}
              <div className="inbox-view">
                <h4>Email Details</h4>
                <div className="email-details">
                  <p><strong>From:</strong> admin@example.com</p>
                  <p><strong>Subject:</strong> Welcome!</p>
                  <p><strong>Date:</strong> May 23, 2025</p>
                  <p><strong>Message:</strong></p>
                  <p>Hello Student,
                    <br />Welcome to the new term! Please check the portal for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmailReports;
