import pictureofme from '../../images/pictureofme.jpg'
import Heading from "../Heading";
function Aboutme() {
    return (
        <section className="lg:inline-block" id="about-me">
            <h1 className="font-bold md:text-3xl text-2xl p-3 text-center text-[#737373]">Viv Hayles&apos; Coding
                Portfolio</h1>
            <img className="col-span-1 float-right mx-4 h-32 w-24 lg:h-64 lg:w-48"
                 alt="A picture of Viv a smiling white woman with brown hair and glasses" src={pictureofme}/>
            <Heading text="About Me"/>
            <div className="lg:text-lg m-4">
                I&apos;m a software engineer specialising in React, PHP, MySQL. I&apos;m currently learning Laravel.
                I completed the Coding Skills Bootcamp at iO Academy, in which I learnt HTML, CSS, JavaScript (including
                React), PHP (including Laravel), Git, MySQL and Agile methodologies. I completed one individual coding
                project and three group projects, which can be viewed below.

                My background is in teaching where I taught GCSE Biology, Chemistry and Physics; mentored trainee and
                early career teachers; trained all staff on creating a psychologically-safe class-room. I have over 6
                years of experience in teaching.
            </div>
        </section>
    )
}

export default Aboutme