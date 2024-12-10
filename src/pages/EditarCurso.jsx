// import React, { useContext, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ModulosContext } from "../context/ModulosProvider";

// const EditarCurso = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { modulos, setModulos } = useContext(ModulosContext);
//   const { cursoId } = location.state || {};

//   // Busca el curso en los módulos
//   const cursoSeleccionado = modulos
//     .flatMap((modulo) => modulo.cursos)
//     .find((curso) => curso.id === cursoId);

//   const [cursoEditado, setCursoEditado] = useState({
//     titulo: cursoSeleccionado?.titulo || "",
//     descripcion: cursoSeleccionado?.descripcion || "",
//     duracion: cursoSeleccionado?.duracion || "",
//     videoUrl: cursoSeleccionado?.videoUrl || "",
//     pdfUrl: cursoSeleccionado?.pdfUrl || "",
//   });

//   if (!cursoSeleccionado) {
//     return <h2>Curso no encontrado</h2>;
//   }

//   const handleGuardar = () => {
//     if (
//       !cursoEditado.titulo ||
//       !cursoEditado.descripcion ||
//       !cursoEditado.duracion
//     ) {
//       alert("Por favor, completa todos los campos.");
//       return;
//     }

//     // Actualiza el curso en el contexto
//     setModulos((prevModulos) =>
//       prevModulos.map((modulo) => ({
//         ...modulo,
//         cursos: modulo.cursos.map((curso) =>
//           curso.id === cursoId
//             ? {
//                 ...curso,
//                 ...cursoEditado,
//               }
//             : curso
//         ),
//       }))
//     );

//     navigate(`/moduloprofesor/${cursoSeleccionado.moduloId}`, {
//       state: {
//         modulo: modulos.find(
//           (modulo) => modulo.id === cursoSeleccionado.moduloId
//         ),
//       },
//     });
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setCursoEditado({
//         ...cursoEditado,
//         videoUrl: URL.createObjectURL(file), // Vista previa del video
//       });
//     }
//   };

//   const handlePdfChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setCursoEditado({
//         ...cursoEditado,
//         pdfUrl: file.name, // Guarda el nombre del archivo PDF
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>Editar Curso</h2>
//       <label>
//         Título del Curso:
//         <input
//           type="text"
//           value={cursoEditado.titulo}
//           onChange={(e) =>
//             setCursoEditado({ ...cursoEditado, titulo: e.target.value })
//           }
//         />
//       </label>
//       <label>
//         Descripción:
//         <textarea
//           value={cursoEditado.descripcion}
//           onChange={(e) =>
//             setCursoEditado({ ...cursoEditado, descripcion: e.target.value })
//           }
//         ></textarea>
//       </label>
//       <label>
//         Duración:
//         <input
//           type="text"
//           value={cursoEditado.duracion}
//           onChange={(e) =>
//             setCursoEditado({ ...cursoEditado, duracion: e.target.value })
//           }
//         />
//       </label>

//       {/* Campo para subir video */}
//       <label>
//         Subir Video:
//         <input type="file" accept="video/*" onChange={handleVideoChange} />
//       </label>
//       {cursoEditado.videoUrl && (
//         <div>
//           <p>Vista previa del video:</p>
//           <video src={cursoEditado.videoUrl} controls width="300"></video>
//         </div>
//       )}

//       {/* Campo para subir PDF */}
//       <label>
//         Subir Guía PDF:
//         <input
//           type="file"
//           accept="application/pdf"
//           onChange={handlePdfChange}
//         />
//       </label>
//       {cursoEditado.pdfUrl && <p>Archivo PDF cargado: {cursoEditado.pdfUrl}</p>}

//       <button onClick={handleGuardar}>Guardar Cambios</button>
//       <button onClick={() => navigate(-1)}>Cancelar</button>
//     </div>
//   );
// };

// export default EditarCurso;

import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ModulosContext } from "../context/ModulosProvider";

const EditarCurso = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { modulos, setModulos } = useContext(ModulosContext);
  const { cursoId } = location.state || {};

  // Busca el curso en los módulos
  const cursoSeleccionado = modulos
    .flatMap((modulo) => modulo.cursos)
    .find((curso) => curso.id === cursoId);

  const [cursoEditado, setCursoEditado] = useState({
    titulo: cursoSeleccionado?.titulo || "",
    descripcion: cursoSeleccionado?.descripcion || "",
    duracion: cursoSeleccionado?.duracion || "",
    videoUrl: cursoSeleccionado?.videoUrl || "",
    pdfUrl: cursoSeleccionado?.pdfUrl || "",
  });

  if (!cursoSeleccionado) {
    return <h2 className="editar-curso__mensaje-error">Curso no encontrado</h2>;
  }

  const handleGuardar = () => {
    if (
      !cursoEditado.titulo ||
      !cursoEditado.descripcion ||
      !cursoEditado.duracion
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Actualiza el curso en el contexto
    setModulos((prevModulos) =>
      prevModulos.map((modulo) => ({
        ...modulo,
        cursos: modulo.cursos.map((curso) =>
          curso.id === cursoId
            ? {
                ...curso,
                ...cursoEditado,
              }
            : curso
        ),
      }))
    );

    navigate(`/moduloprofesor/${cursoSeleccionado.moduloId}`, {
      state: {
        modulo: modulos.find(
          (modulo) => modulo.id === cursoSeleccionado.moduloId
        ),
      },
    });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCursoEditado({
        ...cursoEditado,
        videoUrl: URL.createObjectURL(file), // Vista previa del video
      });
    }
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCursoEditado({
        ...cursoEditado,
        pdfUrl: file.name, // Guarda el nombre del archivo PDF
      });
    }
  };

  return (
    <div className="editar-curso">
      <h2 className="editar-curso__titulo">Editar Curso</h2>
      <div className="editar-curso__form">
        <label className="editar-curso__label">
          Título del Curso:
          <input
            className="editar-curso__input"
            type="text"
            value={cursoEditado.titulo}
            onChange={(e) =>
              setCursoEditado({ ...cursoEditado, titulo: e.target.value })
            }
          />
        </label>
        <label className="editar-curso__label">
          Descripción:
          <textarea
            className="editar-curso__textarea"
            value={cursoEditado.descripcion}
            onChange={(e) =>
              setCursoEditado({ ...cursoEditado, descripcion: e.target.value })
            }
          ></textarea>
        </label>
        <label className="editar-curso__label">
          Duración:
          <input
            className="editar-curso__input"
            type="text"
            value={cursoEditado.duracion}
            onChange={(e) =>
              setCursoEditado({ ...cursoEditado, duracion: e.target.value })
            }
          />
        </label>

        {/* Campo para subir video */}
        <label className="editar-curso__label">
          Subir Video:
          <input
            className="editar-curso__input"
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </label>
        {cursoEditado.videoUrl && (
          <div className="editar-curso__video-preview">
            <p>Vista previa del video:</p>
            <video
              className="editar-curso__video"
              src={cursoEditado.videoUrl}
              controls
              width="300"
            ></video>
          </div>
        )}

        {/* Campo para subir PDF */}
        <label className="editar-curso__label">
          Subir Guía PDF:
          <input
            className="editar-curso__input"
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
          />
        </label>
        {cursoEditado.pdfUrl && (
          <p className="editar-curso__archivo">
            Archivo PDF cargado: {cursoEditado.pdfUrl}
          </p>
        )}

        <div className="editar-curso__botones">
          <button className="editar-curso__btn guardar" onClick={handleGuardar}>
            Guardar Cambios
          </button>
          <button
            className="editar-curso__btn cancelar"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditarCurso;
