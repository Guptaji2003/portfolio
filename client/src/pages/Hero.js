import React from "react";
import heroImage from "../assets/hero.jpg";
import aboutImage from "../assets/about.jpeg";
import project2 from "../assets/project2.png";
import project3 from "../assets/food.png";
import projectImage from "../assets/Screenshot 2024-11-30 183834.png";
import { useEffect } from "react";

const Hero = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "April 2024",
    },
    {
      id: 2,
      title: "MongoDB Developer Certification",
      issuer: "MongoDB",
      date: "September 2024",
    },
    {
      id: 3,
      title: "NPTEL Certificate in Java Programming",
      issuer: "NPTEL",
      date: "April 2024",
    },
    {
      id: 4,
      title: "Certificate of Completion in C++ Training",
      issuer: "ACEIT, JAIPUR",
      image: aboutImage,
      date: "November 2023",
    },
    {
      id: 5,
      title: "Startup EXPO (E-CELL ACEIT) Certificate",
      issuer: "ACEIT, JAIPUR",
      date: "March 2024",
    },
    {
      id: 6,
      title: "Certificate of PROGRAMMING IN C",
      issuer: "CISCO",
      date: "December 2023",
    },
    {
      id: 7,
      title: "CSS BATTLE - EXERGIE'24  (1ST RANK)",
      issuer: "ACEIT, JAIPUR",
      date: "March 2024",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "REST APIs",
    "Deployment (Vercel, Render)",
  ];

  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern portfolio built with React and Tailwind CSS featuring smooth animations and responsive design",
      image: projectImage,
      liveUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/username/portfolio",
    },
    {
      id: 2,
      title: "Quize App",
      description:
        "Full-stack e-commerce application with React, Node.js, and MongoDB featuring cart functionality and payment integration",
      image: project2,
      liveUrl: "https://ecommerce.example.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      id: 3,
      title: "Food Delivery App",
      description:
        "A collaborative task management tool built with React and Firebase, featuring real-time updates and team workspaces",
      image: project3,
      liveUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/username/tasks",
    },
  ];

  const handleCertificateClick = (c) => {
    const modal = document.createElement("div");
    modal.className =
      "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80";
    modal.innerHTML = `
    <div class="relative max-w-4xl w-full bg-gray-800 rounded-xl p-2">
      <img 
        src=${c.image} 
        alt="${c.title}"
        class="w-60 h-50 rounded-lg"
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
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "all 0.6s ease-out";
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
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

        {/* Infinite Scrolling Tech Companies Section */}
        <section className="py-20 overflow-hidden">
          <div className="relative">
            {/* First row scrolling left */}
            <div className="flex animate-scroll-left">
              <div className="flex space-x-32 min-w-full">
                {/* Company logos - Row 1 */}
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex space-x-32 min-w-full">
                {/* Duplicate logos */}
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
              </div>
            </div>

            {/* Second row scrolling right */}
            <div className="flex animate-scroll-right mt-8">
              <div className="flex space-x-32 min-w-full">
                {/* Company logos - Row 2 */}
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex space-x-32 min-w-full">
                {/* Duplicate logos */}
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                <svg
                  className="h-12 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            @keyframes scroll-right {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-left {
              animation: scroll-left 20s linear infinite;
            }
            .animate-scroll-right {
              animation: scroll-right 20s linear infinite;
            }
          `}</style>
        </section>

        {/* Mobile Scrolling Animation */}
        <section className="md:hidden overflow-hidden py-12">
          <div className="relative w-full">
            <div className="flex space-x-8 animate-scroll-left">
              <div className="flex space-x-8 min-w-full">
                <svg
                  className="h-8 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
                <svg
                  className="h-8 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                <svg
                  className="h-8 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex space-x-8 min-w-full">
                <svg
                  className="h-8 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
                <svg
                  className="h-8 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                <svg
                  className="h-8 w-auto text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

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

        {/* Projects Section */}
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
                    /*onClick={() => handleCertificateClick(c)}*/ className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2"
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

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-20 px-4 bg-gray-900/50 backdrop-blur-lg"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Let's Connect
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
                <form
                  className="space-y-6"
                  action="https://formspree.io/f/xnnqogdp"
                  method="POST"
                >
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-pink-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-pink-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-pink-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button className="w-full px-8 py-3 bg-gradient-to-r  from-pink-500 to-violet-500 rounded-lg hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-300">pulkit7976@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-gray-300">Jaipur, Rajasthan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Working Hours</h3>
                    <p className="text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <a
                      href="tel:+917976142702"
                      className="text-gray-300 hover:text-pink-500 transition-colors flex items-center gap-2"
                    >
                      <span>+91 7976142702</span>
                      <button className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-violet-500 rounded-full hover:opacity-90 transition-opacity">
                        Call Now
                      </button>
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
                    </svg>
                  </a>
                  <a
                    href="www.linkedin.com/in/pulkit-gupta-7300b6322"
                    className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
