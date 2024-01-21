import stl from "./NavOverlay.module.css";

const NavOverlay = () => {
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
          <li>
            <a className={stl.navLink}>Home</a>
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
