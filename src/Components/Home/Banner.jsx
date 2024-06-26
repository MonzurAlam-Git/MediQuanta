import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero max-w-[412] lg:w-screen lg:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2S9VPtY/national-cancer-institute-Bx-Xg-TQEw1-M4-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col justify-center items-center px-4 lg:px-0">
          {/* text  */}
          <div className="">
            <h1 className="text-xl lg:text-4xl font-bold">
              <Fade delay={1e3} cascade damping={1e-1}>
                Data Analytics for Patient Care
              </Fade>
            </h1>
            <p className="m-5 text-center">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
              >
                Enhance patient outcomes with our advanced data analytics tools.
                We provide in-depth analysis and insights to help healthcare
                providers understand patient data, predict health trends, and
                tailor treatments to individual needs.
              </motion.p>
            </p>
            <button className="btn btn-accent">
              <Link to={"/dashboard/customize-product"}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
