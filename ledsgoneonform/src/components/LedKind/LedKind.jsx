import stl from "./LedKind.module.css";
import { useState } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";
import { useEffect } from "react";

const LedKind = ({
  setLedType,
  setProgressState,
  selectedColor,
  setSelectedColor,
  progressState,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setLedType(event.target.value);
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    if (progressState === 4) {
      window.scrollTo(0, document.body.scrollHeight);
      if (selectedColor) {
        setProgressState(5);
      }
    }

    if (selectedValue === "Single color" && !selectedColor) {
      setProgressState(4);
      return;
    }

    if (selectedValue === "RGB") {
      setProgressState(5);
    }
  }, [selectedColor, selectedValue]);

  const colors = [
    { name: "Wit", bgColor: "white", boxShadowColor: "white" },
    {
      name: "Warm wit",
      bgColor: "rgb(244,223,133)",
      boxShadowColor: "rgb(244,223,133)",
    },
    {
      name: "Licht geel",
      bgColor: "rgb(252,251,32)",
      boxShadowColor: "rgb(252,251,32)",
    },
    {
      name: "Donker geel",
      bgColor: "rgb(249,198,2)",
      boxShadowColor: "rgb(249,198,2)",
    },
    {
      name: "Oranje",
      bgColor: "rgb(251,93,24)",
      boxShadowColor: "rgb(251,93,24)",
    },
    { name: "Rood", bgColor: "rgb(253,1,0)", boxShadowColor: "rgb(253,1,0)" },
    {
      name: "Groen",
      bgColor: "rgb(11,236,92)",
      boxShadowColor: "rgb(11,236,92)",
    },
    {
      name: "Blauw",
      bgColor: "rgb(34,34,228)",
      boxShadowColor: "rgb(34,34,228)",
    },
    {
      name: "Licht blauw",
      bgColor: "rgb(56,200,253)",
      boxShadowColor: "rgb(56,200,253)",
    },
    {
      name: "Roze",
      bgColor: "rgb(246,8,246)",
      boxShadowColor: "rgb(246,8,246)",
    },
    {
      name: "Paars",
      bgColor: "rgb(107,49,209)",
      boxShadowColor: "rgb(107,49,209)",
    },
  ];

  return (
    <div className={`${stl.longestRow} ${selectedColor ? stl.checked : ""}`}>
      {selectedValue === "RGB" && (
        <div className={stl.videoWrapper}>
          <VideoPlayer videoID={"Io194T5VC2w"} />
        </div>
      )}
      {selectedValue === "Single color" && (
        <>
          <h2 className={stl.kiesKleur}>Kies een kleur</h2>
          <div className={stl.colorboxWrapper}>
            {colors.map((color, index) => (
              <button
                key={index}
                className={stl.colorBox}
                onClick={() => setSelectedColor(color.name)}
                style={{
                  border:
                    selectedColor === color.name
                      ? "2px solid rgba(255, 5, 255, 0.3)"
                      : "",
                  backgroundColor:
                    selectedColor === color.name
                      ? "rgba(255, 5, 255, 0.15)"
                      : "",
                }}
              >
                <div
                  className={stl.kleurPreview}
                  style={{
                    backgroundColor: color.bgColor,
                    boxShadow: `0px 0px 10px ${color.boxShadowColor}`,
                  }}
                ></div>
                <span
                  className={stl.kleurTitle}
                  style={{
                    color: color.bgColor,
                    textShadow: `0px 0px 10px ${color.boxShadowColor}`,
                  }}
                >
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
      <h3 className={stl.hero}>
        Soort
        <span
          className={`${stl.green} ${selectedValue === "RGB" ? stl.rgb : ""}`}
        >
          {" "}
          LED
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
        <option value="Single color">Single color (Vaste kleur)</option>
        <option value="RGB">RGB € +40% (Verstelbare kleur)</option>
      </select>
    </div>
  );
};
export default LedKind;
