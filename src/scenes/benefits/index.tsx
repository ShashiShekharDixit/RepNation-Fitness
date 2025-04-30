import { HeaderText } from "@/shared/HText";
import { IBenefit, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitCard } from "./benefit-card";
import { ActionButton } from "@/shared/action-button.component";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const BenefitsArr: IBenefit[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "State of the Art Equipment",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "100% Satisfaction Guarantee",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Certified Personal Trainers",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        className=""
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* Header */}
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
          className="md:my-5 md:w-3/5 "
        >
          <HeaderText>{"More Than Just a Gym"}</HeaderText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aliquid quisquam nostrum enim officiis animi ratione veritatis,
            eligendi, delectus at odit, optio voluptatum praesentium quod
            corporis maiores corrupti modi maxime?
          </p>
        </motion.div>

        {/* Benefits */}

        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {BenefitsArr.map((benefit: IBenefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic and Description */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* Description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
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
                      x: 50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                >
                  <HeaderText>
                    {"MILLIONS OF HAPPY MEMBERS GETTING "}{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* description */}
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
            >
              <p className="my-5">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque aspernatur molestiae repudiandae temporibus
                consequuntur perspiciatis libero perferendis quod placeat
                assumenda. Dolores fugit sequi dolor incidunt, nemo aut sed
                distinctio perspiciatis?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                quo libero laborum ea, ipsam aspernatur dolorum explicabo
                recusandae fugiat porro id beatae illo culpa animi natus
                temporibus maxime expedita facere.
              </p>
            </motion.div>
            {/* button */}

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  {"Join Now"}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
