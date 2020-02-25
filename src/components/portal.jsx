import React from "react";
import portal from "../images/portal.svg";

export default () => {
  return (
    <div className="flex flex-wrap items-center mt-12 my-5">
      <h1 className="px-2 minh-1-8 text-xl md:w-1/2 lg:w-1/2">
        Hola, soy un cientifico de datos.
        <br />
        Incrementó los beneficios mediante el conocimiento de vuestros procesos
      </h1>
      <img
        className="px-2 md:w-1/2 lg:w-1/2"
        src={portal}
        alt="Ilustracion de programador"
      />
    </div>
  );
};
