"use client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

const Pageone = ({ scrollAmount }: { scrollAmount: number }) => {
  return (
    <AnimatePresence>
      {scrollAmount >= 0 && scrollAmount < 950 ? (
        <motion.div
          style={{
            opacity: scrollAmount >= 950 ? 1 - scrollAmount * 0.001 : 1,
          }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          className="w-full absolute top-0 h-screen"
        >
          <div className="absolute  w-screen h-screen bg-slate-900 top-0 left-0 right-0">
            <div className="relative w-full h-full bg-transparent">
              <motion.div
                initial={{ height: 0, filter: "blur(8px)", width: 0 }}
                animate={{
                  height: "60rem",
                  width: "60rem",
                  filter: "blur(0px)",
                }}
                className="absolute transform -translate-x-1/2 left-1/2 -top-6 rounded-full bg-gradient-to-r from-transparent via-blue-900 to-transparent"
              />
            </div>

            <div className="bg-transparent flex justify-between min-h-10 w-full px-4 absolute z-10 bottom-5">
              <span className="bg-gradient-to-br font-bold from-orange-600 via-red-600 to-purple-600 text-transparent bg-clip-text gap-0 flex flex-col">
                <span>Introducing the Instagram</span>
                <span>powere AI - AVERION</span>
              </span>
              <span>
                <button className="px-4 rounded-full py-1 text-slate-200 text-[16px] border-[.8px] border-slate-200">
                  IMMERSIVE
                </button>
              </span>
            </div>
          </div>

          <div className="w-screen h-screen text-slate-200 flex relative justify-center items-center">
            <motion.span
              initial={{ y: 30, opacity: 0, filter: "blur(8px)", scale: 1.1 }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              style={{
                fontSize: `${scrollAmount > 300 ? scrollAmount * 0.03 : 10}rem`,
                filter: `blur(${scrollAmount >= 100 ? scrollAmount * 0 : 0}px)`,
              }}
              className="tracking-widest flex text-white"
            >
              {"Avion".split("").map((e) => {
                return (
                  <motion.span
                    animate={{
                      textShadow:
                        "0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)",
                    }}
                    transition={{
                      delay: 3,
                      duration: 0.3,
                    }}
                    className="ml-7"
                  >
                    {e}
                  </motion.span>
                );
              })}
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Pageone;
