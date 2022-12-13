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
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.p
        variants={fadeIn('down', 'tween', 0.1, 0.1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        whileHover={{
          scale: [1.8, 5.5, 2.5],
          rotate: [0, 10, -10, 10, 0],
        }}
      >
        <span className="font-bold text-secondary-yellow">
          Welcome to <br></br> BananaFam HQ
        </span>{' '}
      </motion.p>
      <br></br>where you <br></br> can find out what's new <br></br>
      with the crew<br></br>
      <br></br>
      <motion.p
        variants={fadeIn('down', 'tween', 0.6, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        whileHover={{
          scale: [1, 3.5, 1.4],
          rotate: [0, 10, -10, 10, 0],
        }}
      >
        <span className="font-bold text-secondary-orange">
          Merch
          <br></br> Streaming <br></br> BananaBeatz <br></br>The NFT factory
          <br></br> The Peanutz Vault <br></br>
        </span>
      </motion.p>
      <br></br>..watch out for <b>Dynamic NFTs</b>
      <br></br>and <b>The DAO!</b>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.2,
            opacity: 0,
          },
          visible: {
            scale: 0.2,
            opacity: 0.2,
          },
        }}
        whileHover={{
          scale: [0.5, 1, 0.5],
          rotate: [0, 10, -10, 10, 0],
          opacity: 1,
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)',
          ],
        }}
      >
        <img
          src="/bananas.svg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
