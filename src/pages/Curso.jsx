import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ModulosContext } from "../context/ModulosProvider";

const Curso = () => {
  const { id } = useParams(); // Obtener el ID del curso desde la URL
  const { modulos } = useContext(ModulosContext); // Obtener los módulos del contexto

  // Buscar el curso por ID
  const cursoSeleccionado = modulos
    .flatMap((modulo) => modulo.cursos) // Combinar todos los cursos de todos los módulos
    .find((curso) => curso.id === parseInt(id)); // Buscar el curso por ID

  if (!cursoSeleccionado) {
    return <p>Curso no encontrado</p>; // Mostrar mensaje si no se encuentra el curso
  }

  return (
    <div className="curso-container">
      {/* Encabezado */}
      <header className="curso-header">
        <h1>{cursoSeleccionado.titulo}</h1>
      </header>

      {/* Video */}
      <section className="curso-video">
        <h2>Clase en Video</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={cursoSeleccionado.videoUrl} // Usar la URL del video dinámica del contexto
            title="Video del curso"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Descripción del curso */}
      <section className="curso-descripcion">
        <h2>¿De qué trata este curso?</h2>
        <p>{cursoSeleccionado.descripcion}</p>
      </section>

      {/* Guía en PDF */}
      <section className="curso-pdf">
        <h2>Guía del Curso</h2>
        <p>Descarga o visualiza la guía del curso haciendo clic en el botón:</p>
        <a
          href="/path/to/guide.pdf" // Cambia esta ruta con la correcta si tienes un PDF
          target="_blank"
          rel="noopener noreferrer"
          className="btn main"
        >
          Ver Guía en PDF
        </a>
      </section>
    </div>
  );
};

export default Curso;


// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { ModulosContext } from "../context/ModulosProvider";

// const Curso = () => {
//   const { id } = useParams(); // Obtener el ID del curso desde la URL
//   const { modulos } = useContext(ModulosContext); // Obtener los módulos del contexto

//   // Buscar el curso por ID
//   const cursoSeleccionado = modulos
//     .flatMap((modulo) => modulo.cursos) // Combinar todos los cursos de todos los módulos
//     .find((curso) => curso.id === parseInt(id)); // Buscar el curso por ID

//   if (!cursoSeleccionado) {
//     return <p>Curso no encontrado</p>; // Mostrar mensaje si no se encuentra el curso
//   }

//   return (
//     <div className="curso-container">
//       {/* Encabezado */}
//       <header className="curso-header">
//         <h1>{cursoSeleccionado.titulo}</h1>
//       </header>

//       {/* Video */}
//       <section className="curso-video">
//         <h2>Clase en Video</h2>
//         <div className="video-container">
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Puedes cambiar este link por el del video real
//             title="Video del curso"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </section>

//       {/* Descripción del curso */}
//       <section className="curso-descripcion">
//         <h2>¿De qué trata este curso?</h2>
//         <p>{cursoSeleccionado.descripcion}</p>
//       </section>

//       {/* Guía en PDF */}
//       <section className="curso-pdf">
//         <h2>Guía del Curso</h2>
//         <p>Descarga o visualiza la guía del curso haciendo clic en el botón:</p>
//         <a
//           href="/path/to/guide.pdf" // Cambia esta ruta con la correcta si tienes un PDF
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn main"
//         >
//           Ver Guía en PDF
//         </a>
//       </section>
//     </div>
//   );
// };

// export default Curso;
