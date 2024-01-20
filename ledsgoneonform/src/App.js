import stl from "./App.module.css";
import { TiArrowLeftThick } from "react-icons/ti";
import React, { useEffect, useState } from "react";

import UploadModal from "./components/UploadModal/UploadModal";
import ImageEditor from "./components/ImageEditor/ImageEditor";
import RequestCalculation from "./components/RequestCalculation/RequestCalculation";
import LongestRow from "./components/LongestRow/LongestRow";
import LedKind from "./components/LedKind/LedKind";
import BackplateType from "./components/BackplateType/BackplateType";
import BackplateShape from "./components/BackplateShape/BackplateShape";
import Mounting from "./components/Mounting/Mounting";
import IndoorOutdoor from "./components/IndoorOutdoor/IndoorOutdoor";
import SmallForm from "./components/SmallForm/SmallForm";
import CurrentOverview from "./CurrentOverview/CurrentOverview";

const App = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [cutUploadedImg, setCutUploadedImg] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(null);
  const [longestSide, setLongestSide] = useState(null);
  const [progressState, setProgressState] = useState(0);
  const [toggleIconBool, setToggleIconBool] = useState(false);
  const [ledType, setLedType] = useState(null);
  const [backplateType, setBackplateType] = useState(null);
  const [backplateShape, setBackplateShape] = useState(null);
  const [mountType, setMountType] = useState(null);
  const [indoorOutdoor, setIndoorOutdoor] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [notice, setNotice] = useState(null);
  const [priceEstimate, setPriceEstimate] = useState(null);
  const [RGBPrice, setRGBPrice] = useState(null);

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
    console.log("Progress state: ", progressState);
    if (progressState > 0) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [progressState]);

  useEffect(() => {
    const length = longestSide?.slice(0, -2);
    let priceCalculation = 0;

    if (length) {
      priceCalculation = 0.425 * length * aspectRatio + 200;
    }

    console.log("Ledtype: ", ledType);
    console.log("Aspect ratio: ", aspectRatio);
    console.log("Price calculation BEFORE multiplier: ", priceCalculation);
    console.log("RGB Price increase: ", priceCalculation * 0.4);
    setRGBPrice(priceCalculation * 0.4);
    if (ledType && ledType === "RGB") {
      priceCalculation *= 1.4;
    }
    if (ledType && ledType === "Single color") {
      priceCalculation *= 1;
    }
    console.log("Price calculation AFTER multiplier: ", priceCalculation);

    setPriceEstimate(priceCalculation);
  }, [aspectRatio, ledType, longestSide]);

  return (
    <div
      className={stl.app}
      onClick={handleClickDefault}
      onDragOver={handleDragOver}
    >
      {priceEstimate && aspectRatio && (
        <CurrentOverview
          priceEstimate={priceEstimate}
          ledType={ledType}
          RGBPrice={RGBPrice}
        />
      )}
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
          {progressState > 0 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {uploadedImg && progressState >= 1 && (
            <RequestCalculation
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
              setProgressState={setProgressState}
              toggleIconBool={toggleIconBool}
              setToggleIconBool={setToggleIconBool}
              setLongestSide={setLongestSide}
              setPriceEstimate={setPriceEstimate}
            />
          )}
          {progressState === 1 ||
            (progressState >= 3 && (
              <TiArrowLeftThick className={stl.activeArrow} />
            ))}
          {progressState >= 3 && (
            <LongestRow
              setLongestSide={setLongestSide}
              setProgressState={setProgressState}
              longestSide={longestSide}
              aspectRatio={aspectRatio}
            />
          )}
          {progressState >= 4 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {progressState >= 4 && longestSide && (
            <LedKind
              setLedType={setLedType}
              setProgressState={setProgressState}
            />
          )}
          {progressState >= 5 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {progressState >= 5 && (
            <BackplateType
              setProgressState={setProgressState}
              setBackplateType={setBackplateType}
            />
          )}
          {progressState >= 6 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {progressState >= 6 && (
            <BackplateShape
              setBackplateShape={setBackplateShape}
              setProgressState={setProgressState}
            />
          )}
          {progressState >= 7 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {progressState >= 7 && (
            <Mounting
              setProgressState={setProgressState}
              setMountType={setMountType}
            />
          )}
          {progressState >= 8 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {progressState >= 8 && (
            <IndoorOutdoor
              setIndoorOutdoor={setIndoorOutdoor}
              setProgressState={setProgressState}
            />
          )}
          {progressState >= 9 && (
            <TiArrowLeftThick className={stl.activeArrow} />
          )}
          {progressState === 9 && (
            <SmallForm
              setName={setName}
              name={name}
              setEmail={setEmail}
              email={email}
              setProgressState={setProgressState}
              setNotice={setNotice}
              notice={notice}
              ledType={ledType}
              backplateType={backplateType}
              backplateShape={backplateShape}
              mountType={mountType}
              indoorOutdoor={indoorOutdoor}
              uploadedImg={uploadedImg}
              cutUploadedImg={cutUploadedImg}
              longestSide={longestSide}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
