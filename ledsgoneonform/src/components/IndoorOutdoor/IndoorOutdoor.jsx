import stl from "./IndoorOutdoor.module.css";
import { useState } from "react";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaTree } from "react-icons/fa6";

const IndoorOutdoor = ({ setProgressState, setIndoorOutdoor }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setProgressState(8);
    setIndoorOutdoor(value);
  };

  return (
    <div className={`${stl.longestRow} ${selectedValue ? stl.checked : ""}`}>
      <h3 className={stl.hero}>Voor</h3>
      <div className={stl.ctaFlex}>
        <button
          className={`${stl.cta} ${
            selectedValue === "Binnen" ? stl.selected : ""
          }`}
          onClick={() => handleSelectChange({ target: { value: "Binnen" } })}
        >
          Binnen
          <FaHouseChimneyWindow />
        </button>
        <button
          className={`${stl.cta} ${
            selectedValue === "Buiten" ? stl.selected : ""
          }`}
          onClick={() => handleSelectChange({ target: { value: "Buiten" } })}
        >
          Buiten
          <FaTree />
        </button>
      </div>
      {selectedValue && <span className={stl.gebruik}>Gebruik</span>}
    </div>
  );
};

export default IndoorOutdoor;
