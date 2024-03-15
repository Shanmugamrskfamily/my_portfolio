// Projects.jsx
import React from 'react';
import { projectData } from '../data/ProjectsData';

const Projects = () => {
    const project = projectData;

    return (
        <div id="projects" className="mt-8">
            <div className="text-center mb-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 mb-8">Projects</p>
            </div>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                    {project.map((item, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden bg-project text-black rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 p-2 transition-all duration-300">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover rounded w-full h-40"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p
                                    className="text-sm text-gray-600 mb-4  transition-opacity"
                                    style={{ maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                >
                                    {item.description}
                                </p>
                                <div className="flex justify-between">
                                    <a
                                        href={item.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        <i className="fa-solid fa-eye"></i><br />Live Demo
                                    </a>
                                    <a
                                        href={item.githubFrontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:underline"
                                    >
                                        <i className="fa-brands fa-github"></i><br />GitHub Frontend
                                    </a>
                                    <a
                                        href={item.githubBackend !== 'N/A' ? item.githubBackend : undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-500 hover:underline ${
                                            item.githubBackend === 'N/A' ? 'hidden' : ''
                                            }`}
                                    >
                                        <i className="fa-brands fa-square-github"></i><br />GitHub Backend
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center text-2xl  mt-8">
                <a
                    href="https://github.com/Shanmugamrskfamily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500  hover:underline"
                >
                    More projects on GitHub...
                </a>
            </div>
        </div>
    );
};

export default Projects;
