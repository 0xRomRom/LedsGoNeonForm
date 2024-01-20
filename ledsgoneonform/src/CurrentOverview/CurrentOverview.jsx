import stl from "./CurrentOverview.module.css";

const CurrentOverview = ({ priceEstimate }) => {
  return (
    <div className={stl.currentOveriew}>
      <span className={stl.estPrice}>
        Geschatte Prijs: <span className={stl.price}> €{priceEstimate},-</span>
      </span>
    </div>
  );
};

export default CurrentOverview;
