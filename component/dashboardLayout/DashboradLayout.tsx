import React from "react";
import DashboardRoutes from "../DasboardRoutes/DashBoardRoutes";

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardRoutes />
      {children}
    </div>
  );
};

export default DashboradLayout;
