import React from 'react'
import { certificatesData } from '../data'
const Certificate = () => {
  return (
    <div>
        {/* Certifications Section */}
              <section id="certifications" className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Certifications & Achievements
                  </h2>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Certificate Card 1 */}
                    {certificatesData.map((c) => (
                      <>
                        <div
                          className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="h-16 w-16 mb-6 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 p-0.5">
                            <div className="h-full w-full bg-gray-800 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-pink-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                          <p className="text-gray-400 mb-4">{c.issuer}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>Issued: {c.date}</span>
                            <span className="mx-2">•</span>
                          </div>
                          {/* <button 
                              onClick={() => {
                                const modal = document.createElement('div');
                                modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80';
                                modal.innerHTML = `
                                  <div class="relative max-w-4xl w-full bg-gray-800 rounded-xl p-2">
                                    <img 
                                      src="/certificates/${c.id}.jpg" 
                                      alt="${c.title}"
                                      class="w-full h-auto rounded-lg"
                                    />
                                    <button 
                                      class="absolute top-4 right-4 text-white hover:text-pink-500"
                                      onclick="this.parentElement.parentElement.remove()"
                                    >
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    </button>
                                  </div>
                                `;
                                document.body.appendChild(modal);
                              }}
                              className="mt-4 px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-violet-500 rounded-full hover:scale-105 transition-transform"
                            >
                              View Certificate
                            </button> */}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Certificate
