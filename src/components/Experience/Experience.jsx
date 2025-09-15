import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [activeTab, setActiveTab] = useState('professional');

  const experiences = {
    professional: [
      {
        title: 'IT Technician',
        company: 'GRIDCo',
        duration: 'Sept 2024 - Oct 2024'
      },
      {
        title: 'Software Programmer',
        company: 'GRIDCo',
        duration: 'Sept 2024 - Oct 2024'
      },
      {
        title: 'Information Management Intern',
        company: 'Tech Company',
        duration: 'Mar 2024 - Aug 2024'
      },
      {
        title: 'Senior Compound Prefect',
        company: 'Christian Vertical Centre School',
        duration: 'Sept 2018 - Jun 2019'
      }
    ],
    extracurricular: [
      {
        title: 'Basketball Captain',
        company: 'Achimota School',
        duration: 'Jan 2022 - Dec 2022'
      },
      {
        title: 'Technical Directing Member',
        company: 'Vertical Centre, Church of Christ',
        duration: 'Jan 2024 - Present'
      },
      {
        title: 'Science & Maths Quiz Team',
        company: 'Achimota School',
        duration: 'Jan 2021 - July 2021'
      },
      {
        title: 'MXP Member',
        company: 'AIESEC',
        duration: 'Mar 2023 - Aug 2024'
      }
    ]
  };

  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="tab-buttons">
        <button 
          className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
          onClick={() => setActiveTab('professional')}
        >
          Professional
        </button>
        <button 
          className={`tab-btn ${activeTab === 'extracurricular' ? 'active' : ''}`}
          onClick={() => setActiveTab('extracurricular')}
        >
          Extracurricular
        </button>
      </div>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences[activeTab].map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;