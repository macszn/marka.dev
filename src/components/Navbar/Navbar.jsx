import React from 'react';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Tetteh Mark Addo</div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button 
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;