import React from "react";
import Header from "../Components/Header/header";
import Hero from "../Components/Hero/hero";
import Card from "../Components/Card/card";
import Carrousel from "../Components/carrousel/Carrousel";
import LandingStyled from "./landingpage.styled";
import Footer from "../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Card/>
      <LandingStyled.Container>
      <Carrousel />
      </LandingStyled.Container>
      <Footer />
    </>
  );
};

export default LandingPage;
