"use client";

import { Menu, X } from "react-feather";
import React from "react";
import { type Session } from "next-auth";
import Navigation from "./navigation";

function MobileMenu({ session }: { session: Session | null }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        className="font-white z-[10] mr-2 mt-2 md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <X /> : <Menu />}
      </div>
      <Navigation open={open} session={session} />
    </>
  );
}

export default MobileMenu;
