import {
    IconBrandGithub,
    IconBrandLinkedin
  } from "@tabler/icons-react";
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
                <a class="block hover:text-slate-200 lg:py-7 "  href="www.linkedin.com/in/deeptanshusanghani" target="_blank">
                <IconBrandLinkedin size={40} className="lg:w-8 lg:h-8 phone:w-6 phone:h-6 text-white" color="white" />
                </a>
                </li>
            </ul>
        </div>
    )
}