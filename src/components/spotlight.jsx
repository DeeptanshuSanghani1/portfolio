import React, { useState } from "react";
function HandleMouseMove(e, setMousePosition) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
  
    const xPos = clientX - left;
    const yPos = clientY - top;
    setMousePosition({ x: xPos, y: yPos });
  }
  
export const Spotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const opacityValue = 0.15;
    const handleMouseMove = (e) => {
      HandleMouseMove(e, setMousePosition);
    };
    
    return ( 
    <body className="bg-slate-900 leading-relaxed text-slate-900 antialiased selection:bg-teal-300 selection:text-teal-900">
    
        <div className="relative h-screen w-screen ">
            <div
                onMouseMove={handleMouseMove}
                className=" fixed inset-0 h-screen w-screen"
                style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(29,78,216), transparent 80%)`,
                opacity: opacityValue,
                }}
            >
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl justify-center
                            items-center flex'>
                                Deeptanshu Sanghani
                            </h1>
                        </div>
                    </header>
                </div>

            </div>
    
                
                    
        </div>
    </body>
  )
}
