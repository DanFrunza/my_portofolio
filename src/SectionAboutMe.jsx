import React from "react";

function SectionAboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center bg-gray-900 py-20 relative text-white"
    >
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-xl max-w-3xl">
          Hi, I'm Frunza Dan. I'm a passionate Master's student at the Faculty of Computer Science at Alexandru Ioan Cuza University of Iași. I love technology, programming, and constantly strive to improve my skills.
        </p>

        {/* Section for education */}
        <div className="mt-12 w-full max-w-3xl">
          <h3 className="text-2xl font-semibold">Education</h3>
          <ul className="mt-4 text-xl list-disc pl-6">
            <li>
              <strong>Master's Degree:</strong> Faculty of Computer Science, Alexandru Ioan Cuza University of Iași (2024 - Present)
            </li>
            <li>
              <strong>Bachelor's Degree:</strong> Faculty of Mathematics and Computer Science, Alexandru Ioan Cuza University of Iași (2021 - 2024)
            </li>
          </ul>
        </div>

        {/* Section for skills */}
        <div className="mt-12 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <ul className="mt-4 text-xl list-disc pl-6">
            <li>Front-end development: React, HTML, CSS</li>
            <li>Back-end development: Java, Java EE, C#, Python</li>
            <li>Programming languages: C, C++, Java, Python</li>
            <li>Version control: Git, GitHub</li>
            <li>Database management: MySQL, MongoDB, PostgreSQL</li>
            <li>Hardware development: Arduino</li>
            <li>Problem-solving and algorithmic thinking</li>
        </ul>
        </div>
        {/* Section for experience */}
        <div className="mt-12 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <ul className="mt-4 text-xl list-disc pl-6">
            <li>
            <strong>Specialized Internship - Testing:</strong> Centric Iași, 2023-2024
            <p>
                Participated in a specialized internship where I gained hands-on experience in software testing. I learned about different types of testing, including unit testing, integration testing, and automated testing, while working with testing tools and frameworks.
            </p>
            </li>
        </ul>
        </div>

        {/* Section for hobbies */}
        <div className="mt-12 w-full max-w-3xl">
          <h3 className="text-2xl font-semibold">Hobbies</h3>
          <ul className="mt-4 text-xl list-disc pl-6">
            <li>I enjoy playing chess and solving puzzles.</li>
            <li>Playing video games.</li>
            <li>Exploring new programming languages and tools.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
