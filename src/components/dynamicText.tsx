"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";

const DynamicText = () => {
  const word = "Michael Israel Michael";
  const wordArr = word.split(" ");
  /* const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
  }, [word]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, 3000);
  }, [isAnimating, 3000, startAnimation]);
 */
  return (
    <div className="text-3xl z-10 inline-block relative text-left text-black">
      {wordArr.map((e, idx) => {
        return (
          <motion.li
            initial={{ opacity: 0, filter: `blur(8px)` }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: idx * 0.3,
              ease: "easeInOut",
              duration: 0.5,
            }}
            key={idx}
            className="inline-block mr-2 whitespace-nowrap"
          >
            {e.split("").map((alph, idx2) => {
              return (
                <motion.span
                  initial={{ opacity: 0, filter: `blur(8px)` }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    delay: idx * 0.3 + idx2 * 0.05,
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  key={idx2}
                >
                  {alph}
                </motion.span>
              );
            })}
          </motion.li>
        );
      })}
    </div>
  );
};

export default DynamicText;
