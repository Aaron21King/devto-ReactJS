import React, { useState } from "react";
import {
  FcHome,
  FcViewDetails,
  FcVideoCall,
  FcCheckmark,
  FcIdea,
  FcShop,
  FcLike,
  FcApprove,
  FcBinoculars,
  FcBusinessContact,
  FcReading,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";

const tags = [
  "react",
  "graphql",
  "nodejs",
  "sass",
  "javascript",
  "html",
  "css",
  "webdev",
  "opensource",
  "beginners",
  "python",
  "git",
  "vscode",
  "npm",
  "sql",
  "ubuntu",
  "aws",
];

const LeftSidebar = (props) => {
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <ul>
            <li>
              <a href="">
                <i>
                  <FcHome />
                </i>
                Home
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FcViewDetails />
                </i>
                Listings
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <AiFillAudio />
                </i>
                Podcasts
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FcVideoCall />
                </i>
                Videos
              </a>
            </li>

            <li>
              <a href="">
                <i>
                  <FaTags />
                </i>
                Tags
              </a>
            </li>

            <div>
              <li>
                <a href="">
                  <i>
                    <FcIdea />
                  </i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcShop />
                  </i>
                  Forem Shop
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcLike />
                  </i>
                  Sponsors
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FaDev />
                  </i>
                  About
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcBusinessContact />
                  </i>
                  Contact
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcReading />
                  </i>
                  Guides
                </a>
              </li>
              <header>
            <h3>Other</h3>

            <li>
                <a href="">
                  <i>
                    <FcCheckmark />
                  </i>
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcApprove />
                  </i>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcBinoculars />
                  </i>
                  Terms of use
                </a>
              </li>
          </header>
            </div>
          </ul>
        </nav>

        <div >
          <a className="logos">
            <i>
              <IoLogoTwitter />
            </i>
          </a>
          <a className="logos">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a className="logos">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a className="logos">
            <i>
              <RiInstagramFill />
            </i>
          </a>
          <a className="logos">
            <i>
              <RiTwitchLine />
            </i>
          </a>
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>Popular Tags</h3>
            <i>
              
            </i>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
              <button onClick={() => props.closeMenu()}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
              <nav classNano vi el slack me="leftBar__menu">
              <ul>
            <li>
              <a href="">
                <i>
                  <FcHome />
                </i>
                Home
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FcViewDetails />
                </i>
                Listings
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <AiFillAudio />
                </i>
                Podcasts
              </a>
            </li>
            <li>
              <a href="">
                <i>
                  <FcVideoCall />
                </i>
                Videos
              </a>
            </li>

            <li>
              <a href="">
                <i>
                  <FaTags />
                </i>
                Tags
              </a>
            </li>

            <div>
              <li>
                <a href="">
                  <i>
                    <FcIdea />
                  </i>
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcShop />
                  </i>
                  Forem Shop
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcLike />
                  </i>
                  Sponsors
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FaDev />
                  </i>
                  About
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcBusinessContact />
                  </i>
                  Contact
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcReading />
                  </i>
                  Guides
                </a>
              </li>
              <header>
            <h3>Other</h3>

            <li>
                <a href="">
                  <i>
                    <FcCheckmark />
                  </i>
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcApprove />
                  </i>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="">
                  <i>
                    <FcBinoculars />
                  </i>
                  Terms of use
                </a>
              </li>
          </header>
            </div>
          </ul>
              </nav>
              <div>
                <a className="logos">
                  <i>
                    <IoLogoTwitter />
                  </i>
                </a>
                <a className="logos">
                  <i>
                    <IoLogoFacebook />
                  </i>
                </a>
                <a className="logos">
                  <i>
                    <IoLogoGithub />
                  </i>
                </a>
                <a className="logos">
                  <i>
                    <RiInstagramFill />
                  </i>
                </a>
                <a className="logos">
                  <i>
                    <RiTwitchLine />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
