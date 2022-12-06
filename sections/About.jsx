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
        variants={fadeIn('down', 'tween', 2.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to the BananaFam headquarters... where you can find out all the
        newest things happening with The Fam, check out BananaBeatz, as well as
        the Merch, minting NFTs, paying with Peanutz and upcoming dynamic NFTs
        and DAO!
      </motion.p>
    </motion.div>
  </section>
);

export default About;
