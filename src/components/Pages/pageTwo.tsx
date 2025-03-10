"use client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import ImageOne from "../../../public/freepik__a-african-woman-23-years-old-blue-hair-orange-lips__91835-removebg-preview.png";
import ImageTwo from "../../../public/freepik__a-african-woman-23-years-old-blue-hair-orange-lips__91835-removebg-preview.png";
import ImageThree from "../../../public/freepik__a-african-woman-23-years-old-blue-hair-orange-lips__91835.jpg";
import ImageFour from "../../../public/freepik__the-style-is-candid-image-photography-with-natural__55667.jpg";
import ImageFive from "../../../public/freepik__the-style-is-candid-image-photography-with-natural__91837.jpg";

const PageTwo = ({ scrollAmount }: { scrollAmount: number }) => {
  return (
    <AnimatePresence>
      {scrollAmount >= 900 && scrollAmount < 2500 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="w-full absolute top-0 h-screen bg-gradient-to-bl from-blue-900 via-purple-600 to-purple-900 flex items-center justify-center"
        >
          <div className="w-full h-full absolute bg-gradient-to-tr from-purple-900 via-transparent to-transparent">
            <motion.div
              initial={{ scale: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-[72rem] h-[72rem] absolute -top-[10rem] -left-[15rem] bg-slate-900 rounded-full"
            >
              <div className="w-[90%] h-[80%] absolute bottom-0 bg-gradient-to-bl from-transparent via-blue-900 to-blue-900 rounded-full">
                <div className="w-[90%] h-[80%] absolute bottom-0 bg-gradient-to-bl from-transparent via-blue-800 to-transparent rounded-full"></div>
              </div>
            </motion.div>
          </div>
          <div className="w-full bg-transparent z-10 h-full relative flex">
            <motion.div
              initial={{ marginLeft: "1rem" }}
              transition={{ duration: 2 }}
              animate={{ marginLeft: "26rem" }}
              className="flex bg-gradient-to-b from-slate-200 via-slate-400 to-transparent text-transparent bg-clip-text font-[900] bottom-24 gap-12 absolute text-8xl"
            >
              {"SENICITY".split("").map((e, idx) => {
                return (
                  <motion.span
                    initial={{ opacity: 0 }}
                    transition={{ delay: idx * 0.3, duration: 0.1 }}
                    animate={{ opacity: 1 }}
                    key={e}
                    className="text-red"
                  >
                    {e}
                  </motion.span>
                );
              })}
            </motion.div>
            <div className="h-full z-10 absolute flex items-center justify-center min-w-1/2">
              <Image
                src={ImageOne}
                alt="ai image"
                width={440}
                height={440}
                className="object-cover"
              />
            </div>
            <div className="flex absolute right-0 h-full w-1/2 font-extrabold text-4xl">
              <div className="w-auto mt-16 absolute bottom-2 right-2 h-auto flex flex-col gap-3">
                {[ImageTwo, ImageThree, ImageFour, ImageFive].map((e, idx) => {
                  return (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 1.2,
                        filter: "blur(8px)",
                      }}
                      transition={{
                        duration: 0.2,
                        delay: idx * 0.3,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      className={`w-[8rem] relative h-[8rem] ${
                        idx % 2 === 0 ? "rounded-xl" : "rounded-full"
                      } overflow-hidden`}
                    >
                      <Image
                        src={e}
                        alt="ai image"
                        fill
                        className="object-cover rounded-full"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PageTwo;
