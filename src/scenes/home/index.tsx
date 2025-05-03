import { SelectedPage } from "@/shared/types";
import React from "react";
import useMediaQuery from "@/hooks/use-media-query";
import { ActionButton } from "@/shared/action-button.component";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMDScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-md leading-relaxed text-gray-300">
              Welcome to <span className="text-primary-500 font-semibold">RepNation</span> — your ultimate fitness destination. Unleash your inner athlete with expert workout routines,
              personalized plans, and a community that keeps you going. It's not just a gym. It's a movement.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-10 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="font-semibold text-sm text-primary-500 underline hover:text-secondary-500 transition duration-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-page-graphic" src={HomePageGraphic} className="rounded-xl shadow-lg max-w-full h-auto" />
        </div>
      </motion.div>

      {/* Sponsors Section */}
      {isAboveMDScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="sponsor-red-bull" src={SponsorRedBull} className="h-10 grayscale hover:grayscale-0 transition duration-300" />
              <img alt="sponsor-forbes" src={SponsorForbes} className="h-10 grayscale hover:grayscale-0 transition duration-300" />
              <img alt="sponsor-fortune" src={SponsorFortune} className="h-10 grayscale hover:grayscale-0 transition duration-300" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
