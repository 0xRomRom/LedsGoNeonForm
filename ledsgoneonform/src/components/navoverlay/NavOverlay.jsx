import stl from "./NavOverlay.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const NavOverlay = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [showDroplist, setShowDroplist] = useState(false);

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
              href="https://ledsgoneon.nl/tekst-samenstellen/"
              rel="noreferrer"
              onClick={() =>
                (window.location.href =
                  "https://ledsgoneon.nl/tekst-samenstellen/")
              }
            >
              Tekst Samenstellen
            </a>
          </li>

          <li
            className={stl.navLink}
            onMouseOver={() => setHoveredState("Logo Samenstellen")}
            onMouseLeave={() => setHoveredState(null)}
          >
            <FaArrowRight className={stl.arrowright} />
            <a
              className={`${stl.anchor} ${
                hoveredState === "Logo Samenstellen" ? stl.active : ""
              }`}
              href="https://ledsgoneon.nl/logo-samenstellen/"
              rel="noreferrer"
              onClick={() =>
                (window.location.href =
                  "https://ledsgoneon.nl/logo-samenstellen/")
              }
            >
              Logo Samenstellen
            </a>
          </li>

          <li
            className={stl.navLink}
            onMouseOver={() => setHoveredState("Projecten")}
            onMouseLeave={() => setHoveredState(null)}
          >
            <FaArrowRight className={stl.arrowright} />
            <a
              className={`${stl.anchor} ${
                hoveredState === "Projecten" ? stl.active : ""
              }`}
              href="https://ledsgoneon.nl/projecten/"
              rel="noreferrer"
              onClick={() =>
                (window.location.href = "https://ledsgoneon.nl/projecten/")
              }
            >
              Projecten
            </a>
          </li>

          <li
            className={stl.navLink}
            onMouseOver={() => setHoveredState("Inspiratie")}
            onMouseLeave={() => setHoveredState(null)}
          >
            <FaArrowRight className={stl.arrowright} />
            <a
              className={`${stl.anchor} ${
                hoveredState === "Inspiratie" ? stl.active : ""
              }`}
              href="https://ledsgoneon.nl/inspiratie/"
              rel="noreferrer"
              onClick={() =>
                (window.location.href = "https://ledsgoneon.nl/inspiratie/")
              }
            >
              Inspiratie
            </a>
          </li>

          <li
            className={`${stl.navLink} ${stl.overons} ${
              showDroplist ? stl.rotate : ""
            }`}
            onMouseOver={() => setHoveredState("Over ons")}
            onMouseLeave={() => setHoveredState(null)}
          >
            <FaArrowRight className={stl.arrowright} />
            <a
              className={`${stl.anchor} ${
                hoveredState === "Over ons" ? stl.active : ""
              }`}
              onClick={() => setShowDroplist(!showDroplist)}
            >
              Over ons
              <div
                className={`${stl.droplist} ${
                  showDroplist ? stl.showDrop : ""
                }`}
              >
                <a
                  className={stl.innerDropItem}
                  href="https://ledsgoneon.nl/over-ons/"
                  rel="noreferrer"
                  onClick={() =>
                    (window.location.href = "https://ledsgoneon.nl/over-ons/")
                  }
                >
                  Over ons
                </a>
                <a
                  className={stl.innerDropItem}
                  href="https://ledsgoneon.nl/productieproces/"
                  rel="noreferrer"
                  onClick={() =>
                    (window.location.href =
                      "https://ledsgoneon.nl/productieproces/")
                  }
                >
                  Productieproces
                </a>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className={stl.backdrop}></div>
    </div>
  );
};

export default NavOverlay;
