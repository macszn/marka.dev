import React, { useState } from 'react';
import './Certifications.css';
import CiscoImage from '../../../assets/Cisco.png';
import IBMImage from '../../../assets/IBM.png';

const certifications = [
  {
    title: 'IBM AI Fundamentals Professional Certificate',
    issuer: 'IBM',
    image: IBMImage,
    description: 'AI fundamentals and applications credential',
    verifyUrl: 'https://www.credly.com/badges/00f2b461-b3b5-43e7-bad0-60f410358181'
  },
  {
    title: 'Cisco Certified Cybersecurity Analyst',
    issuer: 'Cisco',
    image: CiscoImage,
    description: 'Cybersecurity fundamentals and practices credential',
    verifyUrl: 'https://www.credly.com/badges/e40ee021-a9e6-487b-b9ad-41ba4cadc3d9/public_url'
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

            <a
              href={selectedCredential.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="verify-button"
            >
              Verify
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
