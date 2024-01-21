import stl from "./CurrentOverview.module.css";

const CurrentOverview = ({
  priceEstimate,
  ledType,
  RGBPrice,
  backplateType,
  backplatePrice,
}) => {
  return (
    <div className={stl.currentOveriew}>
      <div className={stl.nameList}>
        <span className={stl.greenName}>Geschatte Prijs:</span>

        {backplateType === "Gekleurd" && (
          <div className={stl.rgbFlex}>
            <span className={stl.achterPlaat}>Achterplaat:</span>
          </div>
        )}
        {ledType === "RGB" && (
          <div className={stl.rgbFlex}>
            <span className={stl.rgbExtra}>RGB</span>
            <span className={stl.white}>:</span>
          </div>
        )}
      </div>
      <div className={stl.priceList}>
        <span className={stl.boldWhite}> €{Math.ceil(priceEstimate)},-</span>
        {backplateType === "Gekleurd" && (
          <span className={stl.price}> €{Math.floor(backplatePrice)},-</span>
        )}
        {ledType === "RGB" && (
          <span className={stl.price}>€{Math.floor(RGBPrice)},-</span>
        )}
      </div>
    </div>
  );
};

export default CurrentOverview;
