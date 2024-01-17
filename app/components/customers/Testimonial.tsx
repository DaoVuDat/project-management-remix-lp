import { BaseProp, Container } from "../shared/Container";
import clsx from "clsx";
import { Dot } from "~/components/shared/Dot";
import { TestimonialCustomer } from "~/components/customers/Card";
import { Carousel } from "~/components/customers/Carousel";

const testimonials: TestimonialCustomer[] = [
  {
    content:
      "Our team has been using Project Management Tracking for the past six months, and it has significantly streamlined our project management process.",
    name: "John S.",
    title: "Software Engineering",
  },
  {
    content:
      "As a small business owner, finding a project management tool that suits our needs and budget was crucial. Project Management Tracking exceeded our expectations.",
    name: "Sarah M.",
    title: "Small Business Owner",
  },
  {
    content:
      "I've tried several project management tools over the years, and Project Management Tracking stands out for its robust features and flexibility.",
    name: "Alex R.",
    title: "IT Professional",
  },
  {
    content:
      "For our marketing team, Project Management Tracking has been a game-changer.",
    name: "Emily G.",
    title: "Marketing Coordinator",
  },
  {
    content:
      "Being a freelancer, I needed a project management tool that's straightforward and doesn't overwhelm me with unnecessary features.",
    name: "David H.",
    title: "Freelancer",
  },
];

export function Testimonial({ id, className }: BaseProp) {
  return (
    <div id={id} className={className}>
      <Container>
        <h2
          className={clsx(
            "text-center text-4xl lg:text-5xl tracking-wider pb-8",
            "font-lato",
          )}
        >
          What our customers say
          <Dot color="text-secondary" />
        </h2>
      </Container>
      <Carousel testimonials={testimonials} />
    </div>
  );
}
