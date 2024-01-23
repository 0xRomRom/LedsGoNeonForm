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
  uploadedImg,
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
    try {
      const dbObject = {
        datum: new Date().toISOString().toLocaleString("nl-NL"),
        afbeelding64: base64img,
        prijs_schatting: Math.floor(priceEstimate),
        langste_zijde: longestSide,
        soort_led: ledType,
        kleur_led: selectedColor || "N.v.t.",
        achterplaat_type: backplateType,
        achterplaat_vorm: backplateShape,
        montage: mountType,
        naam: name,
        email: email,
        beschrijving: notice || "Geen",
        verhouding: aspectRatio,
      };

      const recipientBody = `
      <p>Wij hebben uw order ontvangen!</p>
      <p>Order details:</p>
      <ul>
        <li>Datum: ${new Date().toLocaleString()}</li>
        <li>Prijsschatting: €${Math.floor(dbObject.prijs_schatting)},-</li>
        <li>Langste zijde: ${dbObject.langste_zijde}</li>
        <br/>
        <span>Wij gaan er mee aan de slag, en u ontvangt binnen 2 dagen de kostprijs</span>
      </ul>
    `;

      // <img src="data:image/png;base64,${uploadedImg.split(",")[1]}" alt="Uploaded Image" />

      const orderBody = `
      <p>Nieuwe order</p>
      <br/>
      <ul>
        <li>Datum: ${new Date().toLocaleString()}</li>
        <li>Naam: ${dbObject.naam}</li>
        <li>Email: ${dbObject.email}</li>
        <li>Prijsschatting: €${dbObject.prijs_schatting || "Geen"},-</li>
        <li>Langste zijde: ${dbObject.langste_zijde}</li>
        <li>Soort LED: ${dbObject.soort_led}</li>
        <li>Kleur LED: ${
          dbObject.soort_led === "RGB" ? "N.v.t." : dbObject.kleur_led
        }</li>
        <li>Achterplaat type: ${dbObject.achterplaat_type}</li>
        <li>Achterplaat vorm: ${dbObject.achterplaat_vorm}</li>
        <li>Montage: ${dbObject.montage}</li>
        <li>Verhouding: ${dbObject.verhouding}</li>
      </ul>
    `;
      const { error } = await supabase
        .from("logo_samenstellen")
        .insert([dbObject]);
      if (error) {
        alert("Versturen mislukt, probeer het later opnieuw.");
        console.error("Supabase API error:", error.message);
      } else {
        try {
          window.Email.send({
            SecureToken: "4892afdd-4fb9-4392-bbf4-b40ce7dc116a",
            To: email,
            From: "roman0811@live.nl",
            Subject: "Order ontvangen",
            Body: recipientBody,
          }).then((send) => {
            window.Email.send({
              SecureToken: "4892afdd-4fb9-4392-bbf4-b40ce7dc116a",
              To: "roman0811@live.nl",
              From: "roman0811@live.nl",
              Subject: "Nieuwe order",
              Body: orderBody,
              Attachments: [
                {
                  name: "Image.png",
                  data: uploadedImg,
                  type: "image/png",
                },
              ],
            });
            window.location.href = "https://ledsgoneon.nl/bedankt-pagina/";
          });
        } catch (err) {
          alert("Fout bij verzenden. Neem contact met ons op!");
          console.error(err);
        }
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
