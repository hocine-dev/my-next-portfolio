import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import mainImg from "../../public/images/home/mainimg.jpg";
import circularImg from "../../public/images/home/circular.png";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HomeStyle from "../styles/Home.module.css";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";
import { useState,useEffect } from "react";


export default function Home() {
  const [IsMobile,setIsMobile] = useState(false);

useEffect(()=>{(typeof window !== 'undefined') ?setIsMobile(window.navigator.userAgentData
  .mobile):null},[])
  return (
    <>
      <Head>
        <title>Hocine Dev | Full Stack Web Developer</title>
        <meta
          name="description"
          content="My Name Is Hocine Dev, I Am A Full Stack Web Developer With 5 Years Of Experience, With A Large Set Of Development Skills, I Can help you to Create Professional website"
        />
            <meta name="google-site-verification" content="zwvBd7kHHWhKEObp6vwWEf3LhnqbmAYhPJq1U51B7Jo" />
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="flex items-center text-dark w-full min-h-screen xs:min-h-[90vh] dark:text-light lg:mt-3">
        <Layout className={"pt-0 md:pt-16 sm:mt-8 xs:px-16 xs:py-0 "}>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div style={{ width: "48%" }} className="md:!w-full xs:!w-[90vw]">
              <Image
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src={mainImg}
                alt="Hocine Dev"
                className="w-full h-auto lg:hidden md:!inline-block md:w-full md:mb-10 md:-mt-10"
                style={{ borderRadius: "25%" }}
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:min-w-[100vw] lg:text-center">
              <AnimatedText
                text="Hello,My Name Is Hocine Dev"
                className=" xs:!text-3xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl lg:p-1"
              />

              <p className="my-4 text-base font-medium !text-left xs:px-3">
                I Am A Full Stack Web Developer<br></br>I Am Working As A
                Freelancer<br></br>
                Don&apos;t Hesitate To Contact Me If You Need Any Help.
              </p>
              <div className="flex items-center  mt-2 w-full justify-evenly  lg:self-center xs:mt-5">
                <Link
                  href="/Hocine.pdf"
                  target="blank"
                  download={true}
                  className={`xs:!text-sm xs:px-1 hover:dark:border-light hover:dark:bg-dark hover:dark:text-light dark:bg-light dark:text-dark flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark`}
                >
                  My Resume
                  <span style={{ fontSize: 30, paddingLeft: 5 }}>&#8595;</span>
                </Link>
                <Link
                  href={IsMobile?"https://wa.me/16145059642":"https://web.whatsapp.com/send?phone=16145059642"}
                  target="blank"
                  className={`xs:!text-sm xs:px-1 hover:dark:border-light hover:dark:bg-dark hover:dark:text-light flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark`}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div
          className={`  left-4 bottom-4 flex items-center justify-center overflow-hidden ${HomeStyle.spin}`}
        >
          <div className="w-48 h-auto flex items-center justify-center relative">
            <Image
              src={circularImg}
              alt="circular Img"
              className="animate-spin-slow"
            ></Image>

            <Link
              href="https://web.whatsapp.com/send?phone=16145059642"
              target="blank"
              className={`hover:dark:border-light hover:dark:bg-dark hover:dark:text-light dark:bg-light dark:text-dark flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold    hover:bg-light hover:text-dark  hover:border-dark hover:border-solid hover:border-2
              `}
            >
              Hire Me
            </Link>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 inline-block w-24 scale-150 lg:hidden">
          <Image src={LightBulb} alt="light bulb "></Image>
        </div>
      </main>
     <BackToTop/>
    </>
  );
}
