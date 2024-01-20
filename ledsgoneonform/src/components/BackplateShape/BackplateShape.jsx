import stl from "./BackplateShape.module.css";
import { useState } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";

const BackplateShape = ({ setProgressState, setBackplateShape }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setBackplateShape(event.target.value);
    setProgressState(7);
  };

  return (
    <div className={`${stl.longestRow} ${selectedValue ? stl.checked : ""}`}>
      <div className={stl.videoWrapper}>
        <VideoPlayer videoID={"KSAwVuqlAT4"} />
      </div>
      <h3 className={stl.hero}>
        Achterplaat
        <span
          className={`${stl.green} ${selectedValue === "RGB" ? stl.rgb : ""}`}
        >
          {" "}
          vorm
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

export default BackplateShape;
