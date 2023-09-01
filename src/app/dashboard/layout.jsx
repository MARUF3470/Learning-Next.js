import React from "react";
import Sidebar from "./Sidebar";
export const metadata = {
  title: "Dashboard | Learning NextJs",
  description: "Learning NextJs",
};
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
