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

  // Authorization: Only admins allowed
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
    const response = await axios.get(`${BASE_URL}/staff`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("STAFF API RESPONSE:", response.data);
    const staffList = response.data?.staffs || response.data?.data;

    if (Array.isArray(staffList)) {
      setStaffs(staffList);
    } else {
      Swal.fire("Error", "Unexpected data format", "error");
    }
  } catch (err) {
    console.error("Fetch staff error:", err);
    Swal.fire("Error", err.response?.data?.message || "Could not fetch staff", "error");
  } finally {
    setLoading(false);
  }
};



  // Delete staff
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
              <h3>All Staff List</h3>
            </div>

            {loading ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <p>Loading staff list...</p>
              </div>
            ) : (
              <div className="student-table">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Staff Name</th>
                      <th>Course Name</th>
                      <th>Phone Number</th>
                      <th>Email Address</th>
                      <th>Registration</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffs.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: "center" }}>
                          No staff found.
                        </td>
                      </tr>
                    ) : (
                      staffs.map((staff) => (
                        <tr key={staff._id}>
                          <td>
                            <img
                              src={dummy}
                              alt="profile"
                              style={{ width: "40px", borderRadius: "50%" }}
                            />
                          </td>
                          <td>{staff.fullname || "N/A"}</td>
                          <td>{staff.course || "N/A"}</td>
                          <td>{staff.phone || "N/A"}</td>
                          <td>{staff.email || "N/A"}</td>
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
                                cursor: "pointer",
                                opacity: deletingId === staff._id ? 0.6 : 1,
                              }}
                            >
                              {deletingId === staff._id ? "Deleting..." : "Delete"}
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
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
