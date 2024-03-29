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

        <ProjectsCard
            title="CatchIT - One stop shop for everything Fishermen!"
            des="CatchIT is the all-in-one app designed for the passionate fisherman. Built with React and Flask, it offers a streamlined experience for those looking to enhance their fishing trips."
            otherInformation="
                <b style='text-decoration: underline'>Weather and Location Intelligence</b>: Get real-time weather updates and discover the best fishing spots with ease, ensuring you're always at the right place at the right time.<br>
                <b style='text-decoration: underline'>Social Fishing </b>: Form fishing groups, plan outings, and connect with the community. Share experiences and tips to make every fishing adventure better.<br>
                <b style='text-decoration: underline'>Competitive Leaderboard</b>: Boast your biggest catches on the leaderboard, compare with peers, and strive for the top spot with every catch.<br><br>
                <b style='text-decoration: underline'>CatchIT</b>: Your digital fishing guide, bringing technology and tradition together for the ultimate fishing experience."
            skills="Flask, React.js, Redis, Python, JavaScript"
            githubLink={projectLinks.catchIt}
        />

        <ProjectsCard
            title="Predict Future Sales"
            des="Forecasts are about the future. It’s hard to overstate how important it is for a company to produce an accurate sales forecast. Privately held companies gain confidence in their business when leaders can trust forecasts. For publicly traded companies, accurate forecasts confer credibility in the market."
            otherInformation="The Challenge: In this competition, I had to work with a challenging time-series dataset consisting of daily sales data, kindly provided by one of the largest Russian software firms - 1C Company.
              <br><br>
              I predicted total sales for every product and store in the next month.
              <br>
              As part of this project, I was able to achieve a 1.0788 Accuracy Score using LightGBM Regressor on Test Data Set. I identified that ML algorithms work better when we have more relevant features in the Data Set"
            skills="Machine Learning, Data Analysis, Data Visualization , Python"
            kaggleLink={projectLinks.predictSales}
        />

        <ProjectsCard
            title="Predict Student Performance from Game Play"
            des="Our team embarked on a fascinating journey as we delved into the world of educational technology, armed with Python, to participate in a competition with a compelling mission. The objective was to predict student performance in real-time during game-based learning sessions using one of the largest open datasets of game logs. Our work held the promise of pushing the boundaries of knowledge-tracing methods in the realm of game-based learning, ultimately contributing to the creation of more effective educational experiences for students. Game-based learning, with its engaging and interactive approach, has been gaining traction in educational settings. "
            otherInformation="However, we recognized the scarcity of open datasets to apply data science and learning analytics to enhance this educational approach. Our Python-powered efforts aimed to bridge this gap by leveraging knowledge tracing principles, which have seen success in online learning environments but are relatively unexplored in educational games."
            skills="Machine Learning, Data Analysis, Data Visualization , Python, Time Series Analysis"
            kaggleLink={projectLinks.gameplayProject}
        />

      </div>
    </section>
  );
}

export default Projects