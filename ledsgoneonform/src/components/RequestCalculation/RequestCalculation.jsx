import stl from "./RequestCalculation.module.css";
import { BsAspectRatio } from "react-icons/bs";
import { CgExpand } from "react-icons/cg";
import { useState } from "react";

const RequestCalculation = ({
  setShowRequestModal,
  aspectRatio,
  setAspectRatio,
}) => {
  const [noThanks, setNoThanks] = useState(false);

  const handleNoThanks = () => {
    setNoThanks(true);
  };
  return (
    <div className={`${stl.requestcalculation} ${noThanks ? stl.folded : ""}`}>
      {noThanks && (
        <CgExpand className={stl.expander} onClick={() => setNoThanks(false)} />
      )}
      <h3 className={stl.hero}>
        {!aspectRatio && (
          <>
            Wilt u een <span className={stl.green}>prijsschatting</span> maken?
          </>
        )}
        {aspectRatio && !noThanks && (
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
      {!aspectRatio && !noThanks && (
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
              onClick={() => setShowRequestModal(true)}
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
