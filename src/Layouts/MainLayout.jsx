import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import FloatingMenu from "../components/FloatingMenu";
import GalaxyBg from "../utils/GalaxyBg";

const MainLayout = () => {
  return (
    <>
      <GalaxyBg>
        <Outlet />
        <Footer />
      </GalaxyBg>

      {/* Always Top */}
      <FloatingMenu />
    </>
  );
};

export default MainLayout;
