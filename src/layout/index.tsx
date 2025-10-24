import type React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="overflow-x-hidden overflow-y-clip">{children}</main>;
};

export default MainLayout;
