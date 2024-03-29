import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import {FaFacebookF, FaLinkedinIn, FaReact, FaTwitter, FaGithub} from "react-icons/fa";
import {SiFigma, SiNextdotjs, SiTailwindcss} from "react-icons/si";
import {socialLinks} from "../../constants";
import Title from "../layouts/Title";
const AboutMe = () => {
    return (
        <section
            id="aboutme">
            <br/>
            <br/>
            <Title title="About Me" des="Summary" />

            <p className="text-base font-bodyFont leading-6 tracking-wide text-justify" style={{lineHeight: 1.6}}>
                <p>
                    Greetings! I am a passionate technology professional, holding a
                    <span className="font-bold text-designColor"> Master of Science degree in Computer Science </span>
                    from the esteemed
                    <span className="font-bold text-designColor"> New Jersey Institute of Technology </span>.
                    This advanced degree has provided me with a strong foundation in theoretical and applied computer
                    science,
                    preparing me for the complexities of the tech industry.
                </p>

                <p>
                    My professional journey began at Deloitte USI, where I contributed as an Analyst and then as a
                    Consultant on the
                    <span className="font-bold text-designColor"> State of Michigan's Integrated Eligibility Project </span>.
                    This role was pivotal in shaping my understanding of large-scale software development and project
                    management,
                    setting a solid groundwork for my future endeavors.
                </p>

                <p>
                    Further enriching my experience in the U.S., I joined the<span
                    className="font-bold text-designColor"> Intelligent Transportation Systems Research
                    Center (ITSRC) </span> at NJIT
                    as a<span className="font-bold text-designColor"> Research Assistant</span>. This role was a gateway to innovative research and development, where I
                    explored new
                    dimensions of technology. My journey at NJIT evolved as I took on the role of a
                    <span className="font-bold text-designColor"> Java Developer Intern </span>,
                    diving deep into the realms of web development with a focus on modern frameworks and tools such as
                    <span className="font-bold text-designColor"> Java, React, and Angular </span>.
                    These experiences not only enhanced my technical skills but also nurtured my ability to adapt and
                    innovate within
                    rapidly changing technology landscapes.
                </p>

                <p>
                    Currently, I am proud to hold the position of
                    <span className="font-bold text-designColor"> Application Developer </span>
                    at NJIT ITSRC, where my role encompasses developing and implementing cutting-edge solutions. My
                    expertise in
                    <span className="font-bold text-designColor"> Java, React, and Angular </span>,
                    coupled with my continuous quest for learning, enables me to contribute significantly to my team and
                    projects.
                </p>

                <p>
                    I am distinguished by my fervent enthusiasm for embracing new technologies and trends in the tech
                    industry.
                    My career is a testament to my adaptability and perpetual drive for knowledge, qualities that are
                    indispensable
                    in the dynamic field of computer science.
                </p>

                <p>
                    As I look forward to new challenges and opportunities, I am eager to leverage my technical skills,
                    innovative
                    thinking, and the comprehensive knowledge gained through my Master's degree. I am committed to
                    pushing the
                    boundaries of technology and making substantial contributions to the field.
                </p>

            </p>
            <br/>
            <br/>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    {/*<h2 className="text-base uppercase font-titleFont mb-4">*/}
                    {/*    Find me in*/}

                    {/*</h2>*/}
                    <div className="flex gap-4">
                        <a href={socialLinks.linkedIn}
                           className="bannerIcon w-px" style={{width: "300px"}}
                           target="_blank" rel="noopener noreferrer"
                        >
                            LinkedIn Profile <FaLinkedinIn className="mx-4 text-2xl"/>
                        </a>

                        <a href={socialLinks.gitHub}
                           className="bannerIcon w-px" style={{width: "300px"}}
                           target="_blank" rel="noopener noreferrer"
                        >
                            Explore GitHub <FaGithub className="mx-4 text-2xl"/>
                        </a>


                    </div>
                </div>

            </div>
        </section>

    );
}

export default AboutMe;