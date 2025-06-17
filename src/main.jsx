import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Login from './pages/login/Login.jsx';
import Signup from './pages/login/Signup.jsx';
import Home from './pages/Home.jsx';
import Student from './pages/Student.jsx';
import Register from './pages/Register.jsx';
import Payment from './pages/Payment.jsx';
import Student_payment from './pages/Student_payment.jsx';
import Staff from './pages/Staff.jsx';
import Courses from './pages/Courses.jsx';
import Report from './pages/Report.jsx';
import Profile from './pages/profile.jsx';
import { MdAssignment } from 'react-icons/md';
import Assignment from './pages/Assignment.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Entry from './components/entry.jsx';
import Change from './pages/login/change.jsx';
import Settings from './pages/settings.jsx';
import Add_courses from './pages/Add_courses.jsx';
import Ai from './uppload/Ai.jsx';
import Cybersecurity from './uppload/Cybersecurity.jsx';
import Dbase from './uppload/Dbase.jsx';
import Devops from './uppload/Devops.jsx';
import Dmarketing from './uppload/Dmarketing.jsx';
import Dscience from './uppload/Dscience.jsx';
import FullStack from'./uppload/FullStack.jsx';
import MobileApp from './uppload/MobileApp.jsx';
import Pdesign from './uppload/Pdesign.jsx';
import Pmanagement from './uppload/Pmanagement.jsx';
import Survey from './uppload/Survey.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/general/dashboard' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/general/student' element={<Student/>}/>
      <Route path='/tools/register' element={<Register/>}/>
      <Route path='/tools/payment' element={<Payment/>}/>
      <Route path='/student_payment' element={<Student_payment/>}/>
      <Route path='/general/staff' element={<Staff/>}/>
      <Route path='/general/courses' element={<Courses/>}/>
      <Route path='/tools/report' element={<Report/>}/>
      <Route path='/profile/profile' element={<Profile/>}/>
      <Route path='/tools/assignment' element={<Assignment/>}/>
      <Route path='/general/curriculum' element={<Curriculum/>}/>
      <Route path='/' element={<Entry/>}/>
      <Route path='/change' element={<Change/>}/>
      <Route path='/profile/settings' element={<Settings/>}/>
      <Route path='/tools/add_courses' element={<Add_courses/>}/>
      <Route path='/ai' element={<Ai/>}/>
      <Route path='/cybersecurity' element={<Cybersecurity/>}/>
      <Route path='/dbase' element={<Dbase/>}/>
      <Route path='/devops' element={<Devops/>}/>
      <Route path='/dmarketing' element={<Dmarketing/>}/>
      <Route path='/dscience' element={<Dscience/>}/>
      <Route path='/fullstack' element={<FullStack/>}/>
      <Route path='/mobileapp' element={<MobileApp/>}/>
      <Route path='/pdesign' element={<Pdesign/>}/>
      <Route path='/pmanagement' element={<Pmanagement/>}/>
      <Route path='/survey' element={<Survey/>}/>
      <Route path='/tools/student_payment' element={<Student_payment/>}/>
    </Routes>
  </BrowserRouter>
);