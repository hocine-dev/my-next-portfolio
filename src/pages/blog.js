import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/images/articles/wordpressthemes.jpg";
import img2 from "../../public/images/articles/pixelloading.jpg";
import img3 from "../../public/images/articles/ImageAI.jpg";
import img4 from "../../public/images/articles/img4.jpg";
import img5 from "../../public/images/articles/img5.webp";
import img6 from "../../public/images/articles/img6.webp";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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

      <Link href={link} target="blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <div className="flex justify-between">
        <span className="text-primary font-semibold">{time}</span>
        <span className="text-primary font-semibold">
          <Link href={link} target="blank">
            Read More...
          </Link>
        </span>
      </div>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handelMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX), y.set(-10);
  }
  function handelMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0), y.set(0);
  }

  return (
    <Link href={link} onMouseMove={handelMouse} onMouseLeave={handelMouseLeave} target="blank">
      <h2 className="capitalize text-x1 font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li initial={{y:200}}
    whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
    viewport={{once:true}}
    className="xs:flex xs:flex-col md:flex md:flex-col sm:flex sm:flex-col border-r-4 border-b-4 relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 pt-5 xs:w-full"><a href={link} target="blank">Read More</a></span>
    </motion.li>
  );
};

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Hocine Dev</title>
        <meta
          name="description"
          content="Explore My blog for expert insights and trends in web development. Discover cutting-edge techniques, best practices, and industry updates to stay ahead in the ever-evolving world of web development."
        ></meta>
      </Head>

      <TransitionEffect></TransitionEffect>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden lg:mt-5">
        <Layout className="pt-16">
          <AnimatedText text="words can change the world!" className="mb-16 xs:!text-2xl " />
          <ul className="grid grid-cols-2 gap-16 xs:flex xs:flex-col xs:min-w-[90vw] xs:-ms-[3rem]  md:flex md:flex-col md:min-w-[90vw] md:-ms-[3rem] sm:flex sm:flex-col sm:min-w-[90vw] sm:-ms-[3rem]">
            <FeaturedArticle
              img={img1}
              title="3 Best Multipurpose WordPress Themes for 2023"
              time="5 min read"
              link="https://abon858.blogspot.com/2023/07/3-best-multipurpose-wordpress-themes.html"
              summary="Discover the top 3 multipurpose WordPress themes that will help you build a responsive, user-friendly website with features you need for engaging visitors and improving conversions."
            />
            <FeaturedArticle
              img={img2}
              title="On-Scroll Pixelated Image Loading Effect"
              time="3 min read"
              link="https://abon858.blogspot.com/2023/07/on-scroll-pixelated-image-loading-effect.html"
              summary="A recreation of the on-scroll pixelated image loading effect seen on Felicity Ingram’s website."
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="xs:min-w-[90vw] xs:-ms-[3rem] sm:min-w-[90vw] sm:-ms-[3rem] md:min-w-[90vw] md:-ms-[3rem]">
            <Article
              title="Free AI Generated Images Vol 1"
              date="july 18;2023"
              link="https://abon858.blogspot.com/2023/07/free-ai-generated-images-vol-1.html"
              img={img3}
            />
            <Article
              title="Developer Productivity and The Definition of Developer Happiness"
              date="April 20;2023"
              link="https://abon858.blogspot.com/2023/07/developer-productivity-and-definition.html"
              img={img4}
            />
            <Article
              title="TypeScript for React Development"
              date="may 21;2023"
              link="https://abon858.blogspot.com/2023/07/typescript-for-react-development.html"
              img={img5}
            />
            <Article
              title="How to Five Reasons to use Django"
              date="June  12;2023"
              link="https://abon858.blogspot.com/2023/07/five-reasons-to-use-django.html"
              img={img6}
            />
          </ul>
        </Layout>
      </main>
      <BackToTop/>
    </>
  );
};

export default blog;
