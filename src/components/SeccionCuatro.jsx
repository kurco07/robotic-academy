import React from "react";
import Button from "./Button.jsx";
import Card from "../components/card";

const SeccionCuatro = () => {
  return (
    <main>
      <div className="containerSeccion">
        <div className="seccion1">
          <h1>Nuestros Modulos</h1>
          <Button estilo="btn secundary" titulo="TODOS LOS CURSOS" />
        </div>
        <div className="containerCards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};

export default SeccionCuatro;
