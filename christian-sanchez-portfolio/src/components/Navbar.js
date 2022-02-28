import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Navbar() {
    return (
        <header>
            <div>
                <a>
                    <a href="#about">
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