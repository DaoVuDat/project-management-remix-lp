import clsx from "clsx";

export interface BaseProp {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Container({ id, className, children, ...props }: BaseProp) {
  return (
    <div
      id={id}
      className={clsx(
        "mx-auto lg:max-w-7xl xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
