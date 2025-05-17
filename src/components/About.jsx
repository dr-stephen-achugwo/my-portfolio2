import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>LET ME INTRODUCE MYSELF😊</p>
        <h3 className="text-6xl font-extrabold text-[#915EFF]">About Me</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
       As a final-year student in IT, I have developed strong expertise in front-end development and web design, specializing in creating dynamic and highly responsive user interfaces. My technical proficiency includes modern technologies such as React.js, Tailwind CSS, and the MERN stack, empowering me to build seamless and interactive web applications. I thrive on solving complex challenges with innovative, efficient approaches and continuously seek to improve user experiences through thoughtful design and clean code. Ultimately, my goal is to become a Software Engineer, pushing the boundaries of technology and design, and delivering solutions that are both visually compelling and functionally robust.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        Let’s work together to transform ideas into meaningful and innovative
        digital solutions.🚀
      </motion.p>

      {/* Education Section */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <h3 className="text-3xl font-extrabold text-[#915EFF]">Education:</h3>
        <p className="mt-2">
          <strong className="text-white">
            BSIT (Punjab University College of Information Technology) | DEC            2021 - JUNE 2025
          </strong>
        </p>
      </motion.div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
