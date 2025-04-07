import React from "react";
import TopBar from "./TopBar";
import NavigationBar from "./NavigationBar";

const Header: React.FC = () => {
  return (
    <>
      <TopBar />
      <NavigationBar />
    </>
  );
};

export default Header;