import clsx from "clsx";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


export interface ProjectType {
  name: string;
  description: string;
  img: string;
  title: string;
  use: string[];
}

interface ProjectProp {
  className?: string;
  project?: ProjectType;
}

export function Project({ project, className }: ProjectProp) {
  return (
    <div className={clsx("hidden lg:flex", className)}>
      <div className="shrink-0 w-96 h-96">
        <img
          key={project!.name}
          src={project!.img}
          alt={project!.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative px-10">
        <h3 className="text-center text-3xl">{project!.name}</h3>
        <p className="mt-2 leading-loose">{project!.description}</p>
        <div className="flex flex-col mt-2 font-bold">
          <div>Uses:</div>
          <ul>
            {project!.use.map((tech) => (
              <li
                key={tech}
                className="flex items-center space-x-2 text-lg leading-loose mt-1"
              >
                <IoCheckmarkDoneSharp />
                <span className="text-base">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
