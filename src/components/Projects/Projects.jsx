import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';
import MelorapicImage from '../../../assets/Melorapic.png'
import MindfulImage from '../../../assets/Mindfulogo.png'

function Projects() {
  const projects = [
    {
      title: 'NeuroCrop AI',
      description: 'AI-powered agricultural assistant for expert advice, market support and productivity insights',
      image: 'https://img.freepik.com/free-photo/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation_35913-2569.jpg?ga=GA1.1.234824239.1750469977&semt=ais_hybrid&w=740',
      github: 'https://github.com/Sagacity12/AiChat_25'
    },
    {
      title: 'Melora',
      description: 'Cross-platform music app with audio recognition, streaming, downloads, and social sharing',
      image: MelorapicImage,
      github: 'https://github.com/KumiAmponsah/Melora0'
    },
    {
      title: 'AgriSmart',
      description: 'All-in-one agri-tech platform with AI tools, education, marketplace access and payment intergration',
      image: 'https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908084.jpg?ga=GA1.1.234824239.1750469977&semt=ais_hybrid&w=740',
      github: 'https://github.com/Sagacity12/neroucrop-12.git'
    },
    {
      title: 'Mindful',
      description: 'AI-powered mental health platform with chatbot support, mood journaling, emotional insights, and self-care guidance.',
      image: MindfulImage,
      github: 'https://github.com/macszn/mindful-ai-reflections-hub-main'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} className="github-link">
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;