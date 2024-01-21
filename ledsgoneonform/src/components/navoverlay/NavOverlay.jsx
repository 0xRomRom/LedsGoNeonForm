import stl from "./NavOverlay.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const NavOverlay = () => {
  const [hoveredState, setHoveredState] = useState(null);

  return (
    <div className={stl.navOverlay}>
      <div className={stl.topbar}>
        <button className={stl.closeCta}>
          <img
            src="./images/Close.svg"
            atl="Close modal"
            className={stl.closeX}
          />
        </button>
      </div>
      <div className={stl.innerLinks}>
        <ul className={stl.links}>
          <li className={stl.navLink}>
            <FaArrowRight className={`${stl.arrowright} ${stl.showArrow}`} />
            <a
              className={`${stl.anchor} ${stl.active}`}
              href="https://ledsgoneon.nl/"
              rel="noreferrer"
              onClick={() => (window.location.href = "https://ledsgoneon.nl")}
            >
              Home
            </a>
          </li>
          <li
            className={stl.navLink}
            onMouseOver={() => setHoveredState("Tekst Samenstellen")}
            onMouseLeave={() => setHoveredState(null)}
          >
            <FaArrowRight className={stl.arrowright} />
            <a
              className={`${stl.anchor} ${
                hoveredState === "Tekst Samenstellen" ? stl.active : ""
              }`}
              href="https://ledsgoneon.nl/"
              rel="noreferrer"
              onClick={() => (window.location.href = "https://ledsgoneon.nl")}
            >
              Home
            </a>
          </li>
          <li>
            <a className={stl.navLink}></a>
          </li>
          <li>
            <a className={stl.navLink}></a>
          </li>
          <li>
            <a className={stl.navLink}></a>
          </li>
          <li>
            <a className={stl.navLink}></a>
          </li>
        </ul>
      </div>
      <div className={stl.backdrop}></div>
    </div>
  );
};

export default NavOverlay;
