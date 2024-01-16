import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import {FaFacebookF, FaLinkedinIn, FaReact, FaTwitter} from "react-icons/fa";
import {SiFigma, SiNextdotjs, SiTailwindcss} from "react-icons/si";
import AboutMe from "./AboutMe";
const Banner = () => {
  return (
      <>
        <div
          id="home"
          className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-none"
        >
          <LeftBanner />
         <RightBanner />
        </div>

        <AboutMe />
      </>
  );
}

export default Banner