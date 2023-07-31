import React, { useRef } from "react";
import { useScroll , motion} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, work }) => {

  return (
    <li className="my-8 first:mt-0 last:mb-0 xs:mx-0 mx-auto flex flex-col items-center justify-between  ">
      <LiIcon className="xs:hidden" />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:'spring'}}
      
      
      
      
      >
        <h3 className="capitalize font-bold text-2xl mb-2 xs:text-4xl xs:flex xs:flex-col ">
          <span className="text-primary xs:text-3xl   ">{position}</span>&nbsp;
          <span className="">@{company}</span>
        </h3>
        <span className="capitalize font-medium  text-dark/75 mb-2 ">{time}</span>
        <p className="font-medium w-full mt-2   ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({target:ref,offset:["start end","center start"]})
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mt-32 w-full text-center mb-16 xs:text-4xl sm:text-4xl">
        Experience
      </h2>

      <div className="w-[75] mx-auto relative ">


        <motion.div style={{scaleY:scrollYProgress}}  ref={ref} className="xs:text-md absolute  xs:hidden -left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:w-[90%]">
          <Details
            position="Full Stack Web Developer"
            company="Freelancer"
            time="2017-Present"
            work="As a Full Stack Developer, I am skilled in front-end and back-end web development. I have extensive experience in developing and maintaining dynamic, responsive web applications using modern technologies and frameworks."
          />
          <Details
            position="MERN stack web developer"
            company="Freelancer"
            time="2020-Present"
            work="With my expertise in MongoDB, I can design, develop, and maintain efficient database schemas that can handle large amounts of data. Additionally, I use Express.js to create robust APIs that can communicate with the database and deliver data to the front end using RESTful APIs."
          />
          <Details
            position="Wordpress Developer"
            company="Freelancer"
            time="2019-Present"
            work="As a WordPress Developer, I specialize in developing custom WordPress themes and plugins to meet the unique needs of my clients. I have a deep understanding of WordPress and the surrounding technologies, including PHP, HTML, CSS, and JavaScript.
"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
