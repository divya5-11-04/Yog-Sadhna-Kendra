import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation"; // Adjust path if needed

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}