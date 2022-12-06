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
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-yellow"
      >
        Welcome to the BananaFam headquarters... <br></br>where you can find out
        all the newest things happening with The Fam,<br></br> check out...
        <br></br>
        BananaBeatz<br></br> The Merch <br></br> Streams <br></br>The NFT mint{' '}
        <br></br> The Peanutz Vault <br></br>as well as upcoming dynamic NFTs
        and the DAO!
      </motion.p>
    </motion.div>
  </section>
);

export default About;
