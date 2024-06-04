import styled from "@emotion/styled";
import hero from "../../Assets/hero.jpg";

const HeroStyled = {
  Container: styled.div`
    background: url(${hero});
    height: 25vw;
    background-size: cover;
    background-position: center;
    display: flex;
  `,

  TextContainer: styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 1000rem;
    padding-right: 2rem;
  `,

  Text: styled.p`
    color: white;
    font-size: 3rem;
    text-align: end;
  `,
};

export default HeroStyled;
