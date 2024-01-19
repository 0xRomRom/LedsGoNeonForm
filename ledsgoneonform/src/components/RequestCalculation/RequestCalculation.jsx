import stl from "./RequestCalculation.module.css";
import { BsAspectRatio } from "react-icons/bs";
import { CgExpand } from "react-icons/cg";
import { useState } from "react";

const RequestCalculation = ({
  aspectRatio,
  setAspectRatio,
  wantsCalculation,
  setProgressState,
  progressState,
  toggleIconBool,
  setToggleIconBool,
}) => {
  const handleNoThanks = () => {
    setProgressState(3);
    setToggleIconBool(true);
  };
  return (
    <div
      className={`${stl.requestcalculation} ${
        toggleIconBool ? stl.folded : ""
      } ${aspectRatio > 0 ? stl.checked : ""}`}
    >
      {toggleIconBool && (
        <CgExpand
          className={stl.expander}
          onClick={() => {
            setToggleIconBool(false);
            setProgressState(2);
          }}
        />
      )}
      <h3 className={stl.hero}>
        {!aspectRatio && (
          <>
            Wilt u een <span className={stl.green}>prijsschatting</span> maken?
          </>
        )}
        {aspectRatio && !toggleIconBool && (
          <div className={stl.aspectFlex}>
            <span className={stl.opgeslagen}>Afmetingen opgeslagen</span>
            <span className={stl.verhoudingenSpan}>
              Verhouding {aspectRatio.toFixed(2)}{" "}
              <BsAspectRatio className={stl.aspectIcon} />
            </span>
            <span
              className={stl.berekenOpnieuw}
              onClick={() => {
                setAspectRatio(null);
                setProgressState(3);
              }}
            >
              Bereken opnieuw
            </span>
          </div>
        )}
      </h3>
      {!aspectRatio && !toggleIconBool && (
        <div className={stl.ctaWrap}>
          <div className={stl.btnBackground}>
            <button
              className={`${stl.cta} ${stl.cta2}`}
              onClick={handleNoThanks}
            >
              Nee bedankt
            </button>
          </div>
          <div className={stl.btnBackground}>
            <button
              className={`${stl.cta} ${stl.cta1}`}
              onClick={() => setProgressState(0)}
            >
              Graag
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestCalculation;
