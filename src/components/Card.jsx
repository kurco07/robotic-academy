// import { Link } from "react-router-dom";

// function Card({ titulo, descripcion, nivel, duracion, id }) {
//   return (
//     <div className="card">
//       <img src="../public/prueba.png" alt="" className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{titulo}</h5>
//         <p>Nivel: {nivel}</p>
//         <p className="card-text">{descripcion}</p>
//         <p>Duración: {duracion}</p>
//         {/* Usamos Link para redirigir a la página del curso */}
//         <Link to={`/curso/${id}`} className="btn main">
//           MÁS
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Card;


import { Link } from "react-router-dom";

function Card({ titulo, descripcion, nivel, duracion, id }) {
  return (
    <div className="card">
      <img src="../public/prueba.png" alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p>Nivel: {nivel}</p>
        <p className="card-text">{descripcion}</p>
        <p>Duración: {duracion}</p>
        {/* Usamos Link para redirigir a la página del curso con su ID */}
        <Link to={`/curso/${id}`} className="btn main">
          MÁS
        </Link>
      </div>
    </div>
  );
}

export default Card;




