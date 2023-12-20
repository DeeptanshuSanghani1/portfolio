"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';   
import {
    IconBrandPython,
    IconBrandCSharp,
    IconBrandCpp,
    IconSql,
    IconBrandReact,
    IconBrandGit,
    IconBrandMongodb,
    IconBrandNodejs,

  } from "@tabler/icons-react";


import React, { useState } from "react";
const slides = [
    { id: 1, icon: <IconBrandPython size={40} strokeWidth={1.5} color="white" /> },
    { id: 2, icon: <IconBrandCSharp size={40} strokeWidth={1.5} color="white" /> },
    { id: 3, icon: <IconBrandCpp size={40} strokeWidth={1.5} color="white" /> },
    { id: 4, icon: <IconSql size={40} strokeWidth={1.5} color="white" /> },
    { id: 5, icon: <IconBrandReact size={40} strokeWidth={1.5} color="white" /> },
    { id: 6, icon: <IconBrandGit size={40} strokeWidth={1.5} color="white" /> },
    { id: 7, icon: <IconBrandMongodb size={40} strokeWidth={1.5} color="white" /> },
    { id: 8, icon: <IconBrandNodejs size={40} strokeWidth={1.5} color="white" /> },
    // Add more slides with Tabler Icons as needed
  ];
function HandleMouseMove(e, setMousePosition) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
  
    const xPos = clientX - left;
    const yPos = clientY - top;
    setMousePosition({ x: xPos, y: yPos });
  }
  
export const Spotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
      HandleMouseMove(e, setMousePosition);
    };
    
    return ( 
    <body className="bg-[#0a192f] leading-relaxed text-slate-900 antialiased selection:bg-teal-300 selection:text-teal-900">
    
        <div className="relative h-screen w-screen ">
            <div
                onMouseMove={handleMouseMove}
                className=" fixed inset-0 h-screen w-screen"
                style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.15), transparent 80%)`,
                }}
            >
                <div className ="mx-auto min-h-screen max-w-screen-xl px-5 py-12 lg:px-14 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                            <div>
                                <h1 className='lg:text-5xl font-bold -tracking-wide text-[#ccd6f6] phone:text-3xl 
                                items-center flex text-opacity-100 '>
                                    Deeptanshu Sanghani
                                </h1>
                                <h2 className='lg:text-4xl py-6 font-bold tracking-tight text-[#ccd6f6] phone:text-xl 
                                items-center flex text-opacity-100 '>Full Stack Engineer</h2>
                            </div>
                            <div>
                                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                                    <ul className="mt-16 w-max">
                                        <li>
                                            <a className="flex group items-center py-3 active" href="#about">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                            </a>
                                        </li>
                                        <li>
                                        <a className="flex group items-center py-3 active" href="#about">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                                            </a>
                                        </li>
                                        <li>
                                        <a className="flex group items-center py-3 active" href="#about">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                        <a className="flex group items-center py-3 active" href="#about">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">Resume</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div >
                                <section className="mt-16 lg:w-1/2 section hidden lg:block">
                                    <div>
                                        <div>
                                            <Swiper
                                                slidesPerView={5}
                                                loop={true}
                                                autoplay={{
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                    reverseDirection: false
    
                                                }}
                                                speed={5000}  
                                                modules={[Autoplay]}                                  
                                                className="max-w-[90%]"
                                            >
                                        {slides.map((slide, index) => (
                                            <SwiperSlide key={index}>
                                                {slide.icon}
                                            </SwiperSlide>
                                        ))}
                                            </Swiper>
                                        </div>
                                        <div>
                                            <Swiper
                                                slidesPerView={5}
                                                loop={true}
                                                autoplay={{
                                                    delay: 0,
                                                    disableOnInteraction: false,
                                                    reverseDirection: true
    
                                                }}
                                                speed={5000}  
                                                modules={[Autoplay]}                                  
                                                className="max-w-[90%]"
                                            >
                                        {slides.map((slide, index) => (
                                            <SwiperSlide key={index}>
                                                {slide.icon}
                                            </SwiperSlide>
                                        ))}                                               
                                            </Swiper>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </header>
                    </div>
                </div>

            </div>
            
    
                
                    
        </div>
    </body>
  )
}
