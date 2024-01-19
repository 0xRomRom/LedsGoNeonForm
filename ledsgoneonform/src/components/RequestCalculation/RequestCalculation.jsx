import stl from "./RequestCalculation.module.css";
import { BsAspectRatio } from "react-icons/bs";
import { CgExpand } from "react-icons/cg";
import { useState } from "react";

const RequestCalculation = ({
  aspectRatio,
  setAspectRatio,
  wantsCalculation,
  setProgressState,
}) => {
  const handleNoThanks = () => {
    setProgressState(2);
  };
  return (
    <div
      className={`${stl.requestcalculation} ${
        wantsCalculation ? stl.folded : ""
      } ${aspectRatio !== null || wantsCalculation ? stl.checked : ""}`}
    >
      {wantsCalculation && (
        <CgExpand
          className={stl.expander}
          onClick={() => setProgressState(2)}
        />
      )}
      <h3 className={stl.hero}>
        {!aspectRatio && (
          <>
            Wilt u een <span className={stl.green}>prijsschatting</span> maken?
          </>
        )}
        {aspectRatio && !wantsCalculation && (
          <div className={stl.aspectFlex}>
            <span className={stl.opgeslagen}>Afmetingen opgeslagen</span>
            <span className={stl.verhoudingenSpan}>
              Verhouding {aspectRatio.toFixed(2)}{" "}
              <BsAspectRatio className={stl.aspectIcon} />
            </span>
            <span
              className={stl.berekenOpnieuw}
              onClick={() => setAspectRatio(null)}
            >
              Bereken opnieuw
            </span>
          </div>
        )}
      </h3>
      {!aspectRatio && !wantsCalculation && (
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
