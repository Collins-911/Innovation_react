import React, { useState } from 'react';
import '../css/assignment.css';
import '../css/home.css';
import '../css/course.css';
import Navbar from '../components/Navbar.jsx';
import Topnav from '../components/Topnav.jsx';

import Sidebar from '../components/Sidebar.jsx';


export default function assignment(){
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('file', formData.file);
  };

    return(
        <>
            <div className="home-content">
              <Navbar/>
              <div className="top-content">
                <Topnav/>
                <section className="content">
                  <div className="courses-title">
                      <h4>Our Assignment</h4>
                          <p>Student / <span>Assignment</span></p>
                  </div>
                     <div className="assignment-form-container">
    
                         <h2>Submit Assignment</h2>
                           <form onSubmit={handleSubmit} className="assignment-form">
                                <label>
                                       Title:
                                        <input
                                          type="text"
                                          name="title"
                                          value={formData.title}
                                          onChange={handleChange}
                                          required
                                        />
                                </label>

                                <label>
                                         Description:
                                          <textarea
                                               name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                required
                                           />
                                 </label>

                                <label>
                                       Date:
                                   <input 
                                      type='date'
                                      name='date'
                                      value={formData.date} 
                                      onChange={handleChange}
                                      required
                                    />
                                </label> 

                                <label>
                                      Upload File:
                                  <input
                                      type="file"
                                       name="file"
                                      onChange={handleFileChange}
                                       required
                                  />
                                </label>

                                <button type="submit">Submit</button>
                              </form>
                      <p style={{textAlign:'left',marginTop:30, marginBottom:20,color:'red', fontSize:10}}>The Important for Submiting your Assignment is for your tuitor to know how far
                            you have learn and understand what he or she has teach you so please always submit your's if your giving assignment please enable to submit 
                            it thanks for your Cooperaton Nugi Innovation loves you all and mean the best for you all.</p>
        </div>
                </section>
                <div>
                  <Sidebar/>
                </div>
              </div>
       
            </div>
        </>
    )
}