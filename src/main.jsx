import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie'; // <-- ADD THIS

import Login from './pages/login/Login.jsx';
import Home from './pages/Home.jsx';
import Student from './pages/Student.jsx';
import Register from './pages/Register.jsx';
import Payment from './pages/Payment.jsx';
import Student_payment from './pages/Student_payment.jsx';
import Staff from './pages/Staff.jsx';
import Courses from './pages/Courses.jsx';
import Report from './pages/Report.jsx';
import Profile from './pages/profile.jsx';
import RegisterStaff from './pages/RegisterStaff.jsx';
import AddAssignment from './pages/AddAssignment.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Add_courses from './pages/Add_courses.jsx';

import StudentAssignments from './pages/StudentAssignment.jsx';

import Ai from './uppload/Ai.jsx';
import Cybersecurity from './uppload/Cybersecurity.jsx';
import Dbase from './uppload/Dbase.jsx';
import Devops from './uppload/Devops.jsx';
import Dmarketing from './uppload/Dmarketing.jsx';
import Dscience from './uppload/Dscience.jsx';
import FullStack from './uppload/FullStack.jsx';
import MobileApp from './uppload/MobileApp.jsx';
import Pdesign from './uppload/Pdesign.jsx';
import Pmanagement from './uppload/Pmanagement.jsx';
import Survey from './uppload/Survey.jsx';
// import { isAuthenticated, getUser } from './utils/authService.js';


// console.log(getUser())
// console.log(isAuthenticated())

createRoot(document.getElementById('root')).render(

  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/general/dashboard' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/general/student' element={<Student />} />
        <Route path='/tools/register' element={<Register />} />
        <Route path='/tools/registerstaff' element={<RegisterStaff />} />
        <Route path='/tools/payment' element={<Payment />} />
        <Route path='/student_payment' element={<Student_payment />} />
        <Route path='/general/staff' element={<Staff />} />
        <Route path='/general/courses' element={<Courses />} />
        <Route path='/tools/report' element={<Report />} />
        <Route path='/profile/profile' element={<Profile />} />
        <Route path='/tools/addassignment' element={<AddAssignment />} />
        <Route path='/general/curriculum' element={<Curriculum />} />
        <Route path='/tools/add_courses' element={<Add_courses />} />
  
        <Route path="/student-assignments" element={<StudentAssignments />} />
        <Route path='/ai' element={<Ai />} />
        <Route path='/cybersecurity' element={<Cybersecurity />} />
        <Route path='/dbase' element={<Dbase />} />
        <Route path='/devops' element={<Devops />} />
        <Route path='/dmarketing' element={<Dmarketing />} />
        <Route path='/dscience' element={<Dscience />} />
        <Route path='/fullstack' element={<FullStack />} />
        <Route path='/mobileapp' element={<MobileApp />} />
        <Route path='/pdesign' element={<Pdesign />} />
        <Route path='/pmanagement' element={<Pmanagement />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/tools/student_payment' element={<Student_payment />} />
      </Routes>
    </BrowserRouter>
   </CookiesProvider>
)
