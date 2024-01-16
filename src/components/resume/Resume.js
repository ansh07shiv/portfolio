import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import {FaFilePdf} from "react-icons/fa";
import {socialLinks} from "../../constants";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
        <div className="">
            <Title title="3+ YEARS OF EXPERIENCE" des="My Resume"/>

            <a
                className="text-lg h-10 rounded-full bg-black inline-flex justify-center items-center
                      text-gray-400 hover:text-designColor duration-300 cursor-pointer p-4"
                href={socialLinks.resume} target="_blank" rel="noopener noreferrer"
            >
                Resume <FaFilePdf className="mx-2"/>
            </a>

        </div>
        <Education/>
    </section>
  );
}

export default Resume