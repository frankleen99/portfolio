import React from "react";

function About() {
  const yearsOfExp =
    new Date(Date.now()).getFullYear() - new Date(2022, 2).getFullYear();
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-[#adb5bd] via-black to-[#212529] text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-20 md:py-0 h-full flex flex-col md:justify-center gap-12">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            About
          </p>
        </div>
        <div className="grid gap-6 text-lg md:text-xl">
          <p className="leading-8 tracking-wide">
            I'm a frontend Mobile and Web developer fueled by a passion for transforming creative ideas
            into intuitive, high-impact digital experiences. My journey began
            with a deep curiosity for building visually engaging interfaces that
            not only captivate users but also elevate how they interact with
            technology.
          </p>

          <p className="leading-8 tracking-wide">
            Over the past {yearsOfExp} years, I’ve honed my skills through
            hands-on development—bringing together creativity and technical
            precision using <span className="font-semibold"> JavaScript </span> and
            <span className="font-semibold"> TypeScript</span>. Whether it's crafting seamless user flows
            or building scalable, responsive applications, I take pride in
            writing clean, thoughtful code that bridges imagination and
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
