import React, { useState } from 'react';
import './Certifications.css';
import CiscoImage from '../../../assets/Cisco.png';
import IBMImage from '../../../assets/IBM.png';

const certifications = [
  {
    title: 'Cisco Certified Network Associate',
    issuer: 'Cisco',
    image: CiscoImage,
    description: 'Networking Fundamentals credential'
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    image: IBMImage,
    description: 'Data science and AI learning credential'
  }
];

function Certifications() {
  const [selectedCredential, setSelectedCredential] = useState(null);

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article key={certification.title} className="certification-card">
            <div className="certification-image">
              <img src={certification.image} alt={certification.title} />
            </div>

            <div className="certification-content">
              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
              <button
                type="button"
                className="credential-button"
                onClick={() => setSelectedCredential(certification)}
              >
                Show credential
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCredential && (
        <div
          className="credential-modal"
          onClick={() => setSelectedCredential(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certification credential viewer"
        >
          <div
            className="credential-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedCredential(null)}
              aria-label="Close credential viewer"
            >
              ×
            </button>
            <img
              src={selectedCredential.image}
              alt={selectedCredential.title}
            />
            <div className="credential-modal-text">
              <h3>{selectedCredential.title}</h3>
              <p>{selectedCredential.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
