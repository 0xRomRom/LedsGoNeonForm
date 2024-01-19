import stl from "./RequestCalculation.module.css";
import { BsAspectRatio } from "react-icons/bs";

const RequestCalculation = ({
  setShowRequestModal,
  aspectRatio,
  setAspectRatio,
}) => {
  return (
    <div className={stl.requestcalculation}>
      <h3 className={stl.hero}>
        {!aspectRatio && (
          <>
            Wilt u een <span className={stl.green}>prijsschatting</span> maken?
          </>
        )}
        {aspectRatio && (
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
      {!aspectRatio && (
        <div className={stl.ctaWrap}>
          <div className={stl.btnBackground}>
            <button className={`${stl.cta} ${stl.cta2}`}>Nee bedankt</button>
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
