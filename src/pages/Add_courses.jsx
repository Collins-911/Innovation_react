import { useState } from 'react';
import Topnav from '../components/Topnav.jsx';
import Sidebar from '../components/Sidebar.jsx';
import BASE_URL from '../utils/constants.js';
import '../css/add_courses.css';

export default function AddCourses() {
    const [formData, setFormData] = useState({
        name: '',
        lessons: '',
        description: '',
        date: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('token'); // 👈 Get token from storage

        if (!token) {
            alert('You must be logged in to add a course.');
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/courses/createCourse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // 👈 Pass token in header
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Course added successfully!');
                setFormData({ name: '', lessons: '', description: '', date: '' });
                setShowPopup(false);
            } else {
                alert(`Error: ${data.message || 'Failed to add course.'}`);
            }
        } catch (err) {
            console.error('Error adding course:', err);
            alert('Something went wrong while submitting the course.');
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
                                    type="text"
                                    name="lessons"
                                    value={formData.lessons}
                                    onChange={handleChange}
                                    placeholder="No. of Lessons"
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    placeholder="Duration"
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

// CHECK