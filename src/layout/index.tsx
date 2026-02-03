import type React from "react";
import Header from "../components/layout/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden overflow-y-clip">{children}</main>
    </>
  );
};

export default MainLayout;
