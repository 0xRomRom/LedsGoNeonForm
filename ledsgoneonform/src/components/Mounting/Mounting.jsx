import stl from "./Mounting.module.css";
import { useState } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";

const Mounting = ({ setMountType, setProgressState }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setProgressState(8);
    setMountType(selectedValue);
  };

  return (
    <div className={`${stl.longestRow} ${selectedValue ? stl.checked : ""}`}>
      <div className={stl.videoWrapper}>
        <VideoPlayer videoID={"KSAwVuqlAT4"} />
      </div>
      <h3 className={stl.hero}>Montage systeem</h3>
      <select
        className={stl.longestSelect}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" default disabled>
          Kies methode
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

export default Mounting;
