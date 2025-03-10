"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";

const CurvedText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const text = "michee";
  return (
    <div className="h-screen [perspective:1000] w-screen">
      <div
        ref={ref}
        className="h-full flex justify-center  bg-gray-950 w-screen"
      >
        <motion.div
          animate={{
            y: ["10vh", "80vh", "50vh", "80vh", "60vh", "80vh", "78vh", "80vh"],
            x: ["1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem", "8rem"],
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
            ease: "easeInOut",
          }}
          className="bg-blue-300 absolute w-[3rem] h-[3rem] rounded-full"
        ></motion.div>
      </div>
      <motion.div
        style={{
          rotateX: 80,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-1/2 w-full hiden bg-slate-500"
      ></motion.div>
    </div>
  );
};

export default CurvedText;
