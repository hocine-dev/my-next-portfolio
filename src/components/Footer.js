import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import heartIcon from "../../public/images/Footer/red-heart-icon.svg";
import NextIcon from "../../public/images/Footer/next.svg";
import tailwindIcon from "../../public/images/Footer/tailwindcss.svg";
import Image from "next/image";
import HomeStyle from "../styles/Home.module.css"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg ">
      <Layout className="py-8 flex items-center justify-between lg:flex lg:flex-col xs:p-1">
        <span className="flex xs:text-sm xs:min-w-[100vw] xs:mt-5 xs:justify-center">
          © 2023 Made With&nbsp;
          <Image src={heartIcon} alt="heartIcon" className={`w-5 ${HomeStyle.rotate}`}></Image>&nbsp;
          By&nbsp;
          <Link
            style={{ color: "#0a66c2" }}
            href="https://bit.ly/46G9YNw"
            target="blank"
          >
            Hocine Dev
          </Link>
        </span>
        <span className="flex items-center xs:text-sm xs:min-w-[100vw] xs:flex-col xs:pt-5">
          Build with &nbsp;
          <Image src={NextIcon} alt="nextjs icon" className="w-20 xs:pt-5"></Image>
          &nbsp;&
          <Image
            src={tailwindIcon}
            alt="tailwindcss Icon"
            className="w-25 "
          ></Image>
          &nbsp;
        </span>
        <Link  href="https://bit.ly/44m5euU" target="blank" className={`xs:text-sm xs:min-w-[100vw] text-center xs:mb-5 ${HomeStyle.linkHover}` }>
        &#8594;&nbsp;Create your Portfolio Now&nbsp;&#8592;
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
