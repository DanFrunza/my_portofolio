import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import HTMLimg from "./assets/html.jpg";

function SectionCertification() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-20 px-4"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Certifications</h2>
      </div>

      <div className="max-w-4xl w-full bg-gray-800 rounded-xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* FreeCodeCamp Logo */}
          <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-2">
            <img 
              src={HTMLimg} 
              alt="HTML img"
              className="w-full"
            />
          </div>

          {/* Certification Details */}
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-2">Responsive Web Design</h3>
            <p className="text-gray-300 mb-2">FreeCodeCamp</p>
            <p className="mb-6">
              This certification validates my skills in HTML, CSS, responsive design principles, and 
              accessibility. I completed various projects including a survey form, tribute page, technical documentation 
              page, product landing page, and personal portfolio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.freecodecamp.org/certification/danfrunza/responsive-web-design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View Certificate <FaExternalLinkAlt size={14} />
              </a>
              
              <a 
                href="https://responsive-web-design.danfrunza.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View Projects <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCertification;