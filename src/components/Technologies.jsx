import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "motion/react";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiTensorflow } from "react-icons/si";

const iconVariable = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

export default function Technologies() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-800 pb-24"
    >
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* html icon */}
        <motion.div
          variants={iconVariable(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* css icon */}
        <motion.div
          variants={iconVariable(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        {/* javascipt icon */}
        <motion.div
          variants={iconVariable(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        {/* react icon */}
        <motion.div
          variants={iconVariable(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* mongodb icon */}
        <motion.div
          variants={iconVariable(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* tailwind icon */}
        <motion.div
          variants={iconVariable(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>

        {/* nodejs icon */}
        <motion.div
          variants={iconVariable(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        {/*
        
        <motion.div
          variants={iconVariable(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariable(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-7xl text-red-500" />
        </motion.div> */}
      </div>
    </motion.div>
  );
}
