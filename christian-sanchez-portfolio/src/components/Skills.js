import React from 'react';

export default function Skills() {
    return (
        <section>
            <div>
                <div>
                    <h1>
                        Skills & Technologies
                    </h1>
                    <p>
                        placeholder for skills & tech
                    </p>
                </div>
                <div>
                    {projects.map((projects) => (
                        <a>
                        <div> 
                            <img/>
                            <div>
                                <h2>
                                    {projects.subtitle}
                                </h2>
                                <h1>
                                    {projects.title}
                                </h1>
                                <p> {projects.description} </p>
                            </div>
                        </div> 
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}