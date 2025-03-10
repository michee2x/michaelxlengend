"use client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  scroll,
} from "motion/react";
import { Suspense, useEffect, useRef, useState } from "react";
import HackerRoom from "@/components/HackerRoom";
import { MdFacebook, MdSearch } from "react-icons/md";
import { ThreeDCarousel } from "@/components/3DCarousel";
import Instagram from "../../public/instagram-logo(3).ico";
import { MdMenu } from "react-icons/md";
import Pageone from "@/components/Pages/pageone";
import ImageOne from "../../public/freepik__a-african-woman-23-years-old-blue-hair-orange-lips__91835-removebg-preview.png";
import ImageTwo from "../../public/freepik__a-african-woman-23-years-old-blue-hair-orange-lips__91835-removebg-preview.png";
import ImageThree from "../../public/freepik__a-african-woman-23-years-old-blue-hair-orange-lips__91835.jpg";
import ImageFour from "../../public/freepik__the-style-is-candid-image-photography-with-natural__55667.jpg";
import ImageFive from "../../public/freepik__the-style-is-candid-image-photography-with-natural__55668-removebg-preview.png";
import PageTwo from "@/components/Pages/pageTwo";
import {
  FaGithub,
  FaInstagram,
  FaMicrophone,
  FaTiktok,
  FaWhatsapp,
  FaWineBottle,
} from "react-icons/fa6";
import { Model, ModelViewer } from "@/components/model-viewer";
import { Environment, OrbitControls } from "@react-three/drei";
import { RiMenu3Fill } from "react-icons/ri";
import ContactME from "@/components/sections/contactme";
import FAQs from "@/components/sections/FAQs";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="w-screen bg-gray-200 pt-16 min-h-screen">
      <nav
        style={{ backdropFilter: "blur(20px)" }}
        className="w-full fixed top-0 left-0 right-0 z-[4000] bg-slate-900 bg-opacity-80 flex items-center justify-between px-4 h-[4rem] "
      >
        <span className="orbitron flex gap-2 items-center font-bold text-blue-300">
          <b className="text-3xl flex">~</b> michaelxlegend.
        </span>
        <RiMenu3Fill className="text-2xl text-white" />
      </nav>

      <div className="w-full h-[50vh] flex flex-col place-content-evenly relative">
        <h1 className="text-5xl satisfy font-bold px-4 mt-10 text-slate-900">
          Let's Unlock Your Earning <br /> Potential Today. <br /> Shall we...
        </h1>
        <h3 className="px-4 text-xl mt-6">
          I'll show you proven ways to Make Money from Home, Start Your Side
          Hustle, or Grow Your Online Business
        </h3>

        <button className="w-[80%] min-h-16 rounded-[3px] bg-slate-900 ml-4 mt-8 text-white flex items-center justify-center">
          GET ACCESS TO FREE RESOURCES
        </button>
      </div>

      <div className="relative mt-[16rem] bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 w-full h-[17rem]">
        <div className="w-[15rem] z-50 border-4 border-white rounded-full overflow-hidden absolute left-1/2 -top-1/2 transform -translate-x-1/2 bg-slate-900 h-[15rem]">
          <Image
            fill
            alt="imageone"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBIVFRUVEBAVEBUQEhAQEBAVFREWFhUSFRUYHSggGBolGxUfITEhJSkrLi4uIDAzODMwNzAwMTABCgoKDg0OGA8QGisfHSUrKy0tLS0tLS4tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA8EAACAQIDBAgEBAUDBQAAAAABAgADEQQSIQUxQVEGIjJhcYGRsRNSocEHFHLRI0Ji4fBjgrI0U5Ki8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgEDBAMBAAAAAAAAAAABAhEDEiExBCJBURMycWH/2gAMAwEAAhEDEQA/AONpdlR/Sv8AxEtBgorov6V9hGK2mFrukHJAQRCrQgxK0AMdYLQWiPSzJJaRDDni2ehEBMKveQiAVs0W0sKRLQGgkBhiwLRg0YGJlgN4BZaKacUExw8O47K2WJrMiKyx7K4qLxSZayxCJW0WKzEMsKxSJSLFFZAwKkXBBGsksYSSozsZiDQeA9obxQ2g8B7RxrMq6oFoQsJEYNJ2rRRGWMFkCxGMUpJaNAEKyBjHvz/+TArYsscqWA5k6nwHASpjajPOY+WYagGhI9YcwMpw1A7rE9+lpmijoAQO4n/iZXRGU5bfhRlvAaJ32mxp0l1sDu8dfHyhVgO7x4eMJjDvJfprQIC02zYRHBynXu3ek1tWgVNjJuNjTHkmXhXIFgsZM0SgaQmOpvIyw2NKiYsciIZSKRjEMYrFaUzqpzJGJklM6y1Gg8B7RwsbLIDMbXXIGsbLDAxgaEyI0ULHCxA++FhYXMCiV4s3yJ8x+gjk3dFll0zbW7Srsw5LwHzHmZi0VbTQ7t1ribiph81SxHVXQd/eZtcBhVve0vLkmHZhx8GXLd2sLZNHd99Ju6ez2Y9UWvbna32mxwmET5ZuKK20UDy0nPl6h34eik72tRQ2G4te1t5mRW2NTY7rX4ibpQbC9gfvygKE8P8AOcw/Llt0Tjw1rThsZsw0X45eBA3RcZhwUDg3F8ubip35XHC/AzssThg4APO37GazEbOVEe4t1SHU9llBtmXwPDh4Tu4c+vHu8v1PF+PPeLiiYhEdlCki99T7/tFziTZqrxu5KgEDNGDRXAiUrkgJisZaEYxCIbxHMcZ0riSIZJbKtkXh0lREIMxrrlW5YCsKSwWiMohEBgMDWAzELXxVNeSX9Sf2l8xFqWxIP+mPdh7y8PLHn/Vls/WPjNxs3eJz4brkHnN9sw6/vMOWd3T6a+HU4WjcC/03TPAt6zDwTmxEyQ1xfXl/ec+noXbMw631vxlzrodNRxGpmFhn5+Hj/lplVaoVbndpfu8eUWmOUu2K50N+/X6gxekR/hFrXP8AMd3Dtd9xBXqA3KnTnvvppKsfiA9MgjQoBzvbf5zq9NfMcnrce0rzJlu7jgG08LQslpdi8N8Oo1jodRpa+u+VFptn5YcX6q4I5MRooqlkgJgBjTtDEIlmaI5jiclRkjGSWyrMEYU4VEYCYuoMtouaEiTLEYg3jAxQsJSAGYOJTLWD80t5qb/eZwEo2hTGTNfVSCPM2I+srC6rPlm8KprGz377+s2ez8fTGpbjumpx79UFd9rf2lmycDRAD1ny8SQSLeMrkwl71HDyZS6xd5sXalMlbG+8HX0mWMUHpll3gBtO46/echTrYDLmpVauYfzZGyX4ajdN30JrKarBid2nI35zkzw6Zt6fFzdXnv8AxlVdovchASdMoQXPnEbBY+uCbaHerEDTwE2O3KLUlLUAFJOnEXJ3zS4DYFSpV+M2LqjjZCASdNAeA8o8dDOZXvN1m01q0CA4G43ykkA+ksq18qkE2vqvIG02a4YoLF85N9agsd3cNfSaLHLY68PC3hJxz6ctjk4uvj6WM2yM4VzoHNrHXtffjOXItcHeND4id9TfUIwyhlX4Lg6Z8vHuvOL2nRy1qo4F2I8GOYe80wzuWV2z5eKYYY6jDMBMJEUiaxy0smWSAtKShlZEZojSoilIkimSUyrYZo6mJaFZjXXD2kkBhEDRY4MUNGEAireGpSBBHdJeTPANHjBlYa6ZvWbPZ6KzjOmYcCNR5iY+0kBpsBvDM3edR9jMvZL2sO4R55e3aOLCfk03+II+GFVAigac/SJ0WP8AHYjwMwtpY3Ktl3nztzMHR/aNNDe47Wus57Lcdu+XGZyPQGxYW6tuI1vr6jjBQwVE3Kgf7Wa3pfSaqvtemzKKamoxHZSx8yToJj7To1qB/MId9jURTf05zLprft8V1FeiAvZGs5vbdIjXn+0twHSEVV0IJ7zrK8ZiPiIbjUH2k2dxjOzIw9E1Fw9h1aaZrk2Ge+gPPS5nJ7f/AOoqLyyg+IUXnQ7N2vRpg06jZSL2JFwwPAHnOSx+Jz1aj8CxtffbcPaa8Uu9sOfL2aUskqYRzUi5rzpjiqsxGlhiGVGdAGKxkMrYykWg0MQmCUzrZLGlatCrTJ07WiGASRK2cGGV3hzQByZWbwXMYNAyFAWIPFdPYynBMVbLyJX00mVkuQb2I3HxmMAVqtfW5zC/EHf9bxXxR4spsXV63gLRaFKi7Avbv1187TYY7Bq9MP5GYWyVyHKrlQNwspHHnv38YsbOleWOVz15jp9kV1pC1IZgCOzTd+1oASOczMTtOrUYItJid1rKttd5udN0x1xWc2eqbFUDBSQGt3Cw4TeUGpsR8NbKB3XMzysdmGF19OdwWAy4s3UC6EniL3m0qsLE8dZbtCnlZao4hk+oK+xmq2tXKqqDtHlMb7q0msMWrx6dUsOB+m6atyTN/isJVbD1vgrmanQeoQeK0wGc+m6c7hMUtVAy+Y4g8jOjil6duDns69fOgMgWWFZWy2mrApimEmAmVE2lJlbRmMraVGWVI0kBklIrPvHQRbRxMnTD3kDQACS8ShMAgEsAgAEYQRhEZhKcUhYAjeN3fzEcyXgPJcLjeoytuPPgRwMsoYVTZh6TDx62U1BwHXHzDn4iY2H2jk3nTgefjFcLZvE8eWSyZu12dRp2BYcR3Tf4YoFGo9Z59S26m4GZVLalVhoLDmZllx5fLtnqePWo6Xau1FDBQdF18+E11JPiNnbed39K8fWa/D0SzXOpJ4zrejOxTiauUXCCxqsNLLwUHmdZHT31C/J7bll2kbjZ+HXDbMx2MqaZ8PXK3/7YRgo8zb0E+fMBi2osCNRYBh8w/ee6/jltYYfZ9LCJYGu4FhwpUrMRblmyieANPRxxkx6XicnJc87m7GjiFdQym4P+WMjGctg8e9Ls7idQd39pt8PtRH0PVPf2fWZ3CxvjzSzv5Z7GVM0LRDCC0CZWxgeVs0qRnaLNJKWMMpG23LR1MqvGEy06YskAiAw54lbODGFSIIQIjWgw5pj1KoUEkgAbyTYDzmoxXSOmlwl3Pd1V9T+0cxtK5yeW8LTBxm1KVHttr8q9ZvTh5zlsdtqtV0zZV+VNB5neZrpc4/tjl6j6bzH9JajgrTUINbk2ZiPYTa1sN8Ko1I6gWKE/zIyhlPoZx09AwOHOMwNGsutSgppVLb2RD1G8hL6ZJ2Y9dt7sFaWUgjdebzKwVfATV0mvYMOWs7DZmyamLqU6NFb6Aux7FNfmYzl5bbZHfw44yW29lnR7ZdXEVFpUx1rXZjfKinezd3vPYNkbPTD0lpUxoO0x3u3FjMbYOxqWEpfDp6k2NRyOvUPM8hyHCaz8S+kI2fs2tUU2qVB8KhzzuCMw/St28pvxcXR3vlzeo9R+T2z9Y8O/FTpD+e2jWZDelS/g0bbiEJzOPF7+VpxrmEmVMZq5kBlimVCMDAM3D4103HTkd39pnU9pqe0LfUTT3hi1FTKxvg4YaEHwimaVHINwfSZtLG30b1H3EWj6mQwkis19RJGTbh4c0qhvM3RtYse0x80gYxaPqZBaa3H7bSldV67cgeqvifsJgba2owJpUzbTrkb9f5QeE0MqYfbPPl+IyMbjqlY3drjgo0UeAmNIZJow3sIZJIBJ6Z+FB/h1R/q+6reeaCd/0BxnwMJXrHXIztbnlQEDzItHCrp9tbFwzYyjhqddErVcp+EUZipfs6jQE8iRfSer9FNkJhKQpKvezHtVG+Zj9uE+bdmNUxFYVndjUZw5cHrZs18w5WO7lPozod0hXG0WuR8aiQmIUWGtrrUA5MNfG44SZrbTK5XH/HSET56/Hbbxr45cKp6mGSxtuNSpYsfJco9Z73tLHph6FWu56tOm7t4KLz5B2pjnxFarXftVKju3izE/e0aGOWiSXkgBEgMEl4A4MYRFMaAWSQQEwC2nWK+EkqvJAOlDxgZRGVpm22uBELNYE8gT6CU7otep1H/Q3sYaPbkqjliWO8kk+ZgtJyhmjAskMloAskMhgEE9A6GYUvg2X5mYnvAYaf8Araefid7szHfltlq69uqWpUu4sSXfyH1IjhU2zKC0cTiFuCFZzTtrnuAbKONs1p1P4e58M74/Us9Q03TUXpg6qRzvqOVh3zhsJU/L1cNbcqsX49sqs77oyAKxpg3R71Nf5SguftM8b7/62s9n8b78ZukSDZarRa4xLIqkfL2mB5aLYifPpnZ/ifjs1elh1PVpoXtwzVDvt+lQfOcWZpWMCA3hgBiNBDFMKwCxY0USFoAxMl4okvACTJFtJAOkBhiCQGS1PExC3RxzVh9DDmmBtXG5BkXtEan5R+8CtaK+6PaJHBlMwMkaAwBYDCJDAAs6fBuaowdLhSos1v6qlRmv/wCIWcym+dF0UOZyTwUAeAFh7RXweM3YyNv9VfFlHkDf3nQ9FsUzvSN9Q1vIqLg+k5npO/WRZkbO2h+XoVn45XVO5np5FPlcmLGeF5XvWp6QY/8AMYqvWBuGqNk/QvVT6ATXwCd5hq2x12fS+LTZz8RVY00Sni6jIodwWN8iXcLe5uBwMdqJHBxZZiCuZsvZzNluLHLfTS5tp3nxlR3RkF46SsS1YAGeRYkYGAPGAi5hGDQAmSKZIBvyIAYZJK0vNJtUfxT4Lb0kkjhVhGMhgkjSeAiSSAKsBkkgBp75v+iZs7juMkkWXhWHmF2wxasCRbXS/IcZh7RcjKn+4+lhJJCDLzWHJDJGkpimSSARY7bjJJAKxGCySQBwokvDJACBzkkkgH//2Q=="
            className="object-contain"
          />
        </div>
        <p className="absolute top-1/2 px-4 text-xl text-white text-center font-white">
          " You don't have to be great to start, but you have to start to be
          great " <br />
          <span className="orbitron absolute right-8 text-[12px] flex gap-2 items-center font-bold text-blue-300">
            <b className="text-3xl flex">~</b> zig ziglar.
          </span>
        </p>
      </div>

      <div className="w-full h-auto">
        {[
          "Learn from someone who has achieved real results in affiliate marketing and digital marketing",
          "Receive tailored advice and strategies based on your unique goals and experience",
          "Make money from the comfort of your zone even when you're not working and allow the algorithm work for you...",
        ].map((e, idx) => {
          return (
            <div
              key={idx}
              className="w-full px-4 min-h-64 my-16 flex flex-col gap-[2rem]"
            >
              <div className="w-[10rem] p-10 relative overflow-hidden rounded-full bg-slate-900 h-[10rem]">
                <Image
                  fill
                  alt="imageone"
                  src={ImageOne}
                  className="object-contain"
                />
              </div>
              <p className="text-xl text-slate-800">{e}</p>
            </div>
          );
        })}
      </div>

      <div className="relative mt-[16rem] bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 w-full h-[17rem]">
        <div className="w-[15rem] z-50 border-4 border-gray-200 rounded-full overflow-hidden absolute left-1/2 -top-1/2 transform -translate-x-1/2 bg-slate-900 h-[15rem]">
          <Image
            fill
            alt="imageone"
            src="data:image/jpeg;base64,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"
            className="object-cover"
          />
        </div>
        <p className="absolute top-1/2 px-4 text-xl text-white text-center font-white">
          " An investment in knowledge pays the best interest " <br />
          <span className="orbitron absolute right-8 text-[12px] flex gap-2 items-center font-bold text-blue-300">
            <b className="text-3xl flex">~</b> benjamin franklin.
          </span>
        </p>
      </div>

      <div className="w-full my-10 flex flex-col place-content-evenly h-[20rem]">
        <h1 className="text-5xl satisfy px-4 text-slate-800 text-center">
          Learn from the Best in the Business
        </h1>

        <hr className="bg-gray-800 w-[20%] mx-auto h-[2px]" />

        <p className="text-xl text-center px-3 text-slate-800">
          Here provided are some proven course to equip you with the knowledge
          and skills you need to thrive online.
        </p>
      </div>

      <FAQs />

      <div className="w-full py-8 min-h-[60vh] my-10">
        <h1 className="text-3xl mb-6 satisfy px-4 text-slate-800 text-center">
          People who made it selling online
        </h1>
        <Testimonials />
      </div>

      <ContactME />

      <div className="w-full flex gap-2 p-2.5 py-4 h-auto my-10">
        <div className="w-[6rem] border-2 border-white ring-4 ring-blue-900 bg-slate-900 h-[6rem] relative overflow-hidden rounded-full">
          <Image
            alt="my image"
            src={ImageFive}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <span className="text-sm text-slate-900 orbitron mb-[1.5rem] flex mt-[2.5rem]">
            @michaelxlegend
          </span>

          <p>
            Am a web developer, online marketer, and on-Page SEO specialist.
            Seeking to explore the Ins and Outs of online marketing and it
            dynamism? that's the drill. feel free to follow me on my social
            media accounts for more updates.
          </p>
        </div>
      </div>

      <footer className="w-full p-4 h-[15rem] py-5 bg-gradient-to-br from-blue-500 via-purple-800 to-slate-900">
        <div className="w-full h-auto flex">
          <div className="w-1/4 h-full flex gap-4">
            {[<FaInstagram />, <FaTiktok />].map((e, idx) => {
              return (
                <span
                  key={idx}
                  className="text-white text-lg bg-slate-900 p-1.5 rounded-[4px] flex items-center justify-center"
                >
                  {e}
                </span>
              );
            })}
          </div>
          <div className="w-3/4 h-auto list-none items-end flex flex-col gap-4">
            {["Shop", "Contact Us", "Privacy policy"].map((e) => {
              return (
                <li key={e} className="text-gray-300 text-[14px]">
                  {e}
                </li>
              );
            })}
          </div>
        </div>
        <hr className="bg-blue-900 mt-10 w-full mx-auto" />
        <p className="text-gray-300 mt-10 text-[14px] text-center">
          Copyright 2025 michaelxlegend - Privacy Policy
        </p>
      </footer>
    </div>
  );
}

/*export default function Home() {
  const returnColor = (e: string) => {
    if (e === "red") {
      return "border-red-500 shadow-lg shadow-red-300 ring-red-300";
    } else if (e === "blue") {
      return "border-[#0099ff] shadow-lg shadow-[#0099ff] ring-[#0099ff]";
    } else if (e === "green") {
      return "border-green-400 shadow-lg shadow-green-400 ring-green-400";
    } else if (e === "yellow") {
      return "border-yellow-400 shadow-lg shadow-yellow-400 ring-yellow-400";
    } else {
      return "border-yellow-100 shadow-md shadow-yellow-100 ring-yellow-100";
    }
  };
  return (
    <div className="w-screen flex justify-center items-center overflow-hidden bg-black h-screen text-white">
      <div className="w-full h-12 fixed top-0 px-6 flex items-center justify-between">
        <span className="text-2xl">NTX</span>
        <span className="flex text-sm items-center justify-between w-1/3 h-full absolute transform -translate-x-1/2 left-1/2">
          <span>HOME</span>
          <span>ABOUT ME</span>
          <span>SERVICES</span>
          <span>DEMOS</span>
        </span>
        <span>contact us</span>
      </div>
      <div className="w-24 text-xl h-screen fixed top-0 right-0 bg-transparent flex flex-col justify-center items-center gap-8">
        <span>
          <MdFacebook />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaGithub />
        </span>
        <span>
          <FaWhatsapp />
        </span>
      </div>
      <div className="w-24 text-xl h-screen fixed top-0 left-0 bg-transparent flex flex-col justify-center items-center gap-8">
        <span className={`px-4 py-[1px] rounded-full flex bg-slate-600`}></span>
        <span className={`px-4 py-[1px] rounded-full flex bg-slate-600`}></span>
        <span className={`px-4 py-[1px] rounded-full flex bg-slate-600`}></span>
        <span className={`px-4 py-[1px] rounded-full flex bg-slate-600`}></span>
        <span className={`px-4 py-[1px] rounded-full flex bg-slate-600`}></span>
      </div>

      <motion.div className="w-[25em] h-[25em] rounded-full overflow-hidden relative">
        <Image
          src={ImageFive}
          alt="image one"
          fill
          className="object-contain grayscale"
        />
      </motion.div>
    </div>
  );
}*/

/*<motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, ease: "easeInOut", duration: 0.4 },
        }}
      >
        <div className="h-[298px] absolute w-[298px] mix-blend-lighten">
          <Image
            src={ImageOne}
            alt=""
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </div>
        <motion.svg
          className="w-[300px] h-[300px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r={250}
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        style={{ scale: 1, opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 1, delay: 2.3 }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
      >
        {["red", "blue", "yellow", "green", "white"].map((e, idx) => {
          return (
            <motion.div
              initial={{ width: "253px", height: "253px" }}
              transition={{
                duration: 2.4,
                delay: idx * 2.4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              animate={{
                width: ["250px", "240px", "250px"],
                height: ["255px", "250px", "250"],
                x: ["5px", "0px", "-5px"],
                y: ["3px", "0px", "-3px"],
                rotate: [0, 360],
              }}
              className={`border-[.4rem] ring-4 absolute ${returnColor(
                e
              )} rounded-full`}
            />
          );
        })}
        <motion.div
          style={{
            background: "linear-gradient(to right, green, blue, red, yellow)",
            backgroundClip: "text",
          }}
          className="w-[253px] font-bold text-transparent bg-clip-text h-[253px] flex items-center justify-center"
        >
          <motion.span
            initial={{ scale: 1.3 }}
            animate={{
              scale: [1.8, 1.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaMicrophone className="text-blue-500" />
          </motion.span>
        </motion.div>
      </motion.div>*/

/*export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    setScrollAmount((prev) => prev + event.deltaY);
  };

  useEffect(() => {
    if (Math.floor(scrollAmount) < 1) {
      setScrollAmount(0);
    } else {
      scrollAmount;
    }
  }, [scrollAmount]);

  return (
    <div
      ref={ref}
      onWheel={handleWheel}
      className="w-screen fixed bg-slate-900 min-h-screen"
    >
      <motion.nav
        initial={{ marginTop: "-3rem" }}
        animate={{ marginTop: 0 }}
        className="w-full z-[4000] fixed top-0 right-0 left-0 text-slate-100 bg-transparent flex justify-between px-2 items-center h-14"
      >
        <span className="w-10 flex h-10 relative">
          <Image src={Instagram} alt="instagram logo" fill />
        </span>
        <span className="flex gap-4">
          {["Home", "Features", "Demos"].map((e, idx) => {
            return (
              <span
                onClick={() => setClicked(idx)}
                key={idx}
                className={`px-8 cursor-pointer py-[.4px] rounded-full ${
                  idx === clicked
                    ? "bg-slate-100 text-slate-700"
                    : "bg-transparent"
                } flex items-center justify-between`}
              >
                {e}
              </span>
            );
          })}
        </span>
        <MdMenu className="text-3xl pr-2" />
      </motion.nav>

      <Pageone scrollAmount={scrollAmount} />

      <PageTwo scrollAmount={scrollAmount} />

      <AnimatePresence>
        {scrollAmount >= 1900 && scrollAmount < 3000 ? (
          <motion.div
            initial={{ opacity: 1, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="w-full absolute overflow-hidden top-0 h-screen bg-slate-900 flex pt-40 justify-center"
          >
            {scrollAmount >= 2000 && (
              <p className="text-white absolute right-0 ml-6 pr-28 text-4xl w-2/3 h-screen flex">
                {"Explore our category or enormous features. automate your social life.".slice(
                  0,
                  Math.floor((scrollAmount - 2000) / 6)
                )}
              </p>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}*/

/*export default function Home() {
  return (
    <div className="w-screen relative list-none min-h-screen bg-gray-300 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-screen">
        <div
          style={{ backdropFilter: "blur(20px)" }}
          className="w-[80%] flex justify-between p-1 rounded-full top-6 h-12 bg-gray-400/30 fixed left-1/2 transform -translate-x-1/2 z-[4000] "
        >
          <span className="h-full w-10 rounded-full cursor-pointer text-xl text-white flex items-center justify-center bg-gray-300/40">
            <MdSearch />
          </span>
          <span className="w-[40%] h-full flex  justify-between items-center">
            {["components", "templates", "pricing", "showcase"].map(
              (e, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-[14px] cursor-pointer text-gray-100"
                  >
                    {e}
                  </li>
                );
              }
            )}
          </span>
          <code className="w-40 rounded-full text-[10px] flex items-center justify-center text-white h-full bg-gray-300/40">
            U N R E A L J S
          </code>
        </div>

        <div className="w-full relative h-full">
          <div className="w-full bg-green-600 absolute h-full">
            <GridBackgroundDemo />
          </div>
          <div className="bg-gradient-to-tr flex flex-col items-end pt-[7rem] pr-28 text-white text-[3rem] absolute z-10 from-purple-500/10 via-violet-500/10 to-pink-500/30 w-full h-full">
            <p className="text-2xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              WE'RE TOP NOTCH AT THIS
            </p>
            <p className="text-2xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              NO KIDDING!
            </p>

            <div className="w-[15rem] hidden h-[15rem]">
              <ThreeDCarousel />
            </div>
          </div>

          <div className="w-[32%] fixed top-0 pl-10 pb-6 pt-4 flex-col place-content-between overflow-hidden h-full flex z-20 bg-transparent">
            {"UNREALJS".split("").map((e, idx) => {
              return (
                <motion.h1
                  key={idx}
                  initial={{
                    y: idx * 5,
                    opacity: 0,
                    filter: "blur(8px)",
                    scale: 1.3,
                    x: 8,
                    position: "absolute",
                  }}
                  transition={{
                    delay: idx === 0 ? 0 : idx * 0.1, // Apply delay only to non-first letters
                    type: "spring",
                    stiffness: 400,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    x: 0,
                    position: "relative",
                  }}
                  className="text-[2.8rem] font-extrabold text-white"
                  style={{
                    textShadow:
                      "0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)",
                  }}
                >
                  {e}
                </motion.h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/*A close-up portrait of a model illuminated by a sharp, orange spotlight on one side and a soft blue glow on the other. The contrast creates bold, clean shadows across their angular features. The makeup is editorial, with bold blue lines extending outward from the eyes and glowing orange highlighter on the cheekbones.*/

/* export function GridBackgroundDemo() {
  return (
    <div
      data-theme="dark"
      className="h-[50rem] w-full bg-black  bg-grid-white/[0.2]  relative flex items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
} */

/*<svg className="h-screen w-screen">
        <path
          strokeWidth={2}
          stroke="red"
          d="M20 100 C20 80, 30 70, 40 70 L200, 70 C210 70, 220 70, 230, 63 L280,30 C290 25, 300 25, 310 25 L990, 25 C1000 25, 1010 25, 1020 30 L1080, 70 C1090 75, 1100 75, 1110 75 L1270, 75"
          fill="transparent"
        />
      </svg> */
