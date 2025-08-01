import React from "react";
import GadgetWeb from "../assets/portfolio/gadgetweb.png";
import FeedMe from "../assets/portfolio/feedMe.png";
import GadgetWebApi from "../assets/portfolio/gadgetwebApi.png";
import CompleteMarket from "../assets/portfolio/CompleteMarket.png"
import CarBooking from "../assets/portfolio/carBooking.png"

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: GadgetWeb,
      projectName: "GadgetWeb",
      bgColor: "bg-yellow-700",
      code: "https://github.com/frankleen99/gadget-web-frontend",
      demo: "https://gadgetweb.netlify.app/",
    },
    {
      id: 2,
      src: FeedMe,
      projectName: "Feed Me",
      bgColor: "bg-slate-600",
      code: "https://github.com/La-victoire/Feed-Me-app",
      demo: "https://feed-me-app-lyart.vercel.app/",
    },
    {
      id: 3,
      src: GadgetWebApi,
      projectName: "GadgetWeb API",
      bgColor: "bg-green-700",
      code: "https://github.com/frankleen99/gadget-web-api",
      demo: "https://gadget-web-api.onrender.com/",
    },
    // {
    //   id: 4,
    //   src: CompleteMarket,
    //   projectName: "Complete Market",
    //   bgColor: "bg-red-700",
    // },
    {
      id: 5,
      src: CarBooking,
      projectName: "Car Booking",
      bgColor: "bg-amber-800",
      code: "https://github.com/frankleen99/Car-booking",
      demo: "https://hotel-horizon.netlify.app/",
    },
    // {
    //   id: 6,
    //   projectName: "Tic-Tac-Toe",
    //   bgColor: "bg-slate-700",
    //   code: "https://github.com/OldRodger/Tic-Tac-Toe",
    //   demo: "https://noughts.netlify.app/",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#212529] via-black to-[#adb5bd] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg px-4 pb-16 md:pb-0  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, projectName, bgColor, code, demo }) => (
            <div
              key={id}
              className="group shadow-md shadow-gray-600 rounded-lg"
            >
              <div className="relative">
                <div
                  className={`hidden absolute w-full h-full top-0 left-0 md:grid place-items-center ${bgColor} z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <span className="font-bold text-2xl">{projectName}</span>
                </div>
                <img src={src} alt="portfolio image" className="rounded-md" />
              </div>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                {projectName !== "Lancers Point" && (
                  <a href={code} target="_blank">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
