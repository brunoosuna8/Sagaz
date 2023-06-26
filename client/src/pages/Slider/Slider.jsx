import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/system";
const Container = styled("div")({
  color: "white",

  width: "100%",
  height: "100vh",
  position: "relative",
});
const Arrow = styled("div")(({ direction }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: "white",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: direction === "left" ? "10px" : "auto",
  right: direction === "right" ? "10px" : "auto",
  margin: "auto",
}));
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon />
      </Arrow>
      <Arrow direction="right">
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
