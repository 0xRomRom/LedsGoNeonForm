import stl from "./App.module.css";

const App = () => {
  return (
    <div className={stl.app}>
      <div className={stl.brickBg}></div>
      <div className={stl.paddWrapper}>
        <button className={stl.burgerCta}>
          <img
            src="./images/Hamburger.svg"
            alt="Hamburger menu"
            className={stl.hamburger}
          />
        </button>
        <a href="https://ledsgoneon.nl">
          <img
            src="./images/Mainlogo.png"
            alt="Led's Go Neon logo"
            className={stl.mainLogo}
          />
        </a>
        <header className={stl.header}>
          <h1 className={stl.pageHero}>
            <span className={stl.pink}>Logo</span> samenstellen
          </h1>
          <h2 className={stl.subHero}>
            Stel hier vrijblijvend je eigen LED's Go Neon lamp samen
          </h2>
        </header>
      </div>
    </div>
  );
};

export default App;
