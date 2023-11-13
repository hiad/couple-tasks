"use client";

import { type Session } from "next-auth";
import Link from "next/link";
import clsx from "clsx";
import { Home, LogIn, LogOut, User } from "react-feather";
import { useWindowSize } from "usehooks-ts";

const navigationData = [
  {
    title: "Home",
    icon: <Home />,
    slug: "/",
    logged: false,
  },
  {
    title: "Profile",
    icon: <User />,
    slug: "/user/",
    logged: true,
  },
  {
    title: "Sign Out",
    icon: <LogOut />,
    slug: "/api/auth/signout",
    logged: true,
  },
  {
    title: "Sign In",
    icon: <LogIn />,
    slug: "/api/auth/signin",
    logged: false,
  },
];

function Navigation({
  open,
  session,
}: {
  open: boolean;
  session: Session | null;
}) {
  const mobileBase = "z-[9] items-center justify-center duration-700 fixed";
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const navClassName = clsx(
    isMobile && mobileBase,
    isMobile &&
      (open ? "opacity-95 w-screen h-screen bg-gray-900" : "opacity-0 h-0 w-0"),
    !isMobile && "w-full flex flex-col items-end",
  );

  return (
    <nav className={navClassName}>
      <ul className="flex flex-col gap-10 md:flex-row">
        {navigationData
          .filter(({ logged }) => (session ? logged : !logged))
          .map(({ slug, title }) => (
            <li key={slug}>
              <Link href={slug}>{title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navigation;
