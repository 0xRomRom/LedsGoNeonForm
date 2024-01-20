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
      <h3
        className={`${stl.hero} ${
          selectedValue === "Contour" ? stl.contour : stl.corners
        }`}
      >
        Achterplaat vorm
      </h3>
      <select
        className={stl.longestSelect}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" default disabled>
          Kies vorm
        </option>
        <option value="Contour">Contour</option>
        <option value="Rechthoekig">Rechhoekig</option>
      </select>
    </div>
  );
};

export default BackplateShape;
