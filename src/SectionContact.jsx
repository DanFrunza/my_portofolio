import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SectionContact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-2" // Am redus padding-ul sus și jos la minim
    >
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-2">Contact</h2> {/* Am redus margin-ul de jos al titlului */}
        
        <div className="flex justify-center space-x-6"> {/* Am redus spațiul între elemente */}
          {/* GitHub */}
          <div className="text-xl flex flex-col items-center">
            <a
              href="https://github.com/DanFrunza"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaGithub className="mb-1 text-3xl" />
            </a>
            <a
              href="https://github.com/DanFrunza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
          </div>

          {/* LinkedIn */}
          <div className="text-xl flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/dan-frunza-135695284/?profileId=ACoAAEUoA3kBJxWKMRJ0Jmx60Q15iGCWXU1Bc_4"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300"
            >
              <FaLinkedin className="mb-1 text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/dan-frunza-135695284/?profileId=ACoAAEUoA3kBJxWKMRJ0Jmx60Q15iGCWXU1Bc_4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>

          {/* Email */}
          <div className="text-xl flex flex-col items-center">
            <FaEnvelope className="mb-1 text-3xl cursor-pointer hover:text-gray-300" />
            <span className="hover:text-gray-300">
              dani.frunza@yahoo.com
            </span>
          </div>

          {/* Alt email */}
          <div className="text-xl flex flex-col items-center">
            <FaEnvelope className="mb-1 text-3xl cursor-pointer hover:text-gray-300" />
            <span className="hover:text-gray-300">
              dani.frunza69@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
