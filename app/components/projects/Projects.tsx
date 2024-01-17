import { Container } from "../shared/Container";
import clsx from "clsx";
import { Dot } from "~/components/shared/Dot";
import { useState } from "react";
import avoa from "~/assets/images/avoa_greenhouse.webp";
import poa from "~/assets/images/poa_cvrp.webp";
import alo from "~/assets/images/alo_site_layout.webp";
import dlgwo from "~/assets/images/dl_gwo_bim.webp";
import da from "~/assets/images/da_supply_chain.webp";
import { Project, ProjectType } from "./Project";
import { ProjectMobile } from "./ProjectMobile";

const projectsData: ProjectType[] = [
  {
    name: "AVOA Green House",
    description:
      "This project focuses on utilizing the African Vulture Optimization Algorithm (AVOA) to enhance environmental design decisions, specifically in the context of building and room design. The implementation involves a C# plugin for Rhino/Grasshopper, providing a powerful and flexible platform for parametric modeling.",
    img: avoa,
    title:
      "African Vulture Optimization Algorithm (AVOA) for Environmental Design",
    use: ["C#", "Grasshopper and Rhino 7", "AVOA"],
  },
  {
    name: "POA CVRP",
    description:
      "This project focuses on addressing the Capacitated Vehicle Routing Problem (CVRP) in the context of garbage collection within District 2, Ho Chi Minh City. The primary goal is to optimize the routes for a fleet of trucks to efficiently collect garbage from various locations while minimizing the total travel distance. The project integrates the Pelican Optimization Algorithm (POA) for route optimization, MATLAB for algorithm implementation, and Python for utilizing the GraphHopper API to visualize and draw the optimized routes on OpenStreetMap.",
    img: poa,
    title:
      "Pelican Optimization Algorithm (POA) for Optimized Garbage Collection Routing",
    use: ["MATLAB", "Python", "POA"],
  },
  {
    name: "ALO Construction Site Layout",
    description:
      "This project focuses on addressing the challenge of constructing an optimal layout for offices during the construction phase. The objective is to minimize the total distance between each office while considering the number of times individuals need to move between offices. The Ant Lion Optimizer Algorithm (ALO) is employed to efficiently solve the site layout optimization problem. The implementation is carried out using Python, providing a flexible and powerful platform for optimizing construction site layouts.",
    img: alo,
    title:
      "Optimal Construction Site Layout Using Ant Lion Optimizer Algorithm (ALO)",
    use: ["Python", "ALO"],
  },
  {
    name: "DL-GWO BIM",
    description:
      "This project aims to enhance Building Information Modeling (BIM) by integrating the Gray Wolf Optimizer Algorithm (GWO) and Deep Learning techniques. The objective is to optimize material and design choices for a building to minimize energy consumption while balancing the Predicted Percentage of Dissatisfied (PPD) through the Predicted Mean Vote (PMV) index. Python, along with PyTorch for GWO and deep learning, is employed to create a sophisticated and efficient solution.",
    img: dlgwo,
    title:
      "Optimizing Building Information Modeling (BIM) with Gray Wolf Optimizer Algorithm (GWO) and Deep Learning",
    use: ["Python", "Pytorch", "GWO"],
  },
  {
    name: "DA Supply Chain",
    description:
      "This project focuses on addressing supply chain challenges in the construction industry by leveraging the Dragonfly Algorithm (DA) to optimize material ordering strategies. The objective is to determine the optimal frequency for material orders, either daily or at specific intervals, to minimize the total construction cost. The implementation is carried out using MATLAB, providing a robust environment for mathematical modeling and algorithm development.",
    img: da,
    title:
      "Supply Chain Management with Dragonfly Algorithm (DA) for Cost-Efficient Construction",
    use: ["MATLAB", "DA"],
  },
];

export function Projects({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  const [selectedId, setSelectedId] = useState(0);

  const highlight = " text-black drop-shadow-md ";
  const notHighlight = " group text-slate-700 ";

  return (
    <Container id={id} className={className}>
      <h1
        className={clsx(
          "text-center text-4xl py-4 lg:text-5xl lg:tracking-wider lg:py-8",
          "font-lato",
        )}
      >
        Top Projects
        <Dot color="text-secondary" />
      </h1>
      <div className="mt-4">
        <ul className="hidden lg:flex lg:flex-row lg:justify-center lg:space-x-16">
          {projectsData.map((project, index) => (
            <button
              onClick={() => setSelectedId(index)}
              key={project.name}
              className={clsx(
                selectedId == index && highlight,
                selectedId != index && notHighlight,
                " cursor-pointer transition duration-300 relative pb-1",
              )}
            >
              {project.name}
              <span
                className={clsx(
                  "transition-all duration-300 opacity-0  w-full absolute h-0.5 bg-slate-500 left-0",
                  selectedId == index && " opacity-100 bottom-0 ",
                  selectedId != index &&
                    " -bottom-1 group-hover:-bottom-0 group-hover:opacity-100",
                )}
              />
            </button>
          ))}
        </ul>
      </div>
      <Project className="mt-16" project={projectsData[selectedId]} />
      <div className="flex flex-col space-y-8 lg:hidden">
        {projectsData.map((project) => (
          <ProjectMobile project={project} key={project.name} />
        ))}
      </div>
    </Container>
  );
}
