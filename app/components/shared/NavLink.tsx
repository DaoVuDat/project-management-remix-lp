import {Link} from "@remix-run/react";


interface NavLink {
  href: string;
  children?: React.ReactNode;
}

export function NavLink({ href, children }: NavLink) {
  return (
    <Link
      className="inline-block px-2 text-slate-900 transition-all duration-300 hover:shadow-[inset_0_-9px#FD841F] xl:hover:shadow-[inset_0_-11px#FD841F]"
      to={href}
    >
      {children}
    </Link>
  );
}
