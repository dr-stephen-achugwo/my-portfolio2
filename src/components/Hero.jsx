import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [role, setRole] = useState("Problem Solver");

  useEffect(() => {
    const roles = [
      "Frontend Developer",
      "Web Designer",
      "Software Engineer",
      "Problem Solver",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setRole(roles[index]);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-extrabold text-white text-6xl">
            👋 Hi, I'm{" "}
            <span className="font-extrabold text-[#915EFF] text-6xl">
              Namrah Akram
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            And I'm a{" "}
            <span className="font-extrabold text-4xl text-[#915EFF]">
              {role}
            </span>
          </p>
          <p
            className={`${styles.heroSubText} mt-4 text-white-100 text-justify`}
          >
            A Software Engineer shapes the future with logic and code, crafting
            efficient systems and applications that drive technological
            progress. Through problem-solving and innovative thinking, they
            create robust solutions that power the digital world and transform
            ideas into reality.
          </p>

          {/* Added margin for spacing between paragraph and email */}
          <a
            href="mailto:namrahakram102@gmail.com"
            className="mt-6 text-[#915EFF] text-lg font-bold"
          >
            <i className="fas fa-envelope mr-2 text-[#915EFF]"></i>
            namrahakram102@gmail.com
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-1 mt-8  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
