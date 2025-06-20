import React from 'react'

const HeadPage = () => {
  return (
    <div>
       {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[wave_8s_ease-in-out_infinite]">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse">
                  Pulkit Gupta
                </span>
              </h1>
              <style jsx>{`
                @keyframes wave {
                  0%,
                  100% {
                    transform: translateY(0) rotate(0);
                  }
                  25% {
                    transform: translateY(-20px) rotate(-5deg);
                  }
                  50% {
                    transform: translateY(0) rotate(0);
                  }
                  75% {
                    transform: translateY(-20px) rotate(5deg);
                  }
                }
              `}</style>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Crafting beautiful digital experiences through code and design
              </p>
              <div className="flex gap-4 justify-center">
                <a href="#projects">
                  <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full hover:scale-105 transition-transform">
                    View Projects
                  </button>
                </a>
                <a href="#contact">
                  <button className="px-8 py-3 border-2 border-pink-500 rounded-full hover:bg-pink-500/20 transition-colors">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
        </section>
    </div>
  )
}

export default HeadPage
