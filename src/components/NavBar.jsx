import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
const navlink = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
];
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto">
      <h1 className="text-3xl font-semibold">Learning NextJs </h1>
      <ul className="flex justify-center items-center gap-3">
        {navlink.map(({ path, name }) => (
          <li key={path}>
            <NavLink href={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
