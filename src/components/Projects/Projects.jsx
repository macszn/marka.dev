import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';
import MelorapicImage from '../../../assets/Melorapic.png';
import MindfulImage from '../../../assets/Mindfulogo.png';
import NGTCleansImage from '../../../assets/NGTCleans.png';
import HoodLandromatImage from '../../../assets/HoodLandromat.jpg';
import playerImage from '../../../assets/player.jpg';

function Projects() {
  const projects = [
    {
      title: 'NeuroCrop',
      description: 'AI-powered agricultural assistant for expert advice, market support and productivity insights',
      image: 'https://img.freepik.com/free-photo/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation_35913-2569.jpg?ga=GA1.1.234824239.1750469977&semt=ais_hybrid&w=740',
      github: 'https://github.com/Sagacity12/AiChat_25',
      skills: ['React.js', 'Node.js']
    },
    {
      title: 'Melora',
      description: 'Cross-platform music app with audio recognition, streaming, downloads, and social sharing',
      image: MelorapicImage,
      github: 'https://github.com/KumiAmponsah/Melora0',
      skills: ['React Native', 'Node.js']
    },
    {
      title: 'AgriSmart',
      description: 'All-in-one agri-tech platform with AI tools, education, marketplace access and payment intergration',
      image: 'https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908084.jpg?ga=GA1.1.234824239.1750469977&semt=ais_hybrid&w=740',
      github: 'https://github.com/Sagacity12/neroucrop-12.git',
      skills: ['React.js', 'Node.js']
    },
    {
      title: 'Mindful',
      description: 'AI-powered mental health platform with chatbot support, mood journaling, emotional insights, and self-care guidance.',
      image: MindfulImage,
      github: 'https://mentai-experience.onrender.com',
      skills: ['React.js', 'Tailwind CSS', 'Node.js & Express.js', 'MongoDB']
    },
    {
      title: 'NGTCleans',
      description: 'A cleaning service platform that connects users with NGTCleans for convenient and efficient cleaning solutions.',
      image: NGTCleansImage,
      github: 'https://ngtcleans-dev.onrender.com',
      skills: ['React.js', 'Tailwind CSS']
    },
    {
      title: 'HoodLandromat',
      description: 'A laundry service platform that connects users with this laundry service for convenient and efficient laundry solutions.',
      image: HoodLandromatImage,
      github: 'https://hood-laundromat.onrender.com',
      skills: ['React.js', 'Tailwind CSS']
    },
    {
      title: 'macszn4',
      description: 'A bet prediction platform that aid users in winning bets by providing accurate predictions and insights for various betting events.',
      image: playerImage,
      github: 'https://macszn4.onrender.com',
      skills: ['React.js', 'Bootstrap CSS', 'Django']
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isViewSiteProject = ['Mindful', 'NGTCleans', 'HoodLandromat', 'macszn4'].includes(project.title);

          return (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isViewSiteProject ? <ExternalLink size={20} /> : <Github size={20} />}
                  {isViewSiteProject ? 'View Site' : 'View on GitHub'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;