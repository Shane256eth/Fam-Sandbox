'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <section className={'${styles.paddings} relative z-10'}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={'${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col'}
    >
      <TypingText title="| About the Fam" textStyles="text-center" />

      <motion.p
        variants={fadeIn('down', 'tween', 1.6, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-bold text-secondary-yellow">
          Welcome to <br></br> BananaFam HQ
        </span>
        <br></br>where you <br></br> can find out what's new <br></br>
        with the crew<br></br>
        <br></br>
        <span className="font-bold text-secondary-orange">
          Merch
          <br></br> Streaming <br></br> BananaBeatz <br></br>The NFT factory
          <br></br> The Peanutz Vault <br></br>
        </span>
        <br></br>..watch out for dynamic NFTs and the DAO!
      </motion.p>
    </motion.div>
  </section>
);

export default About;
