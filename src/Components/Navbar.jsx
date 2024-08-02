import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 h-16  shadow-md fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-2 ">
            <img src={pic} alt="" className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Munn<span className="text-green-500 text-2xl">a</span>
              <p className="text-sm">web Developer</p>
            </h1>
          </div>
          {/* dasktop navbar */}
          <div>
            <ul className="hidden  md:flex space-x-8">
              {navItem.map(({ id, text }) => {
                return <li className="hover:scale-105 duration-200 cursor-pointer" key={id}><Link 
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                to={text}>{text}</Link></li>;
              })}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <IoCloseSharp className="text-4xl" />
              ) : (
                <IoMdMenu className="text-4xl" />
              )}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden h-screen flex flex-col justify-center items-center space-y-3 font-semibold text-xl">
              {navItem.map(({ id, text }) => {
                return <li className="hover:scale-105 duration-200 cursor-pointer" key={id}><Link 
                onClick={() => setMenu(!menu)}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                to={text}>{text}</Link></li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
