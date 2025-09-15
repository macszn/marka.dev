import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import profileImage from '../../../assets/photo_2025-06-21_00-17-48.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profileImage} alt="Maesha Mahmud" />
        </div>
        <div className="hero-text">
          <p className="hello-text">Hello, I'm</p>
          <h1>Tetteh Mark Addo</h1>
          <p className="role">Software Developer</p>
          <div className="cta-buttons">
            <a href="https://linktr.ee/mark.addo" target="_blank" rel="noopener noreferrer" className="btn primary">Download CV</a>
            <a href="#contact" className="btn secondary">Contact Info</a>
          </div>
          <div className="social-links">
            <a href="http://linkedin.com/in/mark-tetteh-addo-366b5b25b" target="_blank" rel="noopener noreferrer">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;