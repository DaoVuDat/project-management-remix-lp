import { Card, TestimonialCustomer } from "./Card";
import {useState, useRef, useLayoutEffect, useEffect} from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { Container } from "../shared/Container";
import useWindowDimensions from "../../hooks/useWindowDimension";

export function Carousel({
  testimonials,
}: {
  testimonials: TestimonialCustomer[];
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const dimension = useWindowDimensions();

  const x = useMotionValue(0);
  const diff = carouselWidth - screenWidth;
  let velocity = 100; // 450px for slider
  if (dimension.width! > 1280) {
    velocity = 350;
  } else if (dimension.width! > 768) {
    velocity = 400;
  } else if (dimension.width! > 300) {
    velocity = dimension.width! + 8;
  }

  const next = () => {
    if (x.get() <= 0) {
      const willMove = x.get() - velocity;
      if (willMove > -diff) {
        animate(x, willMove);
      } else {
        animate(x, -diff);
      }
    }
  };

  const prev = () => {
    if (x.get() >= -diff) {
      const willMove = x.get() + velocity;
      if (willMove < 0) {
        animate(x, willMove);
      } else {
        animate(x, 0);
      }
    }
  };

  useEffect(() => {
    setCarouselWidth(ref.current!.scrollWidth);
    setScreenWidth(ref.current!.offsetWidth);
  }, []);

  return (
    <Container>
      <ul ref={ref} className="mt-8 flex space-x-10 overflow-x-hidden">
        {testimonials.map((t) => (
          <motion.li
            className="w-full md:w-80 lg:w-96 shrink-0 grow-0"
            style={{ x: x }}
            key={t.name}
          >
            <Card testimonialCustomer={t} />
          </motion.li>
        ))}
      </ul>
      <Container className="mt-16">
        <div className="flex text-3xl lg:text-2xl justify-center items-stretch space-x-12 lg:space-x-8">
          <button
            className="p-3 cursor-pointer rounded-full border border-slate-400 lg:border-transparent lg:transition lg:duration-300 lg:hover:border-slate-400"
            onClick={prev}
          >
            <HiArrowSmallLeft />
          </button>
          <button
            className="p-3 cursor-pointer rounded-full border border-slate-400 lg:border-transparent lg:transition lg:duration-300 lg:hover:border-slate-400"
            onClick={next}
          >
            <HiArrowSmallRight />
          </button>
        </div>
      </Container>
    </Container>
  );
}
