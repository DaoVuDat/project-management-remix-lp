import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import {Link} from "@remix-run/react";

export function NavBarClient() {
  const [isOpen, setIsOpen] = useState(true);
  const [divScope, animate] = useAnimate();

  const handleOpen = () => {
    setIsOpen((s) => {
      return !s;
    });
  };

  useEffect(() => {
    if (isOpen) {
      animate(divScope.current, {
        height: 0,
        display: "lg:hidden",
      });
    } else {
      animate(divScope.current, {
        height: "calc(100vh - 96px)",
        display: "lg:hidden",
      });
    }
  }, [isOpen]);

  return (
    <>
      <div className="z-50 fixed p-6 top-0 left-0 w-screen lg:hidden bg-background-color">
        <div className="flex justify-between items-center">
          <Link className="group" to="/">
            <Logo className="h-12 w-auto" />
          </Link>
          <button onClick={() => setIsOpen((s) => !s)} className="text-lg">
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      <div
        ref={divScope}
        className="fixed h-0 top-24 left-0 z-40 flex w-screen flex-col justify-between lg:hidden bg-background-color overflow-hidden"
      >
        <div className="flex flex-col h-full space-y-12 justify-center items-center text-2xl">
          <button onClick={handleOpen}>Contact</button>
          <button onClick={handleOpen}>Projects</button>
          <button onClick={handleOpen}>Features</button>
          <button onClick={handleOpen}>Customers</button>
        </div>
        <div>
          <div className="h-1 w-full border-t border-slate-400" />
          <div className="h-20 w-full px-6 flex justify-around items-center ">
            <Button href="/login">
              <span>Login</span>
            </Button>

            <Button href="/register">
              <span>Sign Up Now</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
