// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  const [showCV, setShowCV] = React.useState(false);
  const iframeRef = React.useRef(null);

  
  React.useEffect(() => {
    // Function to handle clicks outside the iframe
    const handleOutsideClick = (event) => {
      if (iframeRef.current && !iframeRef.current.contains(event.target)) {
        setShowCV(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Ezekiel Olumide
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Recent Works
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="https://www.linkedin.com/in/olurocks/" className="mr-5 hover:text-white">
            Linkedin
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowCV(!showCV);
            }}
            className="mr-5 hover:text-white"
          > 
            CV
          </a>
          {showCV && (
        <iframe
          src="https://docs.google.com/document/d/18GVkuf09sussFcmH3GoqjCY3s8_LoQo2WyA384eQyec/preview"
          width="100%"
          height="500px"
        >
          <p>
            Your browser does not support iframes. You can view the CV{" "}
            <a
              href="https://docs.google.com/document/d/18GVkuf09sussFcmH3GoqjCY3s8_LoQo2WyA384eQyec/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </iframe>
      )}
          
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}