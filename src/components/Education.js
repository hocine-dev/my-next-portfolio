

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

const Education = () => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({target:ref,offset:["start end","center start"]})
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mt-32 w-full text-center mb-16 xs:text-4xl sm:text-4xl">
        Education
      </h2>

      <div className="w-[75] mx-auto relative">


        <motion.div style={{scaleY:scrollYProgress}}  ref={ref} className=" absolute -left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
        

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:w-[90%] last:mb-5">
        <Details
            position="Bachelor's degree In Computer Science"
            company="UMMTO"
            time="2021-2024"
            work="Bachelor's degree In Computer Science from the university of Mouloud Mammeri Tizi-Ouzou"
          />
          <Details
            position="Master's degree In Civil Engineering"
            company="UMMTO"
            time="2013-2015"
            work="Master's degree In Civil Engineering from the university of Mouloud Mammeri Tizi-Ouzou"
          />
          <Details
            position="Bachelor's degree In Civil Engineering"
            company="UMMTO"
            time="2010-2013"
            work="Bachelor's degree In Civil Engineering from the university of Mouloud Mammeri Tizi-Ouzou"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
