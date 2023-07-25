import React from "react";


export default function About() {
    return (
        <section id="about">
             <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ezekiel Alias Psychval.
            <br/>
            <br className="hidden lg:inline-block" />About Me:
            </h1>
            <br/>
          <p className="mb-8 leading-relaxed"> 
A highly skilled and experienced full-stack developer with a strong focus on backend technologies. With over four years of hands-on experience, I've built robust and scalable web applications using a diverse range of frameworks and technologies. My expertise lies in the MERN (MongoDB, Express.js, React, and Node.js) stack, enabling me to excel throughout the entire development process. I take pride in delivering efficient and innovative solutions that consistently exceed client expectations.
            
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Previous Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./psychval.jpg"
          />
        </div>
      </div>
    </section>
  );
}