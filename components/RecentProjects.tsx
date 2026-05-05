"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const projects = [
  {
    id: 1,
    title: "AI-Powered Nutrition Planner",
    des: "Generates personalized 7-day nutrition plans using GPT-4. Features questionnaire flow, PDF generation, and email delivery.",
    img: "c2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://nutriplan-ai-amber.vercel.app/",
  },
  {
    id: 2,
    title: "UIverse – Component Showcase",
    des: "A curated collection of animated UI components built with Framer Motion, React, and TypeScript.",
    img: "/c1.png",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://uiverse-roan.vercel.app/",
  },
  {
    id: 3,
    title: "Calorie Burner Calculator",
    des: "A clean, interactive calorie calculator built with vanilla JavaScript, HTML, and CSS.",
    img: "c3.png",
    iconLists: ["/js.svg", "/css3.svg", "/html.svg"],
    link: "https://calorie-meter-mu.vercel.app/index.html",
  },
  {
    id: 4,
    title: "Creative AI Portfolio",
    des: "A secondary portfolio showcasing creative experiments and AI-driven interactions built with TypeScript and JavaScript.",
    img: "/c4.png",
    iconLists: ["/ts.svg", "/js.svg", "/re.svg"],
    link: "https://ai-app-i74f.vercel.app/",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.link, "_blank");
                  }}
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;