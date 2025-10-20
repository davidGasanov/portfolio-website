import type React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-dark-primary text-light-secondary min-w-screen min-h-screen">
      {children}
    </main>
  );
};

export default MainLayout;
