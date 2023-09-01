import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default layout;
