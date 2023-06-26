import React from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import Cronometro from "../Cronometro";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider></Slider>
      <Cronometro />
    </div>
  );
};

export default Home;
