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
      <h3 className={stl.hero}>Achterplaat vorm</h3>
      <select
        className={stl.longestSelect}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" default disabled>
          Kies vorm
        </option>
        <option value="Afstandhouders">Afstandhouders</option>
        <option value="Ketting">Ketting</option>
        <option value="Rails (alleen bij gekleurde plaat)">
          Rails (alleen bij gekleurde plaat)
        </option>
      </select>
    </div>
  );
};

export default BackplateShape;
