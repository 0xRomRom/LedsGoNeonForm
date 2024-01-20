import stl from "./Mounting.module.css";
import { useState } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";

const Mounting = ({ setMountType, setProgressState }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setProgressState(7);
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
          Kies systeemsoort
        </option>
        <option value="Transparant">Transparant</option>
        <option value="Gekleurd">Gekleurd (€ +25%) </option>
      </select>
    </div>
  );
};

export default Mounting;
