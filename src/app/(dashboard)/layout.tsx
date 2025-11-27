"use client";
import React from "react";
import { SidebarLayout } from "@/components/layouts/sidebar-layout";
import NavbarLayout from "@/components/layouts/navbar-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full flex-col bg-neutral-50 md:flex-row dark:bg-neutral-900">
      <SidebarLayout />
      <div className="flex h-full flex-1 flex-col  rounded-tr-3xl ">
        <NavbarLayout />
        <main className="flex flex-1 overflow-hidden">
          <div className="flex h-full w-full flex-1 flex-col gap-2 overflow-y-auto rounded-tl-3xl rounded-tr-3xl bg-blue-50 p-2 md:p-7 dark:bg-neutral-900">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
