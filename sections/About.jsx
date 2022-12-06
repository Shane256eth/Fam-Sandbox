"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const About = () => (
  <section className={"${styles.paddings} relative z-10"}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col"}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("down", "tween", 2.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to the BananaFam headquarters. Where you can find out all the
        newest things happening withus, BananaBeatz, as well as merch store,
        DAO, minting NFTs, and more!
      </motion.p>
    </motion.div>
  </section>
);

export default About;
