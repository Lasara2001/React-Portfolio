import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-500 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      <section className="relative w-full max-w-6xl mx-4 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-12 backdrop-blur-md z-10">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 mb-12 drop-shadow-lg tracking-tight">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card 1 */}
          <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-purple-100 group">
            <div className="flex items-center justify-center mb-4">
              <img
                src="Image1.jpg"
                alt="Project 1"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 text-center">Project 01</h3>
            <p className="text-gray-700 mb-6 text-center">
              A web app for task management .
              Tech: React, Node.js
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-full shadow hover:from-pink-500 hover:to-yellow-400 hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-purple-100 group">
            <div className="flex items-center justify-center mb-4">
              <img
                src="Image2.jpg"
                alt="Project 2"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 text-center">Project 02</h3>
            <p className="text-gray-700 mb-6 text-center">
              Portfolio Website.
              Tech: React, Tailwind CSS
              </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-full shadow hover:from-pink-500 hover:to-yellow-400 hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-purple-100 group">
            <div className="flex items-center justify-center mb-4">
              <img
                src="Image3.jpeg"
                alt="Project 3"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 text-center">Project 03</h3>
            <p className="text-gray-700 mb-6 text-center">
              Weather App using API integration.
              Tech: React, OpenWeather API
              </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-full shadow hover:from-pink-500 hover:to-yellow-400 hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;