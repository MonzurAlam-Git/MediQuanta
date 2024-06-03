import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2S9VPtY/national-cancer-institute-Bx-Xg-TQEw1-M4-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              <Fade delay={1e3} cascade damping={1e-1}>
                Data Analytics for Patient Care
              </Fade>
            </h1>
            <p className="mb-5">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
              >
                Enhance patient outcomes with our advanced data analytics tools.
                We provide in-depth analysis and insights to help healthcare
                providers understand patient data, predict health trends, and
                tailor treatments to individual needs
              </motion.p>
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
