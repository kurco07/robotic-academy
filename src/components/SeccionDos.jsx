import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirección

const SeccionDos = () => {
  const navigate = useNavigate(); // Hook para navegación

  // Función para redirigir a la página About
  const redirigirAbout = () => {
    navigate("/about"); // Redirige a la página de About
  };

  return (
    <main>
      <div className="container">
        <div className="left">
          <img className="imagenes" src="../Public/robotica.avif" alt="" />
        </div>
        <div className="right">
          <h1>ACERCA DE NOSOTROS</h1>
          <p className="subtitulo">
            En nuestra academia, te invitamos a sumergirte en el fascinante
            mundo de la robótica.
          </p>

          <p className="subtitulo">
            Desarrolla las habilidades del futuro con nuestros cursos en línea,
            diseñados para todos los niveles. Desde construir tu primer robot
            hasta dominar la programación de inteligencia artificial, te
            proporcionamos las herramientas y el conocimiento necesarios para
            convertirte en un experto en robótica. ¡El futuro de la tecnología
            te espera!
          </p>
          <div className="cuadroBotones">
            <button className="btn secundary" onClick={redirigirAbout}>
              LEER MÁS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SeccionDos;
