import stl from "./LedKind.module.css";
import { useState } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";

const LedKind = ({ setLedType, setProgressState }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setLedType(selectedValue);
    setProgressState(5);
  };

  return (
    <div className={`${stl.longestRow} ${selectedValue ? stl.checked : ""}`}>
      <div className={stl.videoWrapper}>
        <VideoPlayer videoID={"KSAwVuqlAT4"} />
      </div>
      <h3 className={stl.hero}>
        Led
        <span
          className={`${stl.green} ${selectedValue === "RGB" ? stl.rgb : ""}`}
        >
          {" "}
          type
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
        <option value="Single color">Single color</option>
        <option value="RGB">RGB (€ +40%) </option>
      </select>
    </div>
  );
};
export default LedKind;
