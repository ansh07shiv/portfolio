import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Experienced Coder.", "Full Stack Developer.", "Backend Developer.", "Java Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 1000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>

        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Anshul Shivhare</span>
        </h1>
        <h2 className="text-3xl whitespace-nowrap font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
      </div>
    </div>
  );
}

export default LeftBanner