import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDatabase, FaCloud, FaChartBar, FaBookReader, FaStar, FaChrome, FaMix, FaJava } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >

      <span className="text-5xl text-base font-semibold mb-2" >Technical Skills</span>
      <br/>
      <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Programming Languages"
          des="Java, Python, SQL, JavaScript"
          icon={<FaJava />}
        />
        <Card
          title="Web Technologies"
          des="Spring Boot (Java), ReactJS, AngularJS, RESTful, Django, Flask, Docker, JWT, GIT, CSS, TailWind"
          icon={<FaChrome />}
        />
        <Card
          title="Cloud"
          des="AWS S3, AWS EC2, AWS RDS, AWS Beanstalk, AWS Autoscaling, AWS Cloudwatch, Python Heroku, IBM Watson"
          icon={<FaCloud />}
        />
        <Card
          title="Databases"
          des="Oracle SQL, MySQL, MongoDB, SQLite"
          icon={<FaDatabase />}
        />
        <Card
          title="Machine Learning"
          des="Python, Jupyter, Tensorflow, NLP, Image Processing, Scikit-Learn, Deep Learning"
          icon={<FaChartBar />}
        />
        <Card
          title="Miscellaneous"
          des="Crystal Reports, Oracle Apex, NX Storybook, CI/CD, Docker"
          icon={<FaMix />}
        />
      </div>
    </section>
  );
}

export default Features