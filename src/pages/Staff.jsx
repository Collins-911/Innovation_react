import React, { useEffect, useState } from "react";
import '../css/home.css';
import '../css/student.css';
import Sidebar from '../components/Sidebar.jsx';
import Topnav from '../components/Topnav.jsx';
import dummy from '../assets/dummy.webp';

export default function Staff() {
 
  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="student-title" style={{ marginTop: "4rem" }}>
            <h4>All Staffs</h4>
            <p>Staffs / <span>All staffs</span></p>
          </div>

          <div className="student-list">
            <div className="list-title">
              <h3>All staffs list</h3>
            </div>

            <div className="student-table">
              <table>
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Registration</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                   <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                  <tr>
                    <td><img src={dummy} /></td>
                    <td>person6</td>
                    <td>course6</td>
                    <td>1222222222</td>
                    <td>email address</td>
                    <td>04/10/2025</td>
                    <td><button>Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
