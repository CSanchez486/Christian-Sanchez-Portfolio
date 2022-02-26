import React from 'react';
import projects from "..data/"

export default function Project() {
    return (
        <section>
            <div>
                <div>
                    <h1>
                        Apps I've Built
                    </h1>
                    <p>
                        Need to add paragraph re: apps.
                    </p>
                </div>
                <div>
                    {projects.map((project) =>
                        <a
                            href={project.link}
                            key={project.image}>
                            <div>
                                <h2>
                                    {project.subtitle}
                                </h2>
                                <h1>
                                    {project.title}
                                </h1>
                                <p>{project.description}</p>
                            </div>                
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}