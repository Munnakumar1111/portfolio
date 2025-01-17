import React from "react";
import pic from "../../public/photo.avif";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, i'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem
              totam, earum alias eaque quibusdam molestias natus sit pariatur
              voluptas!lorem10 Lorem ipsum, dolor sit amet consectetur Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Sed non, nobis
              dolorem dignissimos necessitatibus eaque exercitationem dicta
              quidem neque corrupti. Ea, libero vel! Dolore dignissimos
              architecto ab iure rerum quibusdam. adipisicing elit. Nostrum,
              quis.
            </p>
            <br />
            {/* social media icon */}
            <div  className="flex items-center flex-col md:flex-row space-y-6 md:space-y-0 justify-between">
              <div className="space-y-2 ">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <a href="https://www.facebook.com/r.php?locale=en_GB&display=page" target="_blank">
                  <li>
                    <FaFacebook className="text-2xl cursor-pointer" />
                  </li>
                  </a>
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaYoutube className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
          <img className="rounded-full md:w-[450px] mt-8 md:h-[450px]" src={pic} alt="" />
          </div>
        </div>
      </div>
      
      <hr />
    </>
  );
};

export default Home;
