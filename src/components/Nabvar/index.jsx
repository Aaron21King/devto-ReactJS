// import React, { useState } from "react";
import { FaDev } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Navigation = (props) => {
  let navigate = useNavigate();
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
          <button onClick={() => navigate("/create")}> Create post</button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
