import React from 'react';

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1>Hey There!</h1>
                    <h2> My name is Christian Sanchez</h2>
                    <h3> Tech Enthusiast | Something Witty Here </h3>                
                    <p> 
                        NEED TO ADD SOMETHING ABOUT MEH
                    </p>
                    <div>
                        <a href="#about">CLS</a>
                        <a href="#contact">Work With Me</a>
                        <a href="#projects">Project</a>
                        <a href="#skills">Skills</a>
                    </div>
                </div>
            </div>   
        </section>
    );
}