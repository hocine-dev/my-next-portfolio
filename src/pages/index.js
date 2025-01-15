import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";
import { useState, useEffect } from "react";

export default function Home() {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.navigator.userAgentData && window.navigator.userAgentData.mobile) {
        setIsMobile(window.navigator.userAgentData.mobile);
      } else {
        setIsMobile(window.innerWidth <= 768);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Maintenance Mode</title>
        <meta
          name="description"
          content="The site is currently under maintenance. Please visit our main site for updates."
        />
        <meta name="google-site-verification" content="zwvBd7kHHWhKEObp6vwWEf3LhnqbmAYhPJq1U51B7Jo" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center justify-center text-dark w-full min-h-screen xs:min-h-[90vh] dark:text-light lg:mt-3">
        <Layout className="text-center">
          <AnimatedText
            // eslint-disable-next-line react/no-unescaped-entities
            text="We'll Be Back Soon!"
            className="xs:!text-3xl !text-center xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl lg:p-1"
          />

          <p className="my-4 text-base font-medium">
            The site is currently under maintenance. Please visit our main site by clicking the button below.
          </p>
          <div className="flex items-center justify-center mt-6">
            <Link
              href="https://hocinehamama.vercel.app/"
              target="_blank"
              className="hover:dark:border-light hover:dark:bg-dark hover:dark:text-light dark:bg-light dark:text-dark flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            >
              Go to Main Site
            </Link>
          </div>
        </Layout>
      </main>
      <BackToTop />
    </>
  );
}
