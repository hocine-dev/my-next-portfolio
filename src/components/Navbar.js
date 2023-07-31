import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import navbar from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import githubIcon from "../../public/images/svgs/logo-github.svg";
import linkedinIcon from "../../public/images/svgs/linkedin.svg";
import fiverrIcon from "../../public/images/svgs/fiverr.svg";
import whatsappIcon from "../../public/images/svgs/whatsapp.svg";
import { motion } from "framer-motion";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";

const Navbar = () => {
  const router = useRouter();

  const [Mode, setMode] = useThemeSwitcher();

  const [IsOpen, setIsOpen] = useState(false);

  const handelClick = () => {
    setIsOpen(!IsOpen);
  };

  const CustomMobileLink = ( {href, title, className="",toggle}) => { 
    const router = useRouter();
    
    const handleClick = () => {
      toggle();
      router.push(href);
    }
    
    return(
    <button onClick={handleClick}  href={href} className={`${className} relative `} >
    
    <span className={`h-[0px] inline-block bg-dark
     left-0 -bottom-0.5
    group-hover:w-full transition- [width] ease duration-300 ${router.asPath === href? "w-full": "w-0"}
    dark:bg-light`}>{title}
    </span>
      </button>)}

  return (
    <header className="
    xs:p-0 xs:pt-5
    w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      <button
        className=" flex-col justify-center items-center hidden  xs:hidden sm:hidden"
        onClick={handelClick}
      >
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease rounded-sm w-6  ${
            IsOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease rounded-sm w-6 my-0.5 ${
            IsOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease rounded-sm w-6  ${
            IsOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

{/* mobile header */}
      <header className="hidden md:z-40 xs:flex sm:flex md:flex md:min-w-[100vw] md:-ms-[8rem] lg:flex lg:min-w-[100vw] lg:-ms-[8rem] justify-between w-full sm:min-w-[100vw] sm:-ms-[8rem] xs:ms-0 ">
       <div className="ms-5">
      <button
        className=" flex-col justify-center items-center flex"
        onClick={handelClick}
      >
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease rounded-sm w-6  ${
            IsOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease rounded-sm w-6 my-0.5 ${
            IsOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 transition-all duration-300 ease rounded-sm w-6  ${
            IsOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      </div>
      <div className="-mt-5 me-5 z-50">
        <Logo />
      </div> 

      </header>

{/* end mobile header */}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <Link
            href={"/"}
            className={
              router.asPath === "/"
                ? ` mr-4 ${navbar.border_show}`
                : ` mr-4 ${navbar.border}`
            }
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={
              router.asPath === "/about"
                ? ` m-4 ${navbar.border_show}`
                : ` m-4 ${navbar.border}`
            }
          >
            About
          </Link>
          <Link
            href={"/projects"}
            className={
              router.asPath === "/projects"
                ? ` m-4 ${navbar.border_show}`
                : ` m-4 ${navbar.border}`
            }
          >
            Projects
          </Link>
          <Link
            href={"/blog"}
            className={
              router.asPath === "/blog"
                ? ` ml-4 ${navbar.border_show}`
                : ` ml-4 ${navbar.border}`
            }
          >
            Blog
          </Link>
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/hocine-dev"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-5"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={githubIcon} alt="github" style={{ scale: "2.5" }} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hocinedev/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-5"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={linkedinIcon} alt="linkedin" style={{ scale: "2.5" }} />
          </motion.a>
          <motion.a
            href="https://bit.ly/46G9YNw"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-5"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={fiverrIcon} alt="fiverr" style={{ scale: "2.5" }} />
          </motion.a>
          <motion.a
            href="https://web.whatsapp.com/send?phone=16145059642"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-3"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={whatsappIcon} alt="whatsapp" style={{ scale: "2.5" }} />
          </motion.a>
        </nav>
      </div>

{/* mobile navigation
 */}
     {IsOpen?
     
     <div className="  min-w-[100vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2 z-30 bg-light/80 rounded-lg backdrop-blur-md py-32 mt-12">
        <nav className="flex items-center justify-center flex-col">
          <CustomMobileLink
            href={"/"}
            className={
              router.asPath === "/"
                ? ` my-4  ${navbar.border_show}`
                : ` my-4  ${navbar.border}`
            }
            title={"Home"}
            toggle={handelClick}
          />
            
          
          <CustomMobileLink
            href={"/about"}
            className={
              router.asPath === "/about"
                ? ` my-2 ${navbar.border_show}`
                : ` my-2 ${navbar.border}`
            }
            title={"About"}
            toggle={handelClick}
          />
            
          
          <CustomMobileLink
            href={"/projects"}
            className={
              router.asPath === "/projects"
                ? ` my-2 ${navbar.border_show}`
                : ` my-2 ${navbar.border}`
            }
            title={"Projects"}
            toggle={handelClick}
            />
          <CustomMobileLink
            href={"/blog"}
            className={
              router.asPath === "/blog"
                ? ` my-2 ${navbar.border_show}`
                : ` my-2 ${navbar.border} mb-5`
            }
            title={"Blog"}
            toggle={handelClick}
            />
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-5">
          <motion.a
            href="https://github.com/hocine-dev"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-5"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={githubIcon} alt="github" style={{ scale: "2.5" }} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hocinedev/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-5"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={linkedinIcon} alt="linkedin" style={{ scale: "2.5" }} />
          </motion.a>
          <motion.a
            href="https://bit.ly/46G9YNw"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-5"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={fiverrIcon} alt="fiverr" style={{ scale: "2.5" }} />
          </motion.a>
          <motion.a
            href="https://wa.me/16145059642"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 m-3"
            whileTap={{ scale: 0.9 }}
          >
            <Image src={whatsappIcon} alt="whatsapp" style={{ scale: "2.5" }} />
          </motion.a>
        </nav>
      </div>:null}

      <div className="absolute left-[50%] top-2 translate-x-[50%] z-50  lg:hidden">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
