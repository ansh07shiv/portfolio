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

            <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
                Hello! I'm excited to introduce myself as a recent graduate holding a <span
                className="font-bold text-designColor">
                Master of Science degree</span> in
                <span className="font-bold text-designColor"> Computer Science</span>, proudly earned from the esteemed
                <span className="font-bold text-designColor"> New Jersey Institute of Technology</span>. My academic
                journey has been an enriching experience, equipping me with the knowledge and skills necessary to excel
                in the world of technology.

                <br/>
                Over the past nearly three years, I've had the privilege of working as a <span
                className="font-bold text-designColor">
                Full Stack Developer</span> with
                <span className="font-bold text-designColor"> Deloitte USI</span> on the <span
                className="font-bold text-designColor">
                 Integrated Eligibility Project</span>, collaborating closely with the State of Michigan.
                This professional journey has not only honed my technical abilities but also provided me with valuable
                insights into the complexities of large-scale software development.

                <br/>
                My experience with technology in USA was started with my internship
                as a <span className="font-bold text-designColor"> Java Developer</span> Intern at <span
                className="font-bold text-designColor">
                NJIT ITSRC</span>.
                During this internship, I delved into the fascinating realm of modern web development. I had the
                opportunity to work with cutting-edge frameworks and tools like React, Angular, and Spring Boot, gaining
                hands-on experience that broadened my skill set significantly.

                <br/>
                <br/>
                One aspect that sets me apart is my unwavering enthusiasm for exploring new technologies. I thrive on
                keeping pace with the ever-evolving tech landscape, always eager to embrace the latest trends and
                innovations. I firmly believe that adaptability and a hunger for knowledge are key attributes in the
                fast-paced world of computer science.

                <br/>
                My commitment to continuous learning, combined with my technical expertise, makes me a dynamic and
                versatile professional in the field of computer science. I am excited to embark on new challenges, push
                the boundaries of innovation, and contribute to the ever-evolving world of technology.
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
                                            Explore GitHub <FaGithub className="mx-4 text-2xl" />
                                        </a>


                    </div>
                </div>

            </div>
        </section>

    );
}

export default AboutMe;