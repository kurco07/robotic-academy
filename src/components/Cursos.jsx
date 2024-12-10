




import React, { useContext, useState } from "react";
import { ModulosContext } from "../context/ModulosProvider";
import Modulo from "./Modulo";
import Card from "./Card";

const Cursos = () => {
  const { modulos } = useContext(ModulosContext); // Obtener los datos del contexto
  const [moduloSeleccionado, setModuloSeleccionado] = useState(null); // Estado del módulo seleccionado

  // Manejar el clic en un módulo
  const manejarSeleccionModulo = (idModulo) => {
    setModuloSeleccionado(idModulo); // Actualizar el módulo seleccionado
  };

  // Filtrar los cursos del módulo seleccionado
  const cursosFiltrados =
    moduloSeleccionado !== null
      ? modulos.find((modulo) => modulo.id === moduloSeleccionado)?.cursos || []
      : [];

  return (
    <div className="Cursos">
      <div className="cursos-modulos">
        {/* Renderizar los módulos */}
        {modulos.map((modulo) => (
          <Modulo
            key={modulo.id}
            id={modulo.id}
            titulo={modulo.titulo}
            onClick={() => manejarSeleccionModulo(modulo.id)} // Hacer el módulo clickeable
          />
        ))}
      </div>

      <div className="containerCards">
        {/* Mostrar los cursos del módulo seleccionado */}
        {cursosFiltrados.map((curso) => (
          <Card
            key={curso.id}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={modulos.find((mod) => mod.id === moduloSeleccionado)?.nivel}
            duracion={curso.duracion}
            id={curso.id}
          />
        ))}

        {/* Mostrar un mensaje si no hay módulo seleccionado */}
        {moduloSeleccionado === null && (
          <p>Haz clic en un módulo para ver los cursos.</p>
        )}
      </div>
    </div>
  );
};

export default Cursos;

