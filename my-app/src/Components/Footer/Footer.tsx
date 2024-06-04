import React from "react";
import FooterStyled from "./Footer.styled";


const Footer= () =>{

    return(
        <FooterStyled.Container>
            <p style={{fontSize: '1.5rem'}}>Estamos en la calle Lorem Ipsum, s/n</p>
            <p style={{fontSize: '1.5rem'}}>¡Visítanos!</p>
        </FooterStyled.Container>
    )

}

export default Footer;