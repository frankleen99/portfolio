import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import typescript from "../assets/experience/typescript.png";
import react from "../assets/experience/react.png";
import tailwind from "../assets/experience/tailwind.png";
import node from "../assets/experience/node.png";
import ReactNative from "../assets/experience/react.png";

function Experience() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactNative,
      title: "React Native",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-[#adb5bd] via-black to-[#212529] w-full md:h-screen"
    >
      <div className="max-w-screen-lg px-4 py-8 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline-block border-b-4 border-gray-400">
            Stack
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
