import stl from "./RequestCalculation.module.css";

const RequestCalculation = ({ setShowRequestModal }) => {
  return (
    <div className={stl.requestcalculation}>
      <h3 className={stl.hero}>
        Wilt u een <span className={stl.green}>prijsschatting</span> maken?
      </h3>
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
    </div>
  );
};

export default RequestCalculation;
