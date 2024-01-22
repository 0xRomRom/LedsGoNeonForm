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

        {ledType === "RGB" && (
          <span className={stl.rgbFlex}>
            <span className={stl.rgbExtra}>RGB</span>
            <span className={stl.white}>:</span>
          </span>
        )}
        {backplateType === "Gekleurd" && (
          <span className={stl.plaatFlex}>
            <span className={stl.achterPlaat}>Achterplaat:</span>
          </span>
        )}
      </div>
      <div className={stl.priceList}>
        <span className={stl.boldWhite}>
          {" "}
          €{Math.floor(priceEstimate)},- Excl. BTW
        </span>

        {ledType === "RGB" && (
          <span className={stl.priceSm}>€{Math.floor(RGBPrice)},-</span>
        )}
        {backplateType === "Gekleurd" && (
          <span className={stl.priceSm}> €{Math.floor(backplatePrice)},-</span>
        )}
      </div>
    </div>
  );
};

export default CurrentOverview;
