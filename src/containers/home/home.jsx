import Navigation from "../../components/Nabvar";
import LeftSidebar from "../../components/LeftSidebar";
import Content from "../../components/Content";
import RightSidebar from "../../components/RightSidebar";
// import CardComponent from "../../components/CardComponent";

import { useState } from "react";

import { Outlet } from "react-router-dom";

export default function HomeContainer() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };
  return (
    <div className="App-container">
      <Navigation openMenu={toggle} />
      <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />

        <RightSidebar />
      </main>
      <Outlet />
    </div>
  );
}
