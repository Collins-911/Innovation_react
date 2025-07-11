
import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/student.css";
import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";
import dummy from "../assets/dummy.webp";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { getToken } from "../utils/authService";
import Swal from "sweetalert2";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const token = getToken();
      const response = await axios.get(`${BASE_URL}/students/getstudent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("STUDENT API RESPONSE:", response.data);
  
      if (response.data?.status && Array.isArray(response.data.students)) {
        setStudents(response.data.students); 
      } else {
        Swal.fire("Error", response.data?.message || "Failed to load students", "error");
      }
    } catch (err) {
      console.error("Fetch students error:", err);
      Swal.fire("Error", err.response?.data?.message || "Could not fetch students", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This student will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (confirm.isConfirmed) {
      try {
        const token = getToken();
        await axios.delete(`${BASE_URL}/students/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire("Deleted", "Student has been deleted.", "success");
        setStudents((prev) => prev.filter((student) => student._id !== id));
      } catch (err) {
        Swal.fire("Error", "Failed to delete student.", "error");
      }
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <div style={{ padding: "2rem" }}>
          <h2>All Students</h2>

          {loading ? (
            <p>Loading students...</p>
          ) : (
            <table
              border="1"
              cellPadding="10"
              style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}
            >
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(students) && students.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      No students found.
                    </td>
                  </tr>
                ) : (
                  students.map((student) => (
                    <tr key={student._id}>
                      <td>
                        <img
                          src={dummy}
                          alt="profile"
                          style={{ width: "40px", borderRadius: "50%" }}
                        />
                      </td>
                      <td>{student.fullname}</td>
                      <td>{student.email}</td>
                      <td>{student.phonenumber}</td>
                      <td>{student.address}</td>
                      <td>{new Date(student.date).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(student._id)}
                          style={{
                            background: "red",
                            color: "#fff",
                            border: "none",
                            padding: "5px 10px",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
