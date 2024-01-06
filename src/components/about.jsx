import React from 'react'

export const About = () => {
  return (
    <div>
        <div class=" z-20 -mx-6 mb-4 w-screen bg-slate-900/50 px-6 py-5 
 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto 
 lg:w-fulllg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase 
        tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <div className="text-center">
            <p className="mb-4 lg:text-3xl font-bold -tracking-wide text-[#ccd6f6]  phone:text-xl
                                items-center flex text-opacity-100 italic pl-20 lg:pl-44  " >
            Welcome to my vibrant corner <br/> of the digital universe!
            </p>
        </div>
        <div className="py-10">
            <p className="italic">In the realm of bits and bytes, I thrive on bringing ideas to life through hands-on projects. From coding escapades to exploring cutting-edge technologies, 
my journey is a dynamic dance between problem-solving and continuous learning</p> 
        </div>
        <div className="py-5">
            <p className="italic">Beyond the screen, I usually spend time with family or friends playing various sports such as soccer or volleyball or just enjoying
            each others company. You might also catch me streaming some games or just doing/learning some coding on <a className='hover:text-slate-200 font-black' target='_blank' href='https://www.twitch.tv/marvcs' >twitch</a> </p> 
        </div>

    </div>
  )
}
