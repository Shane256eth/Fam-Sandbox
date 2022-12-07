'use client';

import { motion } from 'framer-motion';

import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="$styles.xPaddings py-20 relative"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="$styles.innerWidth mx-auto flex justify-between gap-8">
      <img
        src="/search.svg"
        alt="search"
        className="w-[44px] h-[44px] object-contain"
      />
      <h2 className="font-extrabold text-[34px] leading-[30px] text-white">
        BananaBeatz presents..
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[44px] h-[44px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
