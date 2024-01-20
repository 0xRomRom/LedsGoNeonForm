import stl from "./SmallForm.module.css";
import { useEffect, useState } from "react";

const SmallForm = ({ setProgressState, setName, setEmail, name, email }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setProgressState(10);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (!name) {
      setNameEntered(false);
      return;
    }
    if (name) {
      setTimeout(() => {
        setNameEntered(true);
      }, 1250);
    }

    console.log(nameEntered);
  }, [name, setNameEntered, nameEntered]);

  return (
    <div className={`${stl.longestRow} ${selectedValue ? stl.checked : ""}`}>
      <h3 className={stl.hero}>Wat is uw naam?</h3>
      <input
        type="text"
        className={stl.inputStl}
        placeholder="Voornaam"
        onChange={updateName}
      />
      {nameEntered && (
        <>
          <h3 className={stl.hero2}>Wat is uw E-Mail?</h3>
          <input
            type="email"
            className={stl.inputStl}
            placeholder="E-Mail address"
            onChange={updateName}
          />
        </>
      )}
    </div>
  );
};

export default SmallForm;
