// import React from "react";

// const SecciónUno = () => {
//   return (
//     <main>
//       <div className="container">
//         <div className="left">
//           <h1>MEJORA TUS HABILIDADES,</h1>
//           <h1 style={{ color: "#3434FF" }}>APRENDE ROBOTICA</h1>
//           <p className="subtitulo">
//             Descubre las claves para liderar la revolución tecnológica.
//           </p>
//           <div className="cuadroBotones">
//             <button className=" btn main">NUESTROS CURSOS</button>
//             <button className=" btn secundary">ACERCA</button>
//           </div>
//         </div>
//         <div className="right">
//           <img className="imagenes" src="../Public/robotica.avif" alt="" />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default SecciónUno;

import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirección

const SecciónUno = () => {
  const navigate = useNavigate(); // Hook para navegación

  // Funciones de redirección
  const redirigirCursos = () => {
    navigate("/cursos"); // Redirige a la página de Cursos
  };

  const redirigirAbout = () => {
    navigate("/about"); // Redirige a la página de About
  };

  return (
    <main>
      <div className="container">
        <div className="left">
          <h1>MEJORA TUS HABILIDADES,</h1>
          <h1 style={{ color: "#3434FF" }}>APRENDE ROBOTICA</h1>
          <p className="subtitulo">
            Descubre las claves para liderar la revolución tecnológica.
          </p>
          <div className="cuadroBotones">
            <button className="btn main" onClick={redirigirCursos}>
              NUESTROS CURSOS
            </button>
            <button className="btn secundary" onClick={redirigirAbout}>
              ACERCA
            </button>
          </div>
        </div>
        <div className="right">
          <img
            className="imagenes"
            src="../Public/robotica.avif"
            alt="Imagen de robótica"
          />
        </div>
      </div>
    </main>
  );
};

export default SecciónUno;
