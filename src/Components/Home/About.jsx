import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        MediQuanta: Your Data-Driven Healthcare Companion
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Welcome to MediQuanta, your go-to platform for taking control of your
        health journey through data-driven insights and personalized care. Our
        mission is to empower individuals to make informed healthcare decisions
        using cutting-edge technology and comprehensive data analysis.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
        Our Vision
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        At MediQuanta, we believe that everyone deserves access to high-quality
        healthcare tailored to their unique needs. We aim to revolutionize the
        healthcare industry by leveraging the power of data to provide
        personalized, effective, and convenient healthcare solutions.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
        Features
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li className="mb-2">
          <strong>Customized Health Plans:</strong> Craft a health plan tailored
          to your specific needs and preferences. Our platform allows you to
          select the services you require, ensuring a personalized healthcare
          experience that fits your lifestyle and health goals.
        </li>
        <li className="mb-2">
          <strong>Data-Driven Cures:</strong> Utilize our advanced data analysis
          capabilities to discover the most effective treatment options for your
          unique health profile. MediQuanta recommends therapies based on a
          comprehensive analysis of your health data, helping you achieve the
          best possible outcomes.
        </li>
        <li className="mb-2">
          <strong>Telehealth Services:</strong> Access convenient and secure
          consultations with healthcare professionals from the comfort of your
          home. Our telehealth services provide you with the flexibility to
          consult with doctors, specialists, and other healthcare providers
          without the need for in-person visits.
        </li>
        <li className="mb-2">
          <strong>Visual Health Insights:</strong> Gain valuable insights into
          your well-being through our customizable dashboard. Track key health
          metrics, visualize trends over time, and make informed decisions about
          your health with easy-to-understand visual data representations.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
        Live Link
      </h2>
      <p className="text-lg text-gray-700 mb-4">Experience MediQuanta live:</p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li className="mb-2">
          <strong>Frontend Deployment:</strong>{" "}
          <a
            href="https://medi-quanta.vercel.app/"
            className="text-blue-500 hover:underline"
          >
            https://medi-quanta.vercel.app/
          </a>
        </li>
        <li className="mb-2">
          <strong>Backend Deployment:</strong>{" "}
          <a
            href="https://mediquanta-server-1.onrender.com/"
            className="text-blue-500 hover:underline"
          >
            https://mediquanta-server-1.onrender.com/
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
        Technology Stack
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li className="mb-2">
          <strong>Frontend:</strong>{" "}
          <a
            href="https://react.dev/"
            className="text-blue-500 hover:underline"
          >
            React.js
          </a>
        </li>
        <li className="mb-2">
          <strong>Backend:</strong>{" "}
          <a
            href="https://expressjs.com/"
            className="text-blue-500 hover:underline"
          >
            Express.js
          </a>
        </li>
        <li className="mb-2">
          <strong>Database:</strong>{" "}
          <a
            href="https://www.mongodb.com/"
            className="text-blue-500 hover:underline"
          >
            MongoDB
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
        About the Developer
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        I am Manzurul Alam, a passionate front-end developer with a BSC Degree
        in Computer Science and Engineering from International Islamic
        University, completed in 2020. Since then, I have worked on various
        front-end projects such as Doctor Portal, Tech-Tronix, and Bong-Song.
        These projects primarily use the MERN stack, along with one Vanilla
        JavaScript project where I built web applications to serve specific
        purposes. I also have experience in converting Figma designs to
        functional web applications.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        As a front-end developer, I am fascinated by how designs collaborate
        with web interactivity to provide a blissful user experience. With my
        skills and experience, I am confident in my ability to support in
        front-end development. I am constantly upgrading my projects with new
        features, and I invite you to review my portfolio for a better
        understanding of my work.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Portfolio:</strong>{" "}
        <a
          href="https://manzuralam.vercel.app/"
          className="text-blue-500 font-extrabold hover:underline"
        >
          https://manzuralam.vercel.app/
        </a>
      </p>
    </div>
  );
};

export default About;
