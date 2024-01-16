
import clsx from "clsx";
import {Link} from "@remix-run/react";

const baseStyle = "";

interface ButtonProp {
  children?: React.ReactNode;
  href?: string;
}

export function Button({ children, href, ...props }: ButtonProp) {
  return href ? (
    <Link
      className="group inline-flex font-semibold items-center justify-center rounded-full py-3 px-6 bg-[#FD841F] text-white xl:text-base
        focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 lg:shadow-[inset_0_50px_0_0px_#001253] xl:shadow-[inset_0_70px_0_0px_#001253]
        hover:text-slate-900 relative transition-all duration-300 hover:shadow-[inset_0_50px_0_-50px_#001253] xl:hover:shadow-[inset_0_70px_0_-70px_#001253]"
      to={href}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button className={clsx(baseStyle)} {...props}>
      {children}
    </button>
  );
}
