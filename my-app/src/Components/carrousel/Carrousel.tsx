import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import CarrouselStyled from "./Carrousel.styled";

const images = [
  "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Carrousel = () => {
  return (
    <>
    
        <CarrouselStyled.SliderContainer>
          <CCarousel controls indicators transition="crossfade">
            {images.map((URL) => (
              <CCarouselItem>
                <CImage className="d-block w-100 h-10" src={URL} alt="samle" height='800rem'/>
              </CCarouselItem>
            ))}
          </CCarousel>
        </CarrouselStyled.SliderContainer>
      
    </>
  );
};

export default Carrousel;
