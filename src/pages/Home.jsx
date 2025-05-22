import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import TopNav from '../components/Topnav';

const summaryData = {
  totalStudents: 120,
  presentToday: 108,
  absentToday: 12,
  avgWeekly: '92%',
};

const attendanceTrend = [
  { date: 'Mon', attendance: 110 },
  { date: 'Tue', attendance: 112 },
  { date: 'Wed', attendance: 108 },
  { date: 'Thu', attendance: 114 },
  { date: 'Fri', attendance: 109 },
];

const recentAttendance = [
  { name: 'John Doe', date: '2025-05-22', status: 'Present' },
  { name: 'Jane Smith', date: '2025-05-22', status: 'Absent' },
  { name: 'Alice Johnson', date: '2025-05-21', status: 'Present' },
  { name: 'Bob Brown', date: '2025-05-21', status: 'Absent' },
];

const User = 'Collins'

export default function Dashboard() {
  const Username = 'Nathan';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="home-content">
      <Navbar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className={`top-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        {/* <header
          style={{
            padding: '15px 20px',
            background: '#e7ebf9',
            borderBottom: '1px solid #007bff',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <button
            onClick={toggleSidebar}
            className="slide-btn"
            aria-label="Toggle sidebar"
            style={{
              fontSize: 24,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#007bff',
              userSelect: 'none',
            }}
          >
            ☰
          </button>
          <h2 style={{ marginLeft: '15px' }}>
            Welcome to the dashboard, <span className="username">{Username}</span> 😜
          </h2>
        </header> */}
      <TopNav/>
        <div className="dashb-cont">  
              <div className="hello">
                  <h3> Welcome to the dashboard, {User}</h3>
              </div>
          <div className="dash-cards">
            <div className="card frosted">Total Students: {summaryData.totalStudents}</div>
            <div className="card frosted">Present Today: {summaryData.presentToday}</div>
            <div className="card frosted">Absent Today: {summaryData.absentToday}</div>
            <div className="card frosted">Avg Weekly: {summaryData.avgWeekly}</div>
          </div>
          <div className="chart-cont">
            <h3>Attendance Trend This Week</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={attendanceTrend}
                margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
              >
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="attendance" stroke="#007bff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="table-cont">
            <h3>Recent Attendance</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAttendance.map((record, i) => (
                  <tr key={i}>
                    <td>{record.name}</td>
                    <td>{record.date}</td>
                    <td className={record.status === 'Present' ? 'present' : 'absent'}>
                      {record.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
