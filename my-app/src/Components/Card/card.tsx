import React from "react";
import CardStyled from "./card.styled";


const Card = () =>{

  return(
    <CardStyled.Container>
        <CardStyled.TextContainer>
            <div>
        <h2>Descubre el Encanto de lo Desconocido</h2>
    <p>
    En el corazón de la ciudad, el Lorem Ipsum Bar te invita a sumergirte en una experiencia única. Nuestro nombre, inspirado en el clásico texto “Lorem Ipsum”, refleja nuestra pasión por lo inesperado y lo inexplorado. 
        
    </p>
    </div>
    <div>
    <h2>
    ¿Qué nos hace especiales?
    </h2>
    <ul>
        <li><b>Cócteles Innovadores:</b> Nuestros talentosos mixólogos crean bebidas que desafían las convenciones. Desde el “Lorem Spritz” hasta el “Ipsum Sour”, cada sorbo es una aventura.</li>
    <li><b>Ambiente Único:</b> Adéntrate en un mundo de misterio y creatividad. Nuestra decoración ecléctica combina elementos retro con toques modernos. ¡Prepárate para sorprenderte!</li>
    <li><b>Eventos Temáticos:</b> Cada semana, celebramos eventos temáticos que te transportarán a lugares lejanos. Desde noches de jazz hasta fiestas de ciencia ficción, siempre hay algo emocionante en el Lorem Ipsum Bar.</li>
    <li><b>Menú Sorpresa:</b> ¿Te atreves a dejar tu elección en manos del destino? Pide nuestro “Menú Ipsum” y déjate sorprender por platos y bebidas seleccionados al azar.</li>
    </ul>
</div>
<div>
    <h2>Ven y descubre</h2>

    <p>El Lorem Ipsum Bar es más que un lugar para tomar algo; es un viaje hacia lo desconocido. Únete a nosotros y déjate llevar por la magia de las palabras sin sentido.</p>
    <p>¡Te esperamos en la esquina de la Calle Ipsum y la Avenida Lorem!</p>
</div></CardStyled.TextContainer>
</CardStyled.Container>
  );


}

export default Card;