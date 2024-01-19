import stl from "./App.module.css";
import UploadModal from "./components/UploadModal/UploadModal";

import { useState } from "react";
import ImageEditor from "./components/ImageEditor/ImageEditor";
import RequestCalculation from "./components/RequestCalculation/RequestCalculation";
import LongestRow from "./components/LongestRow/LongestRow";
import LedKind from "./components/LedKind/LedKind";

const App = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [cutUploadedImg, setCutUploadedImg] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(null);
  const [longestSide, setLongestSide] = useState(null);
  const [progressState, setProgressState] = useState(0);
  const [toggleIconBool, setToggleIconBool] = useState(false);

  const handleDragOver = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleClickDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={stl.app}
      onClick={handleClickDefault}
      onDragOver={handleDragOver}
    >
      {uploadedImg && !aspectRatio && progressState === 0 && (
        <ImageEditor
          uploadedImg={uploadedImg}
          setUploadedImg={setUploadedImg}
          setAspectRatio={setAspectRatio}
          setProgressState={setProgressState}
          setToggleIconBool={setToggleIconBool}
        />
      )}
      <div className={stl.brickBg}>
        <div className={stl.transition}></div>
      </div>
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
            Stel hier <span className={stl.green}>vrijblijvend</span> je eigen
            LED's Go Neon lamp samen
          </h2>
        </header>
        <main className={stl.mainApp}>
          <UploadModal
            handleDragLeave={handleDragLeave}
            isDraggingOver={isDraggingOver}
            setUploadedImg={setUploadedImg}
            uploadedImg={uploadedImg}
            setProgressState={setProgressState}
            progressState={progressState}
            setAspectRatio={setAspectRatio}
            setLongestSide={setLongestSide}
            setToggleIconBool={setToggleIconBool}
          />
          {uploadedImg && progressState >= 1 && (
            <RequestCalculation
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
              setProgressState={setProgressState}
              toggleIconBool={toggleIconBool}
              setToggleIconBool={setToggleIconBool}
              setLongestSide={setLongestSide}
            />
          )}
          {progressState >= 3 && (
            <LongestRow
              setLongestSide={setLongestSide}
              setProgressState={setProgressState}
              longestSide={longestSide}
            />
          )}
          {progressState === 4 && longestSide && <LedKind />}
        </main>
      </div>
    </div>
  );
};

export default App;
