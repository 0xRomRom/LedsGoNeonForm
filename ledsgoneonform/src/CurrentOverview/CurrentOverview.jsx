import stl from "./CurrentOverview.module.css";

const CurrentOverview = ({ priceEstimate, ledType, RGBPrice }) => {
  return (
    <div className={stl.currentOveriew}>
      <span className={stl.estPrice}>
        Geschatte Prijs:{" "}
        <span className={stl.price}> €{Math.floor(priceEstimate)},-</span>
      </span>
      {ledType === "RGB" && (
        <span className={stl.rgbExtra}>
          RGB: <span className={stl.boldWhite}>+€{Math.ceil(RGBPrice)},-</span>
        </span>
      )}
    </div>
  );
};

export default CurrentOverview;
