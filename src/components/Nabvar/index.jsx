// import React, { useState } from "react";
import { FaDev } from "react-icons/fa";

const Navigation = (props) => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={() => props.openMenu()}
        ></div>
        <a href="https://dev.to" className="headerContainer__logo">
          <FaDev size="3.125rem" />
        </a>
        <div className="headerContainer__searchBox">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="headerContainer__right">
          <button>Log in</button>
          <button>Create account</button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
