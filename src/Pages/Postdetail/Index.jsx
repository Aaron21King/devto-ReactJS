import { FaDev } from "react-icons/fa";

import "./Postdetail.scss"

import Leftbar from "./Components/Leftbar";
import Post from "./Components/Post";
import Righttbar from "./Components/Rightbar";


export default function Postdetail () {
    return (
      
   <div className="completo">
      <header className="header">
      <div className="headerContainer">
      <div
    className="headerContainer__hamburgerMenu"
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
  <div className="mainbody">

  <Leftbar/>

    <Post/>

  <Righttbar/>

    </div>

  </div>

  )}
