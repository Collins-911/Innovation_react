import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

   const dashboardClick = () => {
        console.log('Navigating to Dashboard');
        navigate('/dashboard')
    };

    const studentClick = () => {
        console.log('Navigating to Student');
        navigate('/student')
    };

    const registerClick = () => {
        console.log('Navigating to Register Students');
        navigate('/register')
    };

    const paymentClick = () => {
        console.log('Navigating to Payment');
        navigate('/payment')
    };

    const staffClick = () => {
        console.log('Navigating to Staffs');
        navigate('/staff')
    };

    const coursesClick = () => {
        console.log('Navigating to Courses');
        navigate('/courses')
    };
    const reportClick = () => {
        console.log('Navigating to Report');
        navigate('/report')
    };
      const profileClick = () => {
        console.log('Navigating to Profile');
        navigate('/profile')
    };
     const assignmentClick = () => {
        console.log('Navigating to Assignment');
        navigate('/assignment')
    };
    const curriculumClick = () => {
        console.log('Navigating to Curriculum');
        navigate('/curriculum')
    };
     const entryClick = () => {
        console.log('Navigating to Entry');
        navigate('/')
    };
     const changeClick = () => {
        console.log('Navigating to Change');
        navigate('/')
    };
     const settingsClick = () => {
        console.log('Navigating to Settings');
        navigate('/settings')
    };
     const addcoursesClick = () => {
        console.log('Navigating to Add_Courses');
        navigate('/add_courses')
    };
     const aiClick = () => {
        console.log('Navigating to AI');
        navigate('/ai')
    };
    const cyberClick = () => {
        console.log('Navigating to Cybersecurity');
        navigate('/cybersecurity')
    };
    const dbaseClick = () => {
        console.log('Navigating to Dbase');
        navigate('/dbase')
    };
    const devopsClick = () => {
        console.log('Navigating to Devops');
        navigate('/devops')
    };
    const dmarketingClick = () => {
        console.log('Navigating to Dmarketing');
        navigate('/dmarketing')
    };
    const dscienceClick = () => {
        console.log('Navigating to Dscience');
        navigate('/dscience')
    };
    const fullstackClick = () => {
        console.log('Navigating to Full Stack');
        navigate('/fullstack')
    };
    const mobileappClick = () => {
        console.log('Navigating to Mobile App');
        navigate('/mobileapp')
    };
    const pdesignClick = () => {
        console.log('Navigating to Pdesign');
        navigate('/pdesign')
    };
    const pmanagementClick = () => {
        console.log('Navigating to Pmanagement');
        navigate('/pmanagement')
    };
    const surveyClick = () => {
        console.log('Navigating to Survey');
        navigate('/survey')
    };

  return {
    dashboardClick,
    studentClick,
    registerClick,
    paymentClick,
    staffClick,
    coursesClick,
    reportClick,
    profileClick,
    assignmentClick,
    curriculumClick,
    entryClick,
    changeClick,
    settingsClick,
    addcoursesClick,
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
    surveyClick
  };
}