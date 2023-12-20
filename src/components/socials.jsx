import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconsSquare
  } from "@tabler/icons-react";
  import { IconSquareRoundedLetterr } from '@tabler/icons-react';
export const Socials = () => {
    return(
        <div>
            <ul className = "ml-1 mt-8 flex items-center" aria-label='Social Media'>
                <li className="mr-5 text-xs">
                <a class="block hover:text-slate-200 lg:py-7"  href="https://github.com/DeeptanshuSanghani1" target="_blank">
                <IconBrandGithub  size={40} className="lg:w-8 lg:h-8 phone:w-6 phone:h-6 text-white" color="white" />
                </a>
                </li>
                <li className="mr-5 text-xs">
                <a class="block hover:text-slate-200 lg:py-7 "  href="https://www.linkedin.com/in/deeptanshusanghani/" target="_blank">
                <IconBrandLinkedin size={40} className="lg:w-8 lg:h-8 phone:w-6 phone:h-6 text-white" color="white" />
                </a>
                </li>
                <li className="mr-5 text-xs">
                <a class="block hover:text-slate-200 lg:py-7 "  href="https://www.linkedin.com/in/deeptanshusanghani/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-letter-r" className="lg:w-8 lg:h-8 
                                                                                                    phone:w-6 phone:h-6 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" 
                 stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                </svg>
                </a>
                </li>
            </ul>
        </div>
    )
}