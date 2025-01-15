import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
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
  const [disableNavBar, setDisableNavBar] = useState(true); // New state for disabling the navbar

  const handelClick = () => {
    setIsOpen(!IsOpen);
  };

  const toggleNavBar = () => {
    setDisableNavBar(!disableNavBar);
  };

  if (disableNavBar) {
    return (
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleNavBar}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Enable Navbar
        </button>
      </div>
    );
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      {/* Button to disable the navbar */}
      <button
        onClick={toggleNavBar}
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        Disable Navbar
      </button>

      <div className="w-full flex justify-between items-center">
        <nav>
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/about" className="mr-4">
            About
          </a>
          <a href="/projects" className="mr-4">
            Projects
          </a>
          <a href="/blog" className="mr-4">
            Blog
          </a>
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
    </header>
  );
};

export default Navbar;
