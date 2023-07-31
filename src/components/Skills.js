import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
        
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute xs:p-2"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center xs:text-4xl xs:pb-5">
        Skills
      </h2>

      <div className="xs:hidden sm:hidden md:hidden w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight ">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
        bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-12vw" />
        <Skill name="HTML" x="-21vw" y="2vw" />
        <Skill name="JavaScript" x="21vw" y="2vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-22vw" y="-16vw" />
        <Skill name="Bootstrap" x="20vw" y="-12vw" />
        <Skill name="Wordpress" x="35vw" y="-5vw" />
        <Skill name="PHP" x="0vw" y="-20vw" />
        <Skill name="Tailwindcss" x="-30vw" y="18vw" />
        <Skill name="Laravel" x="18vw" y="18vw" />
      </div>
{/* for lg screen
 */} 
      <div className="hidden  xs:flex sm:hidden md:hidden lg:hidden w-full h-screen relative  items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
        bg-dark text-light p-4 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-35vw" y="-30vw" />
        <Skill name="HTML" x="35vw" y="2vw" />
        <Skill name="JavaScript" x="-30vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="80vw" />
        <Skill name="NextJS" x="25vw" y="40vw" />
        <Skill name="Bootstrap" x="30vw" y="-30vw" />
        <Skill name="Wordpress" x="-30vw" y="-60vw" />
        <Skill name="PHP" x="0vw" y="-85vw" />
        <Skill name="Tailwindcss" x="-25vw" y="40vw" />
        <Skill name="Laravel" x="25vw" y="-60vw" />
      </div>
{/* for sm screen
 */} 
      <div className="hidden  sm:flex xs:hidden md:hidden lg:hidden w-full h-screen relative  items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
        bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-35vw" y="-20vw" />
        <Skill name="HTML" x="37vw" y="2vw" />
        <Skill name="JavaScript" x="-37vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="63vw" />
        <Skill name="NextJS" x="30vw" y="40vw" />
        <Skill name="Bootstrap" x="35vw" y="-20vw" />
        <Skill name="Wordpress" x="-30vw" y="-45vw" />
        <Skill name="PHP" x="0vw" y="-63vw" />
        <Skill name="Tailwindcss" x="-30vw" y="40vw" />
        <Skill name="Laravel" x="25vw" y="-45vw" />
      </div>
{/* for md screen
 */}      <div className="hidden  md:flex xs:hidden sm:hidden  w-full h-screen relative  items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
        
        bg-dark text-light p-4 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-0vw" y="-11vw" />
        <Skill name="HTML" x="-30vw" y="2vw" />
        <Skill name="JavaScript" x="30vw" y="2vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="NextJS" x="-22vw" y="-16vw" />
        <Skill name="Bootstrap" x="17vw" y="-17vw" />
        <Skill name="WordPress" x="30vw" y="-7vw" />
        <Skill name="PHP" x="0vw" y="-20vw" />
        <Skill name="Tailwindcss" x="-20vw" y="18vw" />
        <Skill name="Laravel" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
