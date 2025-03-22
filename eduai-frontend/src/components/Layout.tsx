// src/components/Layout.tsx
import Navbar from "./Navbar";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">{children}</main>
    </div>
  );
};

export default Layout;
