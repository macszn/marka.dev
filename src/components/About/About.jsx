import React from 'react';
import { Briefcase, GraduationCap, Brain, Code, Database, Server, Wrench, Languages } from 'lucide-react';
import './About.css';

function About() {
  const skills = [
    {
      icon: <Briefcase size={32} />,
      title: 'Experience',
      description: '2+ years'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Education',
      description: 'B.Sc. in Computer Science'
    },
    {
      icon: <Code size={32} />,
      title: 'Frontend',
      description: 'React, Tailwind CSS, React Native'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend',
      description: 'Node.js, Python, REST APIs, Django'
    },
    {
      icon: <Database size={32} />,
      title: 'Database',
      description: 'MySQL, MongoDB, PostgreSQL'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI/ML',
      description: 'TensorFlow, PyTorch'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools',
      description: 'Git, GitHub, Postman, Render, VS Code, Docker'
    },
    {
      icon: <Languages size={32} />,
      title: 'Language',
      description: 'TypeScript, Python, JavaScript'
    }
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="about-text">
        I'm a passionate software developer with expertise in full-stack development and machine learning. 
        With a strong foundation in computer science and hands-on experience in building scalable applications, 
        I strive to create elegant solutions to complex problems. My journey in tech has equipped me with 
        a diverse skill set and a deep understanding of modern development practices.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;