import React from "react";
import MountainImage from "./assets/Mountain.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 py-20 relative text-white"
    >
      {/* Imaginea de fundal cu gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${MountainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient pe verticală cu tranziție lentă */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-75"></div>

        {/* Gradient pe orizontală cu tranziție lentă */}
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-transparent to-gray-900 opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-75"></div>
      </div>

      {/* Textul pe partea stângă */}
      <div className="w-1/2 pl-8 relative z-10">
        <h2 className="text-4xl font-bold">Hi, my name is Frunza Dan</h2>
        <p className="mt-4 text-xl">
          I am a Master's student at the Faculty of Computer Science at Alexandru Ioan Cuza University of Iași.
        </p>
      </div>
    </section>
  );
}

export default Home;
