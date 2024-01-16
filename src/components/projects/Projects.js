import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import {projectLinks} from "../../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
        <Title
          title="Projects"
          des="My Projects"
        />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Assignment Information Management (AIM)"
          des="The AIM System is a cutting-edge web-based application designed to revolutionize the
                assignment submission and review process within academic institutions. It is developed using React, Flask,
                and MongoDB. Tailored for both students
                and professors, this platform addresses key pain points and enhances overall efficiency in
                managing assignments."
          skills="Flask, React.js, Python, MongoDB, Team Leadership"
          githubLink={projectLinks.aimLink}

        />
        <ProjectsCard
          title="Predicting Varacity of Job Description"
          des="Engineered a cutting-edge machine learning model that harnessed advanced Natural Language Processing (NLP) techniques and machine learning classification algorithms. Accomplished an extraordinary accuracy rate of 99.98% through the implementation of a bespoke ensemble model, showcasing expertise not only in NLP but also in sophisticated model ensembling techniques, thereby delivering superior results in predictive accuracy."
          skills="Natural Language Processing (NLP), Machine Learning, Python, Teamwork"
          githubLink={projectLinks.jobVaracityLink}
        />
        <ProjectsCard
          title="Identification of Diseases in Corn Leaves using Convolutional Neural Networks and Boosting"
          des="Published in Proceedings of the 8th International Conference on Pattern Recognition Applications and Methods,
          ICPRAM, 894-899, 2019, Prague, Czech Republic.
          I Led a collaborative effort with a team of four research engineers to design and implement
          a machine learning algorithm aimed at classifying corn crop leaf images based on their
          respective diseases. Employed a sophisticated ensemble approach, combining Adaptive Boosting with a
          decision tree-based classifier trained on features extracted from
          Convolutional Neural Networks (CNN). We Achieved an outstanding accuracy rate of 98%,
          demonstrating the efficacy of the innovative approach in disease detection within corn crops."
          skills="Python, Machine Learning, Keras, Pandas, Image Processing, Deep Learning, Model Ensembling."
          otherInformation="All details can be found on the link: https://www.scitepress.org/PublicationsDetail.aspx?ID=OJrqDKrvYAQ=&t=1"
          publicationLink={projectLinks.cropDiseaseLink}
        />
        <ProjectsCard
          title="FurniComforts - An online furniture store"
          des="This is an application developed with the aid of Python’s Flask(back end) and JavaScript ReactJS (front end)
          packed with the features like registration, sign-up, functional online furniture sales page, and sales statistics.
          I wrote individual table creation queries and including all primary, secondary, and foreign keys.
          Generate tables for every entity that is present and used in the application."
          otherInformation="I also developed a statistical model for the website’s sales analysis which includes
          running distinct queries for data extraction as per the computations required by the admin of the application"
          skills="Flask, React.js, MySQL, Python"
          githubLink={projectLinks.onlineFurnitureStore}
        />

      </div>
    </section>
  );
}

export default Projects