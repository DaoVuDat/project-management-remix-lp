import clsx from "clsx";

export function Dot({ color }: { color?: string }) {
  return <span className={clsx("font-varela", color)}>.</span>;
}
