import React from "react";
import HeroStyled from "./hero.styled";

const Hero = () => {
  return (
    <HeroStyled.Container>
      <HeroStyled.TextContainer>
        <HeroStyled.Text>Ven a comer con nosotros...</HeroStyled.Text>
      </HeroStyled.TextContainer>
    </HeroStyled.Container>
  );
};

export default Hero;
