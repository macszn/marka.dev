import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <h3>Contact Me</h3>
      <div className="contact-links">
        <a href="mailto:markaddo143@gmail.com" className="contact-item">
          <Mail size={20} />
          markaddo143@gmail.com
        </a>
        <a href="http://linkedin.com/in/mark-tetteh-addo-366b5b25b" className="contact-item">
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
      <nav className="footer-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </section>
  );
}

export default Contact;