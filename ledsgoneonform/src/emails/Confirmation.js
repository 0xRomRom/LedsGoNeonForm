import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Confirmation = ({ gebruiker }) => (
  <Html>
    <Head />
    <Preview>Uw ontwerp is ontvangen</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://ledsgoneon.nl/wp-content/themes/nugtr-childtheme/img/logo/logo.png"
          width="300"
          height="200"
          alt="LED's GO Neon"
          style={logo}
        />
        <Text style={paragraph}>Hi {gebruiker},</Text>
        <Text style={paragraph}>
          Wij hebben uw ontwerp ontvangen! Binnen 2 dagen ontvangt u een
          offerte.
        </Text>
        <Section style={btnContainer}></Section>
        <Text style={paragraph}>
          Best,
          <br />
          Team LED's Go Neon
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

export default Confirmation;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
