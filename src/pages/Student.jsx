import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/student.css";
import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";
import dummy from "../assets/dummy.webp";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { getToken, getUser } from "../utils/authService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Admin access check
  useEffect(() => {
    const token = getToken();
    const user = getUser();

    if (!token || !user || user.role !== "admin") {
      Swal.fire("Access Denied", "Only admins can access this page", "warning").then(() => {
        navigate("/general/dashboard");
      });
    } else {
      fetchStudents();
    }
  }, [navigate]);

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

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="student-title">
            <h4>All Students</h4>
            <p>
              Students / <span>All students</span>
            </p>
          </div>

          <div className="student-list">
            <div className="list-title">
              <h3>Student List</h3>
            </div>

            <div className="student-table">
              {loading ? (
                <p>Loading students...</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Date</th>
                      <th>Action</th>
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
                          <td>{student.fullname || "N/A"}</td>
                          <td>{student.email || "N/A"}</td>
                          <td>{student.phonenumber || "N/A"}</td>
                          <td>{student.address || "N/A"}</td>
                          <td>
                            {student.date
                              ? new Date(student.date).toLocaleDateString("en-GB")
                              : "N/A"}
                          </td>
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
        </section>
      </div>
    </div>
  );
}
