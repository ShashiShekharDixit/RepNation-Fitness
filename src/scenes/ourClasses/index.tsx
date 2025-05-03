import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { HeaderText } from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build muscle, boost strength, and improve endurance with our expert-led weight training classes designed for all fitness levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Relax your mind and stretch your body with guided yoga sessions focused on flexibility, balance, and inner peace.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Target your core with high-intensity ab workouts that sculpt, strengthen, and tone your midsection effectively.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Take fitness outdoors with our fun, adventurous group classes that combine cardio, strength, and teamwork.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our general fitness classes to boost your energy, burn calories, and stay motivated with dynamic, full-body workouts.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Level up your performance with structured training sessions that focus on endurance, agility, and athletic conditioning.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.OurClasses);
        }}
      >
        <motion.div
          className="mx-auto w-5/6"
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
          <div className="md:w-3/5">
            <HeaderText>{"OUR CLASSES"}</HeaderText>
            <p className="py-5">
              Discover a variety of fitness classes tailored to your goals—whether you're looking to build strength, improve flexibility, or just have fun staying active. Our experienced trainers and motivating group environment will help you reach your next level of fitness.
            </p>
          </div>
        </motion.div>

        {/* Continuous scrolling animation */}
        <div className="mt-10 h-[353px] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex w-max animate-slide gap-8">
              {[...classes, ...classes].map((item: ClassType, index) => (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item?.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default OurClasses;
