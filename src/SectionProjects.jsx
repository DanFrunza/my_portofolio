import React, { useState } from "react";
import ProjectImg1 from "./assets/Gam1.jpeg";
import ProjectImg2 from "./assets/Game2.jpeg";
import ProjectImg3 from "./assets/Shop1.jpeg";
import ProjectImg4 from "./assets/Shop2.jpeg";

function SectionProjects() {
  const [selectedImg, setSelectedImg] = useState(null);

  const openImage = (src) => {
    setSelectedImg(src);
  };

  const closeImage = () => {
    setSelectedImg(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-20 px-4"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">My projects</h2>
      </div>

      {/* Proiectul 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mb-24">
        {/* Imagini */}
        <div className="relative flex gap-4 w-full lg:w-1/2">
          {[ProjectImg2, ProjectImg1].map((src, index) => (
            <div key={index} className="relative w-1/2 h-64 cursor-pointer" onClick={() => openImage(src)}>
              <img
                src={src}
                alt={`Project 1 - ${index}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-60 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="lg:w-1/2 text-left">
          <h3 className="text-2xl font-semibold mb-2">Hexagon Board Minigame</h3>
          <p className="text-lg">
            A C# game with a randomly generated hexagonal board. The goal is to reach the final tile with the highest score and fewest moves — extra steps reduce the final score. I really enjoyed creating the art for the tiles, pawn, and UI elements (backgrounds are not mine). The project includes logic for move validation, pawn movement, random board generation, scoring, and win condition detection.
          </p>
        </div>
      </div>

      {/* Proiectul 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl">
        {/* Text */}
        <div className="lg:w-1/2 text-left">
          <h3 className="text-2xl font-semibold mb-2">A&D Shop Website</h3>
          <p className="text-lg">
            A simple e-commerce website built with PHP, HTML, CSS, and JavaScript. I implemented user and product management using MySQL databases, integrated Google reCAPTCHA for security, and developed features like login with "remember me," image retrieval from the database, and data filtering. I also utilized Bootstrap templates for responsive design, incorporated Canvas and SVG for dynamic graphics, and managed cookies and POST methods for user interactions.
            <br /><br />
            For this project, I created several modified versions, which are available on my GitHub:
            <ul className="list-disc pl-6 mt-4">
              <li><strong>Dockerized version with MySQL:</strong> I put the website on Docker and modified it to use PDO, along with stored procedures and triggers for better database management.</li>
              <li><strong>Dockerized version with XML:</strong> A version using Docker and XML for the database structure.</li>
              <li><strong>Dockerized version with MongoDB:</strong> A variant where MongoDB was used as the database, also integrated within a Docker container.</li>
            </ul>
          </p>

        </div>

        {/* Imagini */}
        <div className="relative flex gap-4 w-full lg:w-1/2">
          {[ProjectImg3, ProjectImg4].map((src, index) => (
            <div key={index} className="relative w-1/2 h-64 cursor-pointer" onClick={() => openImage(src)}>
              <img
                src={src}
                alt={`Project 2 - ${index}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-60 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImg}
            alt="Large View"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Other Projects Section */}
      <div className="text-center mt-16">
        <p className="text-xl">
          You can find other projects and university assignments on my GitHub.
          <br /><br />
          to be continued...
        </p>
      </div>
    </section>
  );
}

export default SectionProjects;
