import codingprojects from "../../../codingprojects.json";
import { useState } from "react";
import Heading from "../Heading";

function Portfolio() {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    function handleClick(index) {
        setOpenModalIndex(openModalIndex === index ? null : index);
    }

    return (
        <section id="portfolio-of-work">
            <Heading text='Portfolio'/>
            <p className="mx-4 lg:text-lg">Here is a showcase of my coding projects so far:</p>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-1">
                {codingprojects.project.map((project, index) => (
                    <div key={index} className="project-card mx-4 my-2 border-4
                    border-[#8eb8a8] rounded-lg p-2">
                        <h4 className="py-2 font-bold text-xl text-[#737373]">{project.name}</h4>
                        <p className='lg:text-lg'>{project.description}</p>
                        <img
                            src={project.img}
                            alt={`${project.name} screenshot`}
                            className="project-img py-2"
                        />
                        <div className="lg:text-lg links grid grid-cols-2 gap-1 text-center
                        text-gray-600 font-semibold underline">
                            <a href={project.githublink} target="_blank">
                                GitHub
                            </a>
                            {project.livelink && (
                                <a href={project.livelink} target="_blank">
                                    Live link
                                </a>
                            )}
                        </div>
                        <button
                            className="px-2 my-2 border-4 border-[#cae4da] bg-[#cae4da] text-gray-600
                            font-semibold text-lg rounded-full flex justify-center mx-auto"
                            onClick={() => handleClick(index)}>
                            {openModalIndex === index ? "Less" : "More"} {project.modalbutton}
                        </button>
                        {openModalIndex === index && (
                            <div className="modal-content lg:text-lg mt-4 p-4 border rounded bg-[#f6f4ef]">
                                <p>{project.moreinfo}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
