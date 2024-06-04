import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import HeaderStyled from "./header.styled";

const Header = () => {
  const navigate = useNavigate();

  const onClickTitle = () => {
    navigate("/");
  };

  const onClickCarta = () => {
    navigate("/carta");
  };
  const onClickReservas = () => {
    navigate("/reserva");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#A61C28" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={onClickTitle}
          >
            Lore Ipsum Restaurant
          </Typography>
          <HeaderStyled.ButtonsContainer>
            <HeaderStyled.Text onClick={onClickCarta}>Carta</HeaderStyled.Text>
            <HeaderStyled.Text onClick={onClickReservas}>
              Reservas
            </HeaderStyled.Text>
          </HeaderStyled.ButtonsContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
