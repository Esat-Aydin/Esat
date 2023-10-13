import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, skills, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-purple-byzantium-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-0 px-2 min-h-[280px] w-full flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>

        <div className='mt-1 flex flex-wrap w-[180px] justify-center'>
          {skills.map((skill, index) => (
            <p 
              key={`${skill.name}`}
              className={`text-[12px] ${index % 2 === 0 ? "text-pink-300" : "text-blue-300"}`}>
                {skill}, &nbsp;
            </p>
          ))}
      </div>

      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I&apos;m a fullstack developer, with a passion for creating beautiful and functional user experiences.
        I have a keen interest in web and mobile development and I am always looking to learn new technologies.
        I am a hard-working and dedicated individual, who is always looking to learn and improve.
        I also have experience working in a scrum environment.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-40'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");