import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import avatar from "../../public/images/profile/avatar.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

const AnimatedNumbers = (value) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  const myValue = value.value;

  useEffect(() => {
    if (isInView) {
      motionValue.set(myValue);
    }
  }, [isInView, myValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= myValue) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, myValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>About Hocine Dev</title>
        <meta
          name="description"
          content="Je Suis Hocine Dev, un développeur Web Basé à Tizi Ouzou,Je Suis spécialisée dans la création de site Internet vitrine, de boutique en ligne (E-commerce), de publicité sur internet et conseils en marketing digital."
        ></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="flex w-full flex-col items-center justify-center lg:mt-5">
      <Layout className="pt-16 xs:p-0 xs:pt-16">
          <AnimatedText text="Know More About Me" className="mb-16 lg:!text-4xl  xs:!text-4xl" />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className=" xs:min-w-[100vw] col-span-3 flex flex-col items-start justify-start xs:col-span-5 sm:col-span-8 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 xs:ps-5 xs:w-full xs:text-center">
                Biography
              </h2>
              <p className="font-medium xs:px-5">
                My Name Is Hocine Dev , I&apos;m 32 years old, I Am A Full Stack
                Web Developer With Over 6 Years Of Experience In Web Development
                , With A Large Set Of Development Skills, I Can Help You To
                Create A Professional Website That Allows You To Get Your Place
                In The Digital World, Don&apos;t Hesitate To Contact Me At Any
                Time.
              </p>
            </div>
            <div className="md:max-w-[50vw] md:mx-auto xs:min-w-[80vw] xs:mx-[10%] xs:col-span-5 sm:col-span-8 md:col-span-8 col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                priority
                src={avatar}
                alt="Hocine Dev"
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </div>

            <div className=" md:col-span-8  xs:min-w-[100vw] col-span-2 sm:col-span-8 sm:items-center md:items-center flex flex-col items-end xs:!items-center justify-between xs:col-span-5  xl:col-span-8 xl:flex-row">
              <div className="flex flex-col items-end xs:!items-center sm:items-center md:items-center justify-center">
                <span className="inline-block text-7xl front-bold lg:text-6xl">
                  {<AnimatedNumbers value={50} />}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end xs:!items-center justify-center sm:items-center md:items-center">
                <span className="inline-block text-7xl front-bold lg:text-6xl">
                  {<AnimatedNumbers value={100} />}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end xs:!items-center justify-center sm:items-center md:items-center">
                <span className="inline-block text-7xl front-bold lg:text-6xl">
                  {<AnimatedNumbers value={6} />}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
       </Layout>
      </main>
      <BackToTop/>
    </>
  );
};

export default About;
