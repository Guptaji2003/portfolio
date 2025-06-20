import React from 'react'
import aboutImage from "../assets/about.jpeg";
import { skills } from '../data';

const About = () => {
    
  return (
    <div>
 {/* Phone Section - Mobile Only */}
        <section className="py-20 px-4 md:hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Get In Touch
            </h2>

            <div className="flex justify-center">
              <a
                href="tel:+917976142702"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-lg font-medium">Connect with me</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
              <section id="about" className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    About Me
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      {/* Profile Image with Gradient Border */}
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-pink-500/30">
                        {/* Main Profile Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4/5 h-4/5 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                              <img
                                src={aboutImage}
                                alt="Pulkit Gupta"
                                className="w-full h-full object-cover"
                              />
                              {/* Animated Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-violet-500/20 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
      
                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-500"></div>
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-violet-500"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-violet-500"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-500"></div>
      
                        {/* Floating Tech Particles */}
                        <div className="absolute inset-0">
                          <div className="absolute top-4 left-4 w-3 h-3 bg-pink-500 rounded-full animate-float"></div>
                          <div className="absolute top-4 right-4 w-3 h-3 bg-violet-500 rounded-full animate-float delay-150"></div>
                          <div className="absolute bottom-4 left-4 w-3 h-3 bg-violet-500 rounded-full animate-float delay-300"></div>
                          <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-500 rounded-full animate-float delay-450"></div>
                        </div>
                      </div>
      
                      {/* Decorative Elements */}
                      {/* <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full opacity-30 blur-xl animate-pulse delay-1000"></div> */}
      
                      {/* Tech Icons Floating Animation */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-8 left-8 animate-float delay-100">
                          <svg
                            className="w-8 h-8 text-pink-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <div className="absolute bottom-8 right-8 animate-float delay-300">
                          <svg
                            className="w-8 h-8 text-violet-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                      </div>
                    </div>
      
                    <div className="space-y-6">
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/50 transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                          Who I Am
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          I'm a passionate full-stack developer with a keen eye for
                          design and a love for creating seamless user experiences.
                          With expertise in modern web technologies, I transform ideas
                          into elegant, functional solutions.
                        </p>
                      </div>
      
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/50 transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                          Tech Stack
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {skills.map((i, key) => (
                            <div className="flex items-center space-x-2 text-gray-300">
                              <svg
                                className={`w-5 h-5 text-${
                                  key % 2 == 0 ? "pink" : "violet"
                                }-500`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                              </svg>
                              <span>{i}</span>
                            </div>
                          ))}
      
                          {/* <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>Node.js</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>MongoDB</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>HTML</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>TailwindCSS</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>JavaScript</span>
                          </div> */}
                        </div>
                      </div>
      
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/50 transition-colors duration-300 mt-6">
                        <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                          Languages
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg
                              className="w-5 h-5 text-pink-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>English (Fluent)</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg
                              className="w-5 h-5 text-violet-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span>Hindi (Native)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default About
