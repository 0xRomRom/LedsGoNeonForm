import stl from "./SmallForm.module.css";
import { useEffect, useState } from "react";
import { RiAlertLine } from "react-icons/ri";
import supabase from "../utils/supabase";

const SmallForm = ({
  setName,
  setEmail,
  name,
  email,
  notice,
  setNotice,
  longestSide,
  ledType,
  backplateType,
  backplateShape,
  mountType,
  base64img,
  selectedColor,
  priceEstimate,
  aspectRatio,
}) => {
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
      return;
    } else {
      setTimeout(() => {
        setNameEntered(true);
        window.scrollTo(0, document.body.scrollHeight);
        return;
      }, 1000);
    }
    if (emailEntered) {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
        return;
      }, 1000);
    }
  }, [name, setEmailEntered, emailEntered, email]);

  const submitForm = async () => {
    // Additional form submission logic
    try {
      const postObject = {
        datum: new Date().toISOString().toLocaleString("nl-NL"),
        afbeelding: base64img,
        prijs_schatting: Math.floor(priceEstimate),
        langste_zijde: longestSide,
        soort_led: ledType,
        kleur_led: selectedColor,
        achterplaat_type: backplateType,
        achterplaat_vorm: backplateShape,
        montage: mountType,
        naam: name,
        email: email,
        beschrijving: notice,
        verhouding: aspectRatio,
      };

      // Attempt to insert data into Supabase
      const { error } = await supabase
        .from("logo_samenstellen")
        .insert([postObject]);

      if (error) {
        // Handle Supabase API error
        alert("Versturen mislukt, probeer het later opnieuw.");
        console.error("Supabase API error:", error.message);
      } else {
        window.location.href = "https://ledsgoneon.nl/bedankt-pagina/";
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

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
            <button className={stl.ledsgo} onClick={submitForm}>
              LED's Go!
            </button>
          </div>
          <span className={stl.binnengebruik}>
            <RiAlertLine className={stl.alert} /> Lampen alleen geschikt voor
            binnengebruik!
          </span>
        </>
      )}
    </div>
  );
};

export default SmallForm;
