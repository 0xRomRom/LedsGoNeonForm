import stl from "./CurrentOverview.module.css";

const CurrentOverview = ({ priceEstimate, ledType, RGBPrice }) => {
  return (
    <div className={stl.currentOveriew}>
      <span className={stl.estPrice}>
        Geschatte Prijs:{" "}
        <span className={stl.price}> €{Math.floor(priceEstimate)},-</span>
      </span>
      {ledType === "RGB" && (
        <div className={stl.rgbFlex}>
          <span className={stl.rgbExtra}>RGB</span>
          <span className={stl.white}>:</span>
          <span className={stl.boldWhite}>+€{Math.ceil(RGBPrice)},-</span>
        </div>
      )}
    </div>
  );
};

export default CurrentOverview;
