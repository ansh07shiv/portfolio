import React from 'react'
import { bannerImg } from "../../assets/index";
import {profilePic} from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative top--2">
      <img
        className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] z-10"
        src={profilePic}
        alt="bannerImg"
      />
      {/*<div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>*/}
    </div>
  );
}

export default RightBanner