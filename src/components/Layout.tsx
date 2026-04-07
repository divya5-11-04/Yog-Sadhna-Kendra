import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import FloatingSupport from "./FloatingSupport";

export default function Layout() {
  return (
    <>
      <Navigation />
      <FloatingSupport />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}