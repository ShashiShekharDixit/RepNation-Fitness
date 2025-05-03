import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import { HeaderText } from "@/shared/HText";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `w-full mb-5 rounded-lg bg-primary-500 px-5 py-3 placeholder-white`;
  const { trigger, register, formState: { errors } } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HeaderText>
          <p className="my-5">
            Ready to transform your body and boost your confidence? Get in touch with us today to start your fitness journey. Our team is here to support you every step of the way—whether you have questions about memberships, programs, or personal training.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/4c82c89889d978201e9d7d2ee30db996"
            >
              <input
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
                className={inputStyle}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 characters."}
                </p>
              )}
              <input
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={inputStyle}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email Address."}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
                className={inputStyle}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                </p>
              )}
              <button
                type={"submit"}
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-20 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact us page graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
