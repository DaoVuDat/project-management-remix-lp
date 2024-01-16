export interface TestimonialCustomer {
  content: string;
  name: string;
  title: string;
}

interface CardProp {
  testimonialCustomer: TestimonialCustomer;
}

export function Card({
  testimonialCustomer: { content, name, title },
}: CardProp) {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl py-6 px-8">
      <div className="before:content-['\02BA'] after:content-['\02BA']">
        {content}
      </div>
      <div className="flex flex-col items-end">
        <div className="font-bold">{name}</div>
        <div className="text-sm font-bold text-secondary">{title}</div>
      </div>
    </div>
  );
}
