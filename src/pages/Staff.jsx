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

export default function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    const user = getUser();

    if (!token || !user || user.role !== "admin") {
      Swal.fire("Access Denied", "Only admins can access this page", "warning").then(() => {
        navigate("/general/dashboard");
      });
    } else {
      fetchStaffs();
    }
  }, [navigate]);

  const fetchStaffs = async () => {
    try {
      setLoading(true);
      const token = getToken();
      const response = await axios.get(`${BASE_URL}/staff/getstaffs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const staffList = Array.isArray(response.data)
        ? response.data
        : response.data?.staffs || response.data?.data || [];

      if (Array.isArray(staffList)) {
        setStaffs(staffList);
      } else {
        Swal.fire("Error", "Unexpected data format from server", "error");
      }
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Could not fetch staff", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This staff will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (confirm.isConfirmed) {
      try {
        setDeletingId(id);
        const token = getToken();

        await axios.delete(`${BASE_URL}/staff/deletestaff/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire("Deleted", "Staff has been deleted.", "success");
        setStaffs((prev) => prev.filter((staff) => staff._id !== id));
      } catch (err) {
        Swal.fire("Error", err.response?.data?.message || "Failed to delete staff.", "error");
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "1rem" }}>
          <div className="student-title" style={{ marginTop: "4rem" }}>
            <h4>All Staff</h4>
            <p>
              Staff / <span>All staff</span>
            </p>
          </div>

          <div className="student-list">
            <div className="list-title">
              <h3>Staff List</h3>
            </div>

            {loading ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <p>Loading staff list...</p>
              </div>
            ) : staffs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <p>No staff found.</p>
              </div>
            ) : (
              <div className="student-table" style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Full Name</th>
                      <th>Course</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Registration</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffs.map((staff) => (
                      <tr key={staff._id}>
                        <td>
                          <img
                            src={dummy}
                            alt="Profile"
                            style={{ width: "40px", borderRadius: "50%" }}
                          />
                        </td>
                        <td>{staff.fullname}</td>
                        <td>{staff.course || "N/A"}</td>
                        <td>{staff.phone}</td>
                        <td>{staff.email}</td>
                        <td>
                          {staff.createdAt
                            ? new Date(staff.createdAt).toLocaleDateString("en-GB")
                            : "N/A"}
                        </td>
                        <td>
                          <button

                            onClick={() => handleDelete(staff._id)}
                            disabled={deletingId === staff._id}
                            style={{
                              background: "red",
                              color: "#fff",
                              border: "none",
                              padding: "5px 10px",
                              borderRadius: "4px",
                              cursor: deletingId === staff._id ? "not-allowed" : "pointer",
                            }}
                          >
                            {deletingId === staff._id ? "Deleting..." : "Delete"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
