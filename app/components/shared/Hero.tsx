import clsx from "clsx";
import { Container } from "./Container";
import { Dot } from "./Dot";
import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/hero2.webp";
import hero3 from "../../assets/images/hero3.webp";

function HeroImageCover({
  src,
  alt,
  highlight = false,
  className,
  horizontalText,
  verticalText,
}: {
  verticalText?: React.ReactNode;
  horizontalText?: React.ReactNode;
  src: string ;
  alt: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mt-8 lg:mt-0 group/inner lg:inline-block lg:h-himg lg:duration-700 lg:transition-all lg:border lg:border-transparent " +
          "lg:ease-in-out rounded-3xl overflow-hidden relative",

        {
          "lg:w-2/3 peer-hover:lg:w-1/6 ": highlight,
          "lg:w-1/6 lg:hover:w-2/3 peer ": !highlight,
        },
        className,
        "after:block after:rounded-3xl after:bg-gradient-to-t " +
          "after:from-slate-900 after:w-full after:h-full after:absolute after:top-0 after:left-0 " +
          "after:z-10",
      )}
    >
      {!highlight && (
        <div
          className={clsx(
            "hidden lg:block absolute bottom-10 text-3xl opacity-100 left-16 orient " +
              "transform -translate-x-1/2 text-white z-20 " +
              "group-hover/inner:animate-fadeOut animate-fadeIn rotate-180",
          )}
        >
          {verticalText}
        </div>
      )}
      <div
        className={clsx(
          "absolute bottom-10 left-0 text-3xl  transition-all " +
            "duration-500 text-white z-20 ",
          {
            "w-full opacity-100 peer-hover:group-[]/inner:opacity-0 text-center":
              highlight,
            "w-full lg:w-96 opacity-100 text-center lg:text-left lg:opacity-0 group-hover/inner:lg:opacity-100 lg:left-10":
              !highlight,
          },
        )}
      >
        {horizontalText}
      </div>

      <img
        src={src}
        alt={alt}
        className={clsx("w-full h-full object-cover object-center")}
      />
    </div>
  );
}

export function Hero() {
  return (
    <Container className="pt-32 lg:pt-0 lg:mt-0">
      <div className="relative flex flex-col space-y-4 lg:space-y-0 lg:flex-row">
        <div className="order-last mt-16 lg:mt-0 lg:bottom-16 lg:left-0 lg:absolute lg:w-2/5 lg:h-32 bg-white z-30 flex ">
          <div
            className="transition duration-300 flex-1 border-t-2 border-l-2 border-b-2 border-transparent
          has-[:focus]:border-secondary has-[:focus]:shadow-2xl"
          >
            <input
              type="text"
              placeholder="Get Started: Enter Your Email"
              className="outline-none w-full h-full px-4 py-2 lg:px-8 lg:py-4 text-base lg:text-lg
              placeholder:text-black focus:placeholder:text-slate-400"
            />
          </div>
          <button
            className="group block relative transition-all duration-300 h-16 w-16 text-xl lg:h-32 lg:w-32 bg-secondary2 lg:text-3xl
            cursor-pointer shadow-[inset_0_150px_0_0_#FD841F]
          font-semibold hover:shadow-[inset_0_150px_0_-150px_#FD841F]"
          >
            Go
          </button>
        </div>
        <div className="lg:w-1/3">
          <h1
            className={clsx(
              "text-6xl lg:pt-16 lg:text-7xl lg:tracking-wide lg:leading-[1.2]",
              "font-lato",
            )}
          >
            Optimize
            <Dot />
            <br />
            Track
            <Dot />
            <br />
            Succeed
            <Dot />
          </h1>
        </div>
        <div className="group flex flex-col lg:w-2/3 lg:flex-row lg:h-himg lg:justify-between lg:gap-x-4">
          <HeroImageCover
            horizontalText={
              <>
                Strategic Ingenuity <br /> in Action
              </>
            }
            verticalText={"Solving"}
            src={hero2}
            alt="Hero Image 2"
          />
          <HeroImageCover
            horizontalText={
              <>
                Precision in
                <br />
                Every Project
              </>
            }
            verticalText={"Solution"}
            src={hero3}
            alt="Hero Image 3"
          />
          <HeroImageCover
            src={hero1}
            alt="Hero Image 1"
            highlight={true}
            horizontalText={
              <>
                Problem
                <br />
                Definition
              </>
            }
            className="order-first"
          />
        </div>
      </div>
    </Container>
  );
}
