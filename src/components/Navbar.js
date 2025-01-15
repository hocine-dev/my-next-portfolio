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
       
        
      </div>
    </header>
  );
};

export default Navbar;
