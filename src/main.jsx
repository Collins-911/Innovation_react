import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import Login from './pages/login/Login.jsx'
import Signup from './pages/login/Signup.jsx'
import Home from './pages/Home.jsx'
import Student from './pages/Student.jsx'
import Register from './pages/Register.jsx'
import Payment from './pages/Payment.jsx'
import Student_payment from './pages/Student_payment.jsx'
import Staff from './pages/Staff.jsx'
import Courses from './pages/Courses.jsx'
import Report from './pages/Report.jsx'
import Profile from './pages/profile.jsx'
import App from './App.jsx'
import { MdAssignment } from 'react-icons/md'
import Assignment from './pages/assignment.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   	 <Routes>
   	  <Route path ='/' element={<Home/>}/>
      <Route path ='/login' element={<Login/>}/>
      <Route path ='/Signup' element={<Signup/>}/>
      <Route path ='/student' element={<Student/>}/>
      <Route path ='/register' element={<Register/>}/>
      <Route path ='/payment' element={<Payment/>}/>
      <Route path ='/student_payment' element={<Student_payment/>}/>
      <Route path ='/staff' element={<Staff/>}/>
      <Route path ='/courses' element={<Courses/>}/>
      <Route path ='/report' element={<Report/>}/>
       <Route path ='/profile' element={<Profile/>}/>
        <Route path ='/assignment' element={<Assignment/>}/>
    </Routes>
  </BrowserRouter>,
)
