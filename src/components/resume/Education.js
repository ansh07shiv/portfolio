import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      // className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. in Information Technology"
            subTitle="Shri Govindram Seksariya Institute of Technology (2015 - 2019)"
            result="3.87 / 4.00"
            des="Achievements: Shri K. G. Seksariya Gold Medalist, Government of India Smart India Hackathon Grand Finalist."
          />
          <ResumeCard
            title="M.S. in Computer Science"
            subTitle="New Jersey Institute of Technology (2022 - 2023)"
            result="3.95 / 4.00"
            des="Relevant Courses: Internet and Higher-Level Protocols,
            Data Structures and Algorithms, Machine Learning, Data Analytics with R, Data Management Systems, Deep Learning, Cloud
Computing (AWS), Natural Language Processing, Web Systems."
          />
        </div>
      </div>
      {/* part Two */}
      <br/>
      <br/>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">


          <ResumeCard
              title="Full Stack Developer"
              subTitle="New Jersey Institute of Technology - (December 2023 - Present)"
              result="New Jersey, USA"
              // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
              title="Deloitte"
              subTitle="Full Stack Developer - (January 2020 - August 2022)"
              result="Bangalore, India"
              // des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
