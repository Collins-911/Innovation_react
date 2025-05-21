import React from "react";
import "../css/home.css";
import Navbar from "../components/Navbar.jsx";
import Topnav from "../components/Topnav.jsx";

export default function Home() {
  const Username = "Nathan";

  return (
    <>
      <div className="home-content">
        <Navbar />
        <div className="top-content">
          <Topnav />

          {/* Section 1: Main Dashboard Cards */}
          <section className="grid section-main">
            <div className="card welcome">
              <h2>Hello, {Username} 👋</h2>
              <p>Welcome back to your learning dashboard. Keep pushing forward!</p>
            </div>

            <div className="card progress">
              <h3>Progress</h3>
              <ul>
                <li>JavaScript: 75%</li>
                <li>React: 60%</li>
                <li>CSS Mastery: 90%</li>
              </ul>
            </div>

            <div className="card classes">
              <h3>Upcoming Classes</h3>
              <p>Wed: React Hooks - 10:00 AM</p>
              <p>Thu: API Integration - 12:00 PM</p>
            </div>

            <div className="card notes">
              <h3>Notifications</h3>
              <p>✅ Your assignment was submitted.</p>
              <p>🔔 New task available in Web Dev Track.</p>
            </div>
          </section>

          {/* Section 2: Quick Actions */}
          <section className="grid section-actions">
            <div className="card actions">
              <h3>Quick Actions</h3>
              <button>Join Class</button>
              <button>Check Schedule</button>
            </div>
          </section>

          {/* Section 3: Extra (iframe, etc.) */}
          <section className="grid section-extra">
            <div className="card iframe">
              {/* Future content like iframe or widgets */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
