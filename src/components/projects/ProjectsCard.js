import React from 'react'
import { BsGithub, BsBook, BsCode } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Markup } from 'interweave';

const ProjectsCard = ({ title, des, src, skills, githubLink, publicationLink, otherInformation, kaggleLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      {/*<div className="w-full h-[80%] overflow-hidden rounded-lg">*/}
      {/*  <img*/}
      {/*    className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"*/}
      {/*    src={src}*/}
      {/*    alt="src"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink && (
                  <a
                      className="text-lg h-10 rounded-full bg-black inline-flex justify-center items-center
                      text-gray-400 hover:text-designColor duration-300 cursor-pointer p-2"
                      href={githubLink} target="_blank" rel="noopener noreferrer"
                  >
                   Github<BsGithub className="mx-2"/>
              </a>
              )}

              {publicationLink && (
                  <a
                      className="text-lg h-10 rounded-full bg-black inline-flex justify-center items-center
                      text-gray-400 hover:text-designColor duration-300 cursor-pointer p-2"
                      href={githubLink} target="_blank" rel="noopener noreferrer"
                  >
                    Paper<BsBook className="mx-2"/>
                  </a>
              )}

              {kaggleLink && (
                  <a
                      className="text-lg h-10 rounded-full bg-black inline-flex justify-center items-center
                      text-gray-400 hover:text-designColor duration-300 cursor-pointer p-2"
                      href={githubLink} target="_blank" rel="noopener noreferrer"
                  >
                    Kaggle<BsCode className="mx-2"/>
                  </a>
              )}


              {/*<span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">*/}
              {/*  <FaGlobe />*/}
              {/*</span>*/}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify" style={{whiteSpace: 'pre-line'}}>
            {des}
          </p>
          {otherInformation && (
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300"
                 style={{whiteSpace: 'pre-line'}} >
                {/*{otherInformation}*/}
                <Markup content={otherInformation} />
              </p>
          )}
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300" style={{whiteSpace: 'pre-line'}}>
            <span className="font-bold text-designColor">Skills: </span> {skills}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard