import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Christian L. Sanchez
                    </a>
                </a>
                <nav>
                    <a href="#projects">
                        Projects
                    </a>
                    <a href="skills">
                        Skills
                    </a>
                    <a href="Contact">
                        Contact Me
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>

                </nav>
            </div>
        </header>
    )
}