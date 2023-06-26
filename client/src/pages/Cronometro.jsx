import React, { useEffect, useState } from "react";

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Cronómetro: {segundos} segundos</h2>
    </div>
  );
};

export default Cronometro;
