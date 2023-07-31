import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import p1 from "../../public/images/projects/p1.PNG";
import p2 from "../../public/images/projects/p2.PNG";
import p3 from "../../public/images/projects/p3.PNG";
import p4 from "../../public/images/projects/p4.PNG";
import p5 from "../../public/images/projects/p5.PNG";
import p6 from "../../public/images/projects/p6.PNG";
import p7 from "../../public/images/projects/p7.PNG";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, tech }) => {
  return (
    <article className="sm:flex-col md:flex-col sm:last:pb-3 sm:p-1 xs:flex-col xs:last:pb-3 xs:p-1 relative p-12 w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg xs:w-[90%] sm:w-[90%] md:w-[90%]"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 xs:w-full sm:w-full md:w-full">
        <span className="text-primary font-medium text-xl sm:w-full sm:flex sm:justify-center xs:w-full xs:flex xs:justify-center md:w-full md:flex md:justify-center p-2">
          <span>{type}</span>
        </span>
        <Link href={link} target="blank">
          <h2
            className="
          
          w-full my-2 text-left text-4xl font-bold hover:underline underline-offset-2"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <span className="font-bold xs:flex xs:flex-col sm:flex sm:flex-col">
          <span>Used Skills:</span>&nbsp;
          <span className="text-primary font-bold break-all">{tech}</span>
        </span>
        <br></br>
        <span className="xs:flex xs:justify-center sm:flex sm:justify-center md:flex md:justify-center w-full">
          <Link
            href={link}
            target="blank"
            className="ml-4 bg-dark rounded text-light p-2 px-6 text-lg font-semibold"
          >
            Project Link
          </Link>
        </span>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, tech }) => {
  return (
    <article
      className="w-full  flex-col flex items-center justify-center rounded-2xl border-solid border-dark border
  bg-light relative mt-4 "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto p-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between p-5 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="blank">
          <h2 className="w-full my-2 text-left text-4xl font-bold hover:underline underline-offset-2">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <span className="font-bold">
          Used Skills:&nbsp;
          <span className="text-primary font-bold ">{tech}</span>
        </span>
        <br></br>
        <Link
          href={link}
          target="blank"
          className="ml-4 bg-dark rounded text-light p-2 px-6 text-lg font-semibold"
        >
          Project Link
        </Link>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Explore my impressive Projects</title>
        <meta
          name="description"
          content="Explore my impressive web developer portfolio  expert in HTML, CSS, JS, and responsive design. Hire me for your next project"
        ></meta>
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="w-full mb-16 flex flex-col items-center justify-center lg:mt-5">
        <Layout className="pt-16">
          <AnimatedText
            text="Some Of My Projects"
            className="mb-16 xs:!text-3xl"
          />

          <div className="grid grid-cols-12 gab-24 gap-y-16">
            <div className="col-span-12 xs:min-w-[90vw] sm:min-w-[90vw] xs:-ms-[3rem] sm:-ms-[3rem] md:min-w-[90vw] md:-ms-[3rem]">
              <FeaturedProject
                title="Healthy Food Store"
                summary=" a healthy food website using cutting-edge technologies. The website is built with a responsive design, incorporating HTML5, CSS3, and JavaScript for a seamless user experience."
                link="https://myorganic-food.netlify.app/"
                img={p4}
                type="Web Site"
                tech="Html,Css,Javascript,Bootstrap"
              />
            </div>
            <div className="col-span-12 xs:min-w-[90vw] xs:-ms-[3rem] md:min-w-[90vw] md:-ms-[3rem] hidden xs:flex sm:flex sm:min-w-[90vw] sm:-ms-[3rem] md:flex ">
              <FeaturedProject
                title="Food Additives Company Website"
                summary="Using new technologies like nextjs, tailwindcss, I created a seamless user experience. With responsive design and optimized performance, the site adapts beautifully to any device."
                link="https://grengou.com/"
                img={p3}
                type="Web Site"
                tech="nextjs,tailwindcss"
              />
            </div>
            <div className="col-span-12 xs:min-w-[90vw] xs:-ms-[3rem] hidden xs:flex sm:flex sm:min-w-[90vw] sm:-ms-[3rem] md:flex md:min-w-[90vw] md:-ms-[3rem]">
              <FeaturedProject
                title="Rayan Cano Portfolio Website"
                summary="A Very Nice One-Page Website That Describes A Web Developer Profile, The Web Site Has A Very Nice Design Is Responsive On All Devices And Has All The Information About The Owner And A Contact Form."
                link="https://rayancano.netlify.app/"
                img={p2}
                type="Web Site"
                tech="Html,Css,Javascript,Bootstrap"
              />
            </div>
            <div className="col-span-6 me-10 xs:hidden sm:hidden md:hidden ">
              <Project
                title="Rayan Cano Portfolio Website"
                summary="A Very Nice One-Page Website That Describes A Web Developer Profile, The Web Site Has A Very Nice Design Is Responsive On All Devices And Has All The Information About The Owner And A Contact Form."
                link="https://rayancano.netlify.app/"
                img={p2}
                type="Web Site"
                tech="Html,Css,Javascript,Bootstrap"
              />
            </div>
            <div className="col-span-6 ms-10 xs:hidden sm:hidden md:hidden ">
              <Project
                title=" Food Additives Company Website"
                summary="Using new technologies like nextjs, tailwindcss, I created a seamless user experience. With responsive design and optimized performance, the site adapts beautifully to any device."
                link="https://grengou.com/"
                img={p3}
                type="Web Site"
                tech="nextjs,tailwindcss"
              />
            </div>
            <div className="col-span-12 xs:min-w-[90vw] xs:-ms-[3rem] sm:min-w-[90vw] sm:-ms-[3rem] md:min-w-[90vw] md:-ms-[3rem]">
              <FeaturedProject
                title="Dz-Dev Company Website"
                summary="A Very Nice One-Page Website That Describes A Web Development Company, The Web Site Has A Very Nice Design And Is Responsive On All Devices, And Contained All Necessity Information About The Company."
                link="https://dz-dev.netlify.app/"
                img={p1}
                type="Web Site"
                tech="Html,Css,Javascript,Bootstrap"
              />
            </div>
            <div className="col-span-6 me-10 xs:hidden sm:hidden md:hidden ">
              <Project
                title="Password Generator App"
                summary="A Single-Page Application That Let Users Generate A Custom Password With The Desired Length And Choose To Include Uppercase Lowercase Numbers And Symbols, The App Is Very Fast And Useful."
                link="https://password-generator-byhocinedev.netlify.app/"
                img={p5}
                type="Web App"
                tech="Html,Css,Javascript"
              />
            </div>
            <div className="col-span-6 ms-10 xs:hidden sm:hidden md:hidden ">
              <Project
                title="Cv Generator App"
                summary="This Website Is A Spa That Let Users Generate A Nice Cv Online Just By Entering The Necessary Information,The User Has Also The Ability To Download The Generated Cv In A Pdf Format, And The Website Is Completely Responsive To All Devices."
                link="https://cvgeneratorbyhocinedev.netlify.app/"
                img={p6}
                type="Web App"
                tech="Html,Css,Javascript"
              />
            </div>
            <div className="col-span-12 xs:min-w-[90vw] xs:-ms-[3rem] sm:min-w-[90vw] sm:-ms-[3rem] md:min-w-[90vw] md:-ms-[3rem]">
              <FeaturedProject
                title="React Travel App"
                summary="A Nice Website For A Travel Agency, That Allows Users To See Available Destination And Make A Booking, The Web Site Is Very Clean And Responsive On All Devices."
                link="https://hocinedev-travelapp.netlify.app/"
                img={p7}
                type="Web Site"
                tech="Html,Css,Javascript,React"
              />
            </div>
          </div>
        </Layout>
      </main>
      <BackToTop/>
    </>
  );
};

export default projects;
