import Navigation from "./components/Nabvar";
import LeftSidebar from "./components/LeftSidebar";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import { useState } from "react";
import "../src/App.scss";

function App() {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <>
      <Navigation openMenu={toggle} />

      <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
}

export default App;
