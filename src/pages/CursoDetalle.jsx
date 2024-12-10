import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ModulosContext } from "../context/ModulosProvider";

const CursoDetalle = () => {
  const { id } = useParams(); // Obtener el ID del curso desde la URL
  const { modulos } = useContext(ModulosContext);

  // Buscar el curso correspondiente
  const curso = modulos
    .flatMap((modulo) => modulo.cursos)
    .find((curso) => curso.id === parseInt(id));

  // Validar si el curso existe
  if (!curso) {
    return <h2>Curso no encontrado</h2>;
  }

  return (
    <div className="curso-detalle">
      <h1>{curso.titulo}</h1>
      <p>{curso.descripcion}</p>
      <p>Duración: {curso.duracion}</p>
      {/* Puedes agregar aquí un video o más contenido relacionado */}
      <div className="video-container">
        <video controls width="100%">
          <source src={`../public/videos/${curso.id}.mp4`} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </div>
  );
};

export default CursoDetalle;
