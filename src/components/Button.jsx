


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Button = ({ titulo, estilo, url, tipo = "button" }) => {
//   const navegacion = useNavigate();
  
//   const irA = () => {
//     if (url) {
//       navegacion(`${url}`);
//     }
//   };

//   return (
//     <button onClick={irA} className={estilo} type={tipo}>
//       {titulo}
//     </button>
//   );
// };

// export default Button;

// import React from "react";
// import { Link } from "react-router-dom"; // Si usamos URL y necesitamos navegar
// // O si estamos usando un botón HTML regular

// const Button = ({ url, estilo, titulo, onClick, tipo = "button" }) => {
//   // Si el botón tiene un URL, usamos el Link de React Router para la navegación
//   if (url) {
//     return (
//       <Link to={url} className={estilo}>
//         {titulo}
//       </Link>
//     );
//   }

//   // Si tiene onClick, usamos un botón normal
//   return (
//     <button className={estilo} type={tipo} onClick={onClick}>
//       {titulo}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import { Link } from "react-router-dom"; // Si usamos URL y necesitamos navegar

const Button = ({ url, estilo, titulo, onClick, tipo = "button" }) => {
  // Clase común para ambos tipos de botón
  const buttonClass = `btn ${estilo}`;

  if (url) {
    return (
      <Link to={url} className={buttonClass}>
        {titulo}
      </Link>
    );
  }

  // Si tiene onClick, usamos un botón normal
  return (
    <button className={buttonClass} type={tipo} onClick={onClick}>
      {titulo}
    </button>
  );
};

export default Button;

