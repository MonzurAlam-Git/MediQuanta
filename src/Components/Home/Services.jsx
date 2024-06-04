import { motion } from "framer-motion";
import "./Services.css";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div>
      <h1 className=" mt-4 text-2xl text-center font-bold">
        <motion.h3
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
          className="text-3xl md:text-4xl font-semibold  xl:text-center opacity-70"
        >
          Why <span className="font-bold">M E D I Q U A N T A </span>
        </motion.h3>
      </h1>
      <div className="wrapper section-padding">
        <div className="flex flex-col gap-10 md:gap-20 md:text-xl">
          {/* PART 1 */}
          <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
            <div className="space-y-5 xl:col-span-3">
              {/* number part  */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="text-5xl md:text-5xl font-bold opacity-30"
                >
                  1
                </motion.p>
              </div>
              {/* title part  */}
              <div className="overflow-hidden">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                  className="text-3xl md:text-3xl font-semibold uppercase opacity-70"
                >
                  <Fade delay={1e3} cascade damping={1e-1}>
                    Data Analytics for Patient Care
                  </Fade>
                </motion.h3>
              </div>
              {/* paragraph part 1 */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
                >
                  Enhance patient outcomes with our advanced data analytics
                  tools. We provide in-depth analysis and insights to help
                  healthcare providers understand patient data, predict health
                  trends, and tailor treatments to individual needs
                </motion.p>
              </div>
            </div>
            {/* Image part 1  */}
            <div className="xl:col-span-2 w-full h-full overflow-hidden">
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="w-full h-full"
              >
                <img
                  src="https://i.ibb.co/DLdysvz/image.png"
                  alt="Black and White Bicolor Cat"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
          {/* PART 2 */}
          <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
            <div className="order-1 xl:order-1 xl:col-span-2 w-full h-full overflow-hidden">
              {/* Image part 2  */}
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="w-full h-full"
              >
                <img
                  src="https://i.ibb.co/51cDj15/image.png"
                  alt="Customer Ordering Product"
                  // width={900}
                  width="100%"
                  height={500}
                  className="w-full h-full"
                />
              </motion.div>
            </div>
            <div className="space-y-5 xl:col-span-3 order-1 xl:order-2">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="text-7xl md:text-5xl font-bold opacity-30 xl:text-right"
                >
                  2
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-semibold uppercase xl:text-right opacity-70"
                >
                  Predictive Analytics
                </motion.h3>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
                  className="xl:text-right"
                >
                  Leverage the power of predictive analytics to foresee and
                  mitigate potential health issues before they arise. Our
                  predictive models help in early detection of diseases,
                  reducing readmission rates, and improving overall patient care
                </motion.p>
              </div>
            </div>
          </div>
          {/* PART 3 */}
          <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
            <div className="space-y-5 xl:col-span-3">
              {/* number part  */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="text-7xl md:text-5xl font-bold "
                >
                  3{" "}
                </motion.p>
              </div>
              {/* title part  */}
              <div className="overflow-hidden">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                  className="text-3xl md:text-3xl font-semibold uppercase opacity-70"
                >
                  <Fade delay={1e3} cascade damping={1e-1}>
                    Custom Healthcare Dashboards
                  </Fade>
                </motion.h3>
              </div>
              {/* paragraph part 1 */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
                >
                  Get a comprehensive view of your healthcare data with our
                  custom dashboards. Designed to meet the specific needs of your
                  practice, these dashboards provide real-time insights, key
                  performance indicators, and actionable data at your
                  fingertips.{" "}
                </motion.p>
              </div>
            </div>

            <div className="xl:col-span-2 w-full h-full overflow-hidden">
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="w-full h-full"
              >
                <img
                  src="https://i.ibb.co/SnPVpb7/image.png"
                  alt="Black and White Bicolor Cat"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
