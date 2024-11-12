import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { FaFacebookF, FaLinkedinIn, FaReact, FaTwitter, FaGithub } from "react-icons/fa";
import { SiFigma, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { socialLinks } from "../../constants";
import Title from "../layouts/Title";

const AboutMe = () => {
    return (
        <section id="aboutme">
            <br />
            <br />
            <Title title="About Me" des="Summary" />

            <p className="text-base font-bodyFont leading-6 tracking-wide text-justify" style={{lineHeight: 1.6}}>
                <p>
                    With over <span className="font-bold text-designColor text-2xl">4 years and 7 months</span> of experience as
                    a Full-Stack Developer, I specialize in delivering high-impact software solutions that combine deep
                    technical expertise with a strategic focus on scalability, security, and performance. My journey
                    spans diverse projects across sectors, including government applications, data-driven reporting
                    modules, and advanced data visualization tools, where I’ve consistently contributed to improving
                    operational efficiency, enhancing data accuracy, and supporting strategic decision-making.
                </p>

                <p className="pt-4">
                    Currently, I work at the <span className="font-bold text-designColor text-2xl">New Jersey Institute of Technology</span>,
                    where I lead transformative projects like the E-STIP application, a robust multi-million-dollar
                    solution for managing transportation improvement programs across New Jersey. By implementing <span
                    className="font-bold text-designColor text-2xl">React</span>,
                    <span className="font-bold text-designColor text-2xl">Spring Boot</span>, <span
                    className="font-bold text-designColor text-2xl">Oracle SQL</span>, and <span
                    className="font-bold text-designColor text-2xl">REST APIs</span>, I’ve enabled a scalable and secure
                    architecture that streamlines workflows and enhances project insights for NJDOT and associated
                    agencies. I also developed the August Redistribution Module, automating asset reporting and data
                    visualization, boosting data accuracy by 200% through <span
                    className="font-bold text-designColor text-2xl">PL/SQL</span> and <span
                    className="font-bold text-designColor text-2xl">JavaScript</span> integrations.
                </p>

                <p className="pt-4">
                    Previously, I was a Full-Stack Developer at <span
                    className="font-bold text-designColor text-2xl">Deloitte</span>, where I pioneered security enhancements and
                    centralized code management through a Mono-Repo architecture using <span
                    className="font-bold text-designColor text-2xl">NX</span> and <span
                    className="font-bold text-designColor text-2xl">Storybook</span>. My contributions to Michigan State’s
                    Integrated Eligibility Project improved data processing workflows with Java Batch processing,
                    enhanced eligibility algorithms in <span
                    className="font-bold text-designColor text-2xl">Java</span> and
                    <span className="font-bold text-designColor text-2xl">Oracle SQL</span>,
                    and drove collaborative advancements in reusable code.
                </p>

                <p>
                    Armed with a Master’s in Computer Science (GPA 3.9) from NJIT and a gold medal from Shri G.S.
                    Institute of Technology, I’m committed to developing innovative, efficient, and secure applications.
                    My technical toolbox includes <span className="font-bold text-designColor text-2xl">Java</span>, <span
                    className="font-bold text-designColor text-2xl">Spring Boot</span>, <span
                    className="font-bold text-designColor text-2xl">React</span>, <span
                    className="font-bold text-designColor text-2xl">Angular</span>, <span
                    className="font-bold text-designColor text-2xl">AWS</span>, and <span className="font-bold text-designColor">Oracle SQL</span>,
                    among others. Driven by a passion for impactful solutions, I’m excited about the future of software
                    in shaping business and public sector efficiency. Connect with me to explore potential
                    collaborations in Full-Stack Development, Cloud Solutions, and Data-Driven Strategy!
                </p>
            </p>
            <br/>
            <br/>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <div className="flex gap-4">
                        <a
                            href={socialLinks.linkedIn}
                            className="bannerIcon w-px"
                            style={{ width: "300px" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn Profile <FaLinkedinIn className="mx-4 text-2xl" />
                        </a>

                        <a
                            href={socialLinks.gitHub}
                            className="bannerIcon w-px"
                            style={{ width: "300px" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore GitHub <FaGithub className="mx-4 text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
