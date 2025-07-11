import { useState } from 'react';
import Swal from 'sweetalert2'; // ✅ Import SweetAlert
import Topnav from '../components/Topnav.jsx';
import Sidebar from '../components/Sidebar.jsx';
import BASE_URL from '../utils/constants.js';
import '../css/add_courses.css';

export default function AddCourses() {
    const [formData, setFormData] = useState({
        name: '',
        lessons: '',
        description: '',
        duration: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const token = userData?.token;

        if (!token) {
            Swal.fire({
                icon: 'warning',
                title: 'Unauthorized',
                text: 'You must be logged in to add a course.',
            });
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/courses/createCourse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Course added successfully!',
                });
                setFormData({ name: '', lessons: '', description: '', duration: '' });
                setShowPopup(false);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed!',
                    text: data.message || 'Failed to add course.',
                });
                console.log(response);
            }
        } catch (err) {
            console.error('Error adding course:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong while submitting the course.',
            });
        }
    };

    return (
        <div className="home-content">
            <Sidebar />
            <div className="top-content">
                <Topnav />
                <section className="content">
                    <div className="addCourse-header">
                        <button className="addCourse" onClick={() => setShowPopup(true)}>
                            ADD COURSE
                        </button>
                    </div>
                    {showPopup && (
                        <div className="popAdd" id="popAdd">
                            <div className="popAddinner">
                                <h2>Add Course Details</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Course Name"
                                />
                                <input
                                    type="number"
                                    name="lessons"
                                    value={formData.lessons}
                                    onChange={handleChange}
                                    placeholder="No. of Lessons"
                                />
                                <input
                                    type="text"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    placeholder="Duration"
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                />
                                <button className="submit-btn" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
