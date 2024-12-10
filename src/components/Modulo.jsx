// import React from "react";

// const Modulo = ({ titulo }) => {
//   return (
//     <div className="cuadro-modulo">
//       <img className="img-modulo" src="../public/libro.png" alt="" />
//       <p>{titulo}</p>
//     </div>
//   );
// };

// export default Modulo;


import React from "react";

const Modulo = ({ id, titulo, onClick }) => {
  return (
    <div className="cuadro-modulo" onClick={onClick}>
      <img className="img-modulo" src="../public/libro.png" alt="" />
      <p>{titulo}</p>
    </div>
  );
};

export default Modulo;
