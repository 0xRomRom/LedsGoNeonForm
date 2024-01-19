import stl from "./App.module.css";
import UploadModal from "./components/UploadModal/UploadModal";

import { useEffect, useState } from "react";
import ImageEditor from "./components/ImageEditor/ImageEditor";
import RequestCalculation from "./components/RequestCalculation/RequestCalculation";
import LongestRow from "./components/LongestRow/LongestRow";
import LedKind from "./components/LedKind/LedKind";

const App = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [cutUploadedImg, setCutUploadedImg] = useState(null);
  const [showRequestModal, setShowRequestModal] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(null);
  const [longestSide, setLongestSide] = useState(null);
  const [wantsCalculation, setWantsCalculation] = useState(null);

  const handleDragOver = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleClickDefault = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(showRequestModal);
  }, [showRequestModal]);

  return (
    <div
      className={stl.app}
      onClick={handleClickDefault}
      onDragOver={handleDragOver}
    >
      {showRequestModal && uploadedImg && !aspectRatio && (
        <ImageEditor
          uploadedImg={uploadedImg}
          setUploadedImg={setUploadedImg}
          setShowRequestModal={setShowRequestModal}
          setAspectRatio={setAspectRatio}
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
            Stel hier vrijblijvend je eigen LED's Go Neon lamp samen
          </h2>
        </header>
        <main className={stl.mainApp}>
          <UploadModal
            handleDragLeave={handleDragLeave}
            isDraggingOver={isDraggingOver}
            setUploadedImg={setUploadedImg}
            uploadedImg={uploadedImg}
            setShowRequestModal={setShowRequestModal}
          />
          {uploadedImg && (
            <RequestCalculation
              setShowRequestModal={setShowRequestModal}
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
              wantsCalculation={wantsCalculation}
              setWantsCalculation={setWantsCalculation}
            />
          )}
          {wantsCalculation !== null && (
            <LongestRow setLongestSide={setLongestSide} />
          )}
          {longestSide && <LedKind />}
        </main>
      </div>
    </div>
  );
};

export default App;
