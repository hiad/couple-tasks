import React from "react";
import { getServerAuthSession } from "@/server/auth";
import Menu from "./menu";
import Link from "next/link";

async function Header() {
  const session = await getServerAuthSession();
  return (
    <header className="flex md:mb-8 md:mr-8 md:mt-8">
      <Link className="ml-2 mt-2" href="/">
        <h1 className=" flex-1 text-xl">Tasks</h1>
      </Link>
      <Menu session={session} />
    </header>
  );
}

export default Header;
