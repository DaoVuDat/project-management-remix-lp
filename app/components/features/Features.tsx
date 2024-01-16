import { BaseProp, Container } from "../shared/Container";
import { BiCheckShield } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import React from "react";
import clsx from "clsx";
import { Dot } from "../shared/Dot";
import { VideoPlayer } from "../features/VideoPlayer";

interface FeatProps {
  feat: {
    icon: React.ReactNode;
    feature: string;
    featDescription: string;
    color: string;
  };
}

function Feat({ feat: { icon, featDescription, feature, color } }: FeatProps) {
  return (
    <li className="group flex space-x-4">
      <div
        className={clsx(
          "relative bg-white lg:text-2xl p-4 self-start rounded-full shadow-blue-50 shadow-2xl flex justify-center items-center",
          color,
        )}
      >
        {icon}
        <div className="absolute border-l border-black border-dashed -bottom-[120%] left-1/2 z-10 h-full group-last:border-none" />
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-2xl font-bold">{feature}</span>
        <span>{featDescription}</span>
      </div>
    </li>
  );
}

function ListFeat() {
  const features = [
    {
      icon: <BiCheckShield />,
      feature: "Reliabilities",
      featDescription: "Consistent dependability in project management.",
      color: "text-[#779ecc]",
    },
    {
      icon: <FaRegHandshake />,
      feature: "Integrity",
      featDescription: "Strong moral and ethical principles in the profession.",
      color: "text-[#f28444]",
    },
    {
      icon: <GiProgression />,
      feature: "Competence",
      featDescription: "Proficiency and effectiveness in project tasks.",
      color: "text-[#bf4136]",
    },
  ];

  return (
    <ul className="mt-12 lg:mt-0 lg:max-w-80 flex flex-col space-y-12 shrink-0">
      {features.map((feat) => (
        <Feat key={feat.feature} feat={feat} />
      ))}
    </ul>
  );
}

export function Features({ className, id }: BaseProp) {
  return (
    <Container className={className} id={id}>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-10">
        <h1
          className={clsx(
            "text-3xl lg:text-4xl lg:leading-[1.25] lg:tracking-wider lg:max-w-144",
            "font-lato",
          )}
        >
          Elevate Your Projects
          <br />
          with <span className="lg:hidden">&#32;</span>
          <br className="hidden lg:block" />
          Precision Tracking
          <Dot color="text-secondary" />
        </h1>
        <div className="relative mt-4 w-full lg:mt-0 lg:w-[550px] lg:text-lg lg:h-20 lg:mr-16">
          <p>
            Welcome to Project Management Tracking.
            <br />
            Join us in mastering streamlined progress!
          </p>
          <div className="absolute w-44 lg:w-full h-16 lg:h-[140%] bg-secondary -bottom-[70px] lg:-bottom-[150%] right-5 lg:right-0 flex justify-around items-center">
            <div className=" lg:ml-4 flex space-x-2 lg:space-x-1 justify-center items-center">
              <div className="text-4xl lg:text-6xl">20</div>
              <div className="flex flex-col -space-y-1 text-sm lg:text-base">
                <span>Successful</span>
                <span>Projects</span>
              </div>
            </div>
            <div className="hidden lg:block h-1/2 my-auto border-l border-black" />
            <div className="hidden lg:flex mr-4 space-x-2 justify-center items-center">
              <div className="text-6xl">22</div>
              <div className="flex flex-col -space-y-1">
                <span>Satisfied</span>
                <span>Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 lg:mt-0 flex flex-col lg:flex-row lg:space-x-4 lg:items-end lg:justify-between">
        <ListFeat />
        <div className="order-first lg:order-last w-full h-auto lg:w-auto lg:h-112 rounded-2xl overflow-hidden ">
          <VideoPlayer />
        </div>
      </div>
    </Container>
  );
}
