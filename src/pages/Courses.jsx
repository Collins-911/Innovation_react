import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/course.css";
import Sidebar from "../components/Sidebar.jsx";
import Topnav from "../components/Topnav.jsx";
import BASE_URL from "../utils/constants.js";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getToken = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data?.token || data?.user?.token || null;
  };

  const fetchCourses = async () => {
    const token = getToken();

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/courses/getCourse`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data)) {
        setCourses(response.data);
      } else {
        setCourses([]);
      }
    } catch {
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    const token = getToken();

    if (!token) return;

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the course.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await axios.delete(`${BASE_URL}/courses/${id}/delete`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 || response.status === 204) {
          Swal.fire("Deleted!", "Course deleted successfully.", "success");
          fetchCourses();
        } else {
          Swal.fire("Error", "Failed to delete the course.", "error");
        }
      } catch {
        Swal.fire("Error", "Something went wrong.", "error");
      }
    }
  };

  return (
    <div className="home-content">
      <Sidebar />
      <div className="top-content">
        <Topnav />
        <section className="content" style={{ padding: "2rem" }}>
          <div className="courses-title">
            <h4>All Courses</h4>
            <p>
              Courses / <span>All courses</span>
            </p>
          </div>

          {loading ? (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              Loading courses...
            </p>
          ) : courses.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              No courses available.
            </p>
          ) : (
            <table className="courses-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Lessons</th>
                  <th>Duration</th>
                  <th>Description</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course._id}>
                    <td>{index + 1}</td>
                    <td>{course.name}</td>
                    <td>{course.lessons}</td>
                    <td>{course.duration}</td>
                    <td>{course.description}</td>
                    <td>
                      {course.createdAt
                        ? new Date(course.createdAt).toLocaleDateString("en-GB")
                        : "N/A"}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(course._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
}
