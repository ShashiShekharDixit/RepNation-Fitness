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
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      {/* Image and Main Header */}

      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView={"visible"}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            {/* put image into absolute position in tailwind */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]  md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              placeat veritatis provident nisi doloribus nemo eaque soluta sunt!
              Voluptas sint praesentium expedita veritatis voluptate recusandae
              fuga, culpa similique porro aliquam!
            </p>
          </motion.div>
          {/* action */}

          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="font-font text-sm text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMDScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="sponsor-red-bull" src={SponsorRedBull} />
              <img alt="sponsor-forbes" src={SponsorForbes} />
              <img alt="sponsor-fortune" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
