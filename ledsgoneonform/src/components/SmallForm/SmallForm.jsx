import stl from "./SmallForm.module.css";
import { useEffect, useState } from "react";

const SmallForm = ({
  setProgressState,
  setName,
  setEmail,
  name,
  email,
  notice,
  setNotice,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateTextarea = (e) => {
    setNotice(e.target.value);
  };

  const updateEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailEntered(emailRegex.test(enteredEmail));
  };

  useEffect(() => {
    if (!name) {
      setNameEntered(false);
    } else {
      setTimeout(() => {
        setNameEntered(true);
      }, 1000);
    }

    if (!name || !emailEntered) {
      setEmailEntered(false);
    } else {
      window.scrollTo(0, document.body.scrollHeight);
      setTimeout(() => {
        setEmailEntered(true);
      }, 1000);
    }

    console.log(emailEntered);
  }, [name, setEmailEntered, emailEntered]);

  return (
    <div className={`${stl.longestRow} ${emailEntered ? stl.checked : ""}`}>
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
            placeholder="E-Mail adres"
            onChange={updateEmail}
          />
        </>
      )}
      {nameEntered && emailEntered && (
        <>
          <h3 className={stl.hero2}>Opmerkingen?</h3>

          <textarea
            resize="none"
            className={stl.inputArea}
            placeholder="Plaats ze hier"
            onChange={updateTextarea}
          ></textarea>

          <div className={stl.btnBackground}>
            <button className={stl.ledsgo}>LED's Go!</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SmallForm;
