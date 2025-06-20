import React from 'react'
import { projectsData } from '../data'

const Project = () => {
  return (
    <div>
       <section id="projects" className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Featured Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                      <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-lg"
                      >
                        <img
                          loading="lazy"
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64  object-cover transition-transform group-hover:scale-110 "
                          width={500}
                          height={500}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 bg-gray-900 transition-transform">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-300 mb-4">{project.description}</p>
                          <div className="flex gap-4">
                            <a href={project.liveUrl} target="_blank">
                              {" "}
                              <button className="px-6 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors">
                                View Live
                              </button>
                            </a>
      
                            <a href={project.githubUrl} target="_blank">
                              {" "}
                              <button className="px-6 py-2 border border-pink-500 rounded-full hover:bg-pink-500/20 transition-colors">
                                GitHub
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
      
    </div>
  )
}

export default Project
