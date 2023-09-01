"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "@/utils/classNames";

const NavLink = ({ children, href, activeClassName, ...props }) => {
  const path = usePathname();
  const active = path.startsWith(href);
  const classes = classNames(props.className, active && activeClassName);
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
