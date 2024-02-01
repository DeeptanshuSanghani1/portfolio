
import './spotlight.css';
import { About } from "./about";
import React, { useState } from "react";
import { Slider} from "./slider";
import { Socials } from "./socials";
import { Experience } from "./experience";
import { Projects } from "./projects";


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
        
    <body className="bg-[#0a192f] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="relative h-screen w-screen ">
            <div
                onMouseMove={handleMouseMove}
                className=" fixed inset-0 h-screen w-screen"
                style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.15), transparent 80%)`,
                }}
            >
                <div className ="mx-auto  px-5 py-12 lg:px-36 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <header className="sticky top-0  lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:pl-10">
                            <div>
                                <h1 className='lg:text-5xl font-bold -tracking-wide text-[#ccd6f6] phone:text-3xl 
                                items-center flex text-opacity-100 '>
                                    Deeptanshu Sanghani
                                </h1>
                                <h2 className='lg:text-4xl py-6 font-bold tracking-tight text-[#ccd6f6] phone:text-xl 
                                items-center flex text-opacity-100 lg:pt-12 '>Full Stack Engineer</h2>
                            </div>
                            <div>
                                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                                    <ul className="mt-16 w-max">
                                        <li>
                                            <a href="#about" className=" !scroll-smooth flex group items-center py-3 active">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                            </a>
                                        </li>
                                        <li>
                                        <a className="flex group items-center py-3 active" href="#experience">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                                            </a>
                                        </li>
                                        <li>
                                        <a className="flex group items-center py-3 active" href="#projects">
                                                <span className="nav-indicator mr-5 h-px w-8 bg-slate-600 transition-all group-hover:w-16 
                                                group-hover:bg-slate-200 group-focus-visible:w-16 
                                                group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                                </span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                                                group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div >
                                <Slider/>
                            </div>
                            <div>
                                <Socials/>
                            </div>
                        </header>
                        <main className="overflow-x-hidden scrollbar scrollbar-thumb-blue-300 scrollbar-track-0a192f  sc max-h-[calc(90vh-100px)] pt-24 lg:w-1/2 lg:py-14 overflow-y-auto">
                            <div className='lg:pt-4'>
                            <section id="about" class="about" className="mb-8 md:mb-12 lg:mb-28">
                                <About/>
                            </section>
                            </div>
                            <div className="lg:pb-2">
                            <section className="mb-16 md:mb-24 lg:mb-9 " id="experience" aria-label="Work Experience">
                                <Experience/>
                            </section>
                            </div>
                            <br/>
                            <br/>
                            <section id="projects" className="mb-16 md:mb-24 lg:mb-36">
                                <Projects/>
                            </section>
                        </main>
                    </div>
                </div>

            </div>   
        </div>
    </body>
    
  )

}
