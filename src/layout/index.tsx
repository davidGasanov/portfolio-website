import type React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="overflow-x-hidden">{children}</main>;
};

export default MainLayout;
