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
  export const Slider = () => {
    return(
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
    )
  }
