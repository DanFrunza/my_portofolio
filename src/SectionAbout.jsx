import React from "react";
import MountainImage from "./assets/Mountain.png"; // Importă imaginea

function SectionAbout() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-900 py-20 relative text-white"
    >
      {/* Imaginea de fundal cu gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${MountainImage})`, // Folosește imaginea importată
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient pe verticală cu tranziție lentă */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
        
        {/* Gradient pe orizontală cu tranziție lentă */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Textul pe partea stângă */}
      <div className="w-1/2 pl-8 relative z-10">
        <h2 className="text-4xl font-bold">Despre Mine</h2>
        <p className="mt-4 text-xl">
          Sunt un dezvoltator pasionat de React și tehnologiile moderne. Îmi place să creez aplicații web interactive...
        </p>
      </div>
    </section>
  );
}

export default SectionAbout;
