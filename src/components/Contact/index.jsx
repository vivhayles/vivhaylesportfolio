import Heading from "../Heading";

function Contact() {
    return (
        <footer id="contact-me">
            <Heading text="Contact Me"/>
            <div className="font-sans text-6xl mx-3 my-2 py-4 flex items-stretch justify-evenly">
                <a href="mailto:vhcoding12207@gmail.com"
                   target="_blank"><i className="fa-regular fa-envelope text-[#8eb8a8]"></i></a>
                <a href="https://www.linkedin.com/in/viv-hayles-38904b84/"
                   target="_blank"><i className="fa-brands fa-linkedin text-[#8eb8a8]"></i></a>
                <a href="https://github.com/vivhayles" target="_blank"><i
                    className="fa-brands fa-square-github text-[#8eb8a8]"></i></a>
            </div>
        </footer>
    )
}

export default Contact