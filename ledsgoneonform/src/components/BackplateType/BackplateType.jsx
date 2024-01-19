import stl from "./BackplateType.module.css";
import { useState } from "react";

const BackplateType = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`${stl.longestRow} ${selectedValue ? stl.checked : ""}`}>
      <h3 className={stl.hero}>
        Soort
        <span
          className={`${stl.green} ${
            selectedValue === "Transparant"
              ? "Gekleurd"
                ? stl.greenTransparent
                : ""
              : stl.rgb
          }`}
        >
          {" "}
          achterplaat
        </span>
      </h3>
      <select
        className={stl.longestSelect}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" default disabled>
          Kies kleurtype
        </option>
        <option value="Transparant">Transparant</option>
        <option value="Gekleurd">Gekleurd (€ +25%) </option>
      </select>
    </div>
  );
};

export default BackplateType;
