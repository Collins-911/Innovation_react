import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  const dashboardClick = () => {
    console.log('Navigating to Dashboard');
    navigate('/general/dashboard');
  };

  const studentClick = () => {
    console.log('Navigating to Student');
    navigate('/general/student');
  };

  const staffClick = () => {
    console.log('Navigating to Staffs');
    navigate('/general/staff');
  };

  const coursesClick = () => {
    console.log('Navigating to Courses');
    navigate('/general/courses');
  };

  const curriculumClick = () => {
    console.log('Navigating to Curriculum');
    navigate('/general/curriculum');
  };


  const registerClick = () => {
    console.log('Navigating to Register Students');
    navigate('/tools/register');
  };

  const paymentClick = () => {
    console.log('Navigating to Payment');
    navigate('/tools/payment');
  };

  const reportClick = () => {
    console.log('Navigating to Report');
    navigate('/tools/report');
  };

  const assignmentClick = () => {
    console.log('Navigating to Assignment');
    navigate('/tools/assignment');
  };

  const addcoursesClick = () => {
    console.log('Navigating to Add_Courses');
    navigate('/tools/add_courses');
  };

   const studentPayment = () => {
    console.log('Navigating to Add_Courses');
    navigate('/tools/student_payment');
  };


  const profileClick = () => {
    console.log('Navigating to Profile');
    navigate('/profile/profile');
  };

  const settingsClick = () => {
    console.log('Navigating to Settings');
    navigate('/profile/settings');
  };


  const aiClick = () => {
    console.log('Navigating to AI');
    navigate('/ai');
  };

  const cyberClick = () => {
    console.log('Navigating to Cybersecurity');
    navigate('/cybersecurity');
  };

  const dbaseClick = () => {
    console.log('Navigating to Dbase');
    navigate('/dbase');
  };

  const devopsClick = () => {
    console.log('Navigating to Devops');
    navigate('/devops');
  };

  const dmarketingClick = () => {
    console.log('Navigating to Dmarketing');
    navigate('/dmarketing');
  };

  const dscienceClick = () => {
    console.log('Navigating to Dscience');
    navigate('/dscience');
  };

  const fullstackClick = () => {
    console.log('Navigating to Full Stack');
    navigate('/fullstack');
  };

  const mobileappClick = () => {
    console.log('Navigating to Mobile App');
    navigate('/mobileapp');
  };

  const pdesignClick = () => {
    console.log('Navigating to Pdesign');
    navigate('/pdesign');
  };

  const pmanagementClick = () => {
    console.log('Navigating to Pmanagement');
    navigate('/pmanagement');
  };

  const surveyClick = () => {
    console.log('Navigating to Survey');
    navigate('/survey');
  };

  const entryClick = () => {
    console.log('Navigating to Entry');
    navigate('/');
  };

  const changeClick = () => {
    console.log('Navigating to Change');
    navigate('/');
  };

  return {
    dashboardClick,
    studentClick,
    staffClick,
    coursesClick,
    curriculumClick,

    registerClick,
    paymentClick,
    reportClick,
    assignmentClick,
    addcoursesClick,
    studentPayment,

    profileClick,
    settingsClick,

    aiClick,
    cyberClick,
    dbaseClick,
    devopsClick,
    dmarketingClick,
    dscienceClick,
    fullstackClick,
    mobileappClick,
    pdesignClick,
    pmanagementClick,
    surveyClick,
    entryClick,
    changeClick,
  };
}