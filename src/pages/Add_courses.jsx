import Topnav from '../components/Topnav.jsx'
import Navbar from '../components/Navbar.jsx'
import '../css/add_courses.css'

export default function AddCourses() {
    return (
        <>
            <div className="home-content">
                <Navbar />
                <div className="top-content">
                    <Topnav />
                    <section className="content">
                        <div className="addCourse-header">
                            <button className="addCourse">ADD COURSE</button>
                        </div>
                    </section>
                </div>
            </div>
        </> 
    );
}
