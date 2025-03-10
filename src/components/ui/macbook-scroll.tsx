"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";
import { CodeBlockDemo } from "../demos/codeDemo";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);

  return (
    <div
      ref={ref}
      className="h-screen w-screen flex gap-0 justify-center items-center py-0 flex-shrink-0 [perspective:1000px] transform md:scale-100  scale-[0.35] sm:scale-50"
    >
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <Keypad />
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <motion.div
      style={{ rotateY: 0, rotateZ: 0 }}
      className="relative w-[45%] h-full fixed bg-black/[0.96] [perspective:800px]"
    >
      <div
        style={{
          transform: "",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-full h-full bg-red-500 rounded-xl p-2 relative"
      >
        <CodeBlockDemo />
      </div>
    </motion.div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32  rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full w-[65%] flex flex-col items-center justify-center bg-slate-950 p-1">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>

        {[
          "F1",
          "F2",
          "F3",
          "F4",
          "F5",
          "F6",
          "F7",
          "F8",
          "F9",
          "F10",
          "F11",
          "F12",
        ].map((e, idx) => {
          return (
            <KBtn key={idx}>
              <IconBrightnessDown className="h-[6px] w-[6px]" />
              <span className="inline-block mt-1">{e}</span>
            </KBtn>
          );
        })}
        <KBtn>
          <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
            <div className="bg-black h-full w-full rounded-full" />
          </div>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn className="bg-red-700">
          <span className="block text-xl font-[800]">~</span>
          <span className="block mt-1 text-xl font-[800]">`</span>
        </KBtn>

        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">!</span>
          <span className="block text-[14px] font-[800]">1</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">@</span>
          <span className="block text-[14px] font-[800]">2</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">#</span>
          <span className="block text-[14px] font-[800]">3</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">$</span>
          <span className="block text-[14px] font-[800]">4</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">%</span>
          <span className="block text-[14px] font-[800]">5</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">^</span>
          <span className="block text-[14px] font-[800]">6</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">&</span>
          <span className="block text-[14px] font-[800]">7</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">(</span>
          <span className="block text-[14px] font-[800]">9</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">)</span>
          <span className="block text-[14px] font-[800]">0</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">&mdash;</span>
          <span className="block text-[14px] font-[800]">_</span>
        </KBtn>
        <KBtn className="bg-red-700">
          <span className="block text-[14px] font-[800]">+</span>
          <span className="block text-[14px] font-[800]"> = </span>
        </KBtn>
        <KBtn
          className="w-10 items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">Q</span>
        </KBtn>

        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">W</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">E</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">R</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">T</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">Y</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">U</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">I</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">O</span>
        </KBtn>
        <KBtn className="bg-blue-900">
          <span className="block text-[14px] font-[800]">P</span>
        </KBtn>
        <KBtn>
          <span className="block text-[14px] font-[800]">{`{`}</span>
          <span className="block text-[14px] font-[800]">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[14px] font-[800]">{`}`}</span>
          <span className="block text-[14px] font-[800]">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[14px] font-[800]">{`|`}</span>
          <span className="block text-[14px] font-[800]">{`\\`}</span>
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn
          className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          caps lock
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">A</span>
        </KBtn>

        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">S</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">D</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">F</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">G</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">H</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">J</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">K</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn
          className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">Z</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">X</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">C</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">V</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">B</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">N</span>
        </KBtn>
        <KBtn className="bg-blue-600">
          <span className="block text-[14px] font-[800]">M</span>
        </KBtn>
        <KBtn className="bg-green-600">
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn className="bg-green-600">
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>{" "}
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <span className="block">fn</span>
          </div>
          <div className="flex justify-start w-full pl-1">
            <IconWorld className="h-[6px] w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-[2.5rem] pl-1">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-[2.5rem] pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-[3.3rem]"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-end w-full pr-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[16.2rem]"></KBtn>
        <KBtn
          className="w-[3.3rem]"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-start w-full pl-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn
          className="w-[2.5rem]"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-start w-full pl-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
      </Row>

      <div className="w-[4.9rem] mt-[10px] h-[10rem] p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
        <KBtn className="w-9 h-6">
          <IconCaretUpFilled className="h-[12px] w-[12px]" />
        </KBtn>
        <div className="flex">
          <KBtn className="w-9 h-6">
            <IconCaretLeftFilled className="h-[12px] w-[12px]" />
          </KBtn>
          <KBtn className="w-9 h-6">
            <IconCaretDownFilled className="h-[12px] w-[12px]" />
          </KBtn>
          <KBtn className="w-9 h-6">
            <IconCaretRightFilled className="h-[12px] w-[12px]" />
          </KBtn>
        </div>
      </div>
    </div>
  );
};
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
  clicked = false,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
  clicked?: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "p-[5px] cursor-pointer  rounded-[4px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
        clicked && "bg-white/[0.2] shadow-xl shadow-blue-400 -mt-2"
      )}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "h-12 min-w-12 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 text-[10px] w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex px-3 justify-between gap-[2px] mb-[2px] w-full">
      {children}
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[0.5px] gap-[2px] mt-2 h-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};
