import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      logo: oracle,
      name: "ORACLE",
    },
    {
      id: 5,
      logo: spring,
      name: "SPRING",
    },
    {
      id: 5,
      logo: springBoot,
      name: "SPRINGBOOT",
    },
  ];
  return (
    <>
      <div name="Experience" className="max-w-screen-2xl px-4 container mx-auto md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold mb-5">Experience</h1>
          <p className="font-bold">
            I have two years experince in below technologies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md cursor-pointer p-1 hover:scale-110 duration-300"
                key={id}
              >
                <img
                  className="w-[150px] rounded-full"
                  src={logo}
                  alt=""
                />
                <div>
                  <div className="">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
