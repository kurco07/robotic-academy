import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ModulosContext } from "../context/ModulosProvider";

const ModuloProfesor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { modulos, setModulos } = useContext(ModulosContext);
  const { modulo } = location.state || {};

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({
    titulo: "",
    descripcion: "",
    duracion: "",
    videoUrl: "",
    pdfUrl: "",
  });

  if (!modulo) {
    return <h2 className="mp-error">Módulo no encontrado</h2>;
  }

  const eliminarCurso = (cursoId) => {
    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este curso?"
    );
    if (!confirmar) return;

    setModulos((prevModulos) =>
      prevModulos.map((mod) =>
        mod.id === modulo.id
          ? {
              ...mod,
              cursos: mod.cursos.filter((curso) => curso.id !== cursoId),
            }
          : mod
      )
    );
  };

  const agregarCurso = () => {
    const { titulo, descripcion, duracion, videoUrl, pdfUrl } = nuevoCurso;

    if (!titulo || !descripcion || !duracion || !videoUrl || !pdfUrl) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    const nuevoId = modulo.cursos.length
      ? modulo.cursos[modulo.cursos.length - 1].id + 1
      : modulo.id * 100 + 1;

    const curso = {
      id: nuevoId,
      titulo,
      descripcion,
      duracion,
      videoUrl,
      pdfUrl,
    };

    setModulos((prevModulos) =>
      prevModulos.map((mod) =>
        mod.id === modulo.id ? { ...mod, cursos: [...mod.cursos, curso] } : mod
      )
    );

    setNuevoCurso({
      titulo: "",
      descripcion: "",
      duracion: "",
      videoUrl: "",
      pdfUrl: "",
    });
    setMostrarFormulario(false);
  };

  return (
    <div className="mp-container">
      <h2 className="mp-titulo">{modulo.titulo}</h2>
      <p className="mp-nivel">Nivel: {modulo.nivel}</p>
      <h3 className="mp-subtitulo">Cursos:</h3>
      <ul className="mp-cursos-lista">
        {modulo.cursos.map((curso) => (
          <li className="mp-curso-item" key={curso.id}>
            <h4 className="mp-curso-titulo">
              {curso.titulo || "Curso sin título"}
            </h4>
            <p className="mp-curso-descripcion">
              {curso.descripcion || "Sin descripción"}
            </p>
            <p className="mp-curso-duracion">
              Duración: {curso.duracion || "Sin duración"}
            </p>
            <p className="mp-curso-video">
              Video: {curso.videoUrl || "Sin URL de video"}
            </p>
            <p className="mp-curso-pdf">
              PDF: {curso.pdfUrl || "Sin URL de PDF"}
            </p>
            <button
              className="mp-curso-editar"
              onClick={() =>
                navigate(`/editarcurso/${curso.id}`, {
                  state: { cursoId: curso.id },
                })
              }
            >
              Editar Curso
            </button>
            <button
              className="mp-curso-eliminar"
              onClick={() => eliminarCurso(curso.id)}
            >
              Eliminar Curso
            </button>
          </li>
        ))}
      </ul>

      <button
        className="mp-toggle-formulario"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Cancelar Agregar Curso" : "Agregar Curso"}
      </button>

      {mostrarFormulario && (
        <div className="mp-formulario-nuevo">
          <h3 className="mp-formulario-titulo">Agregar Nuevo Curso</h3>
          <label className="mp-label">
            Título:
            <input
              type="text"
              className="mp-input"
              value={nuevoCurso.titulo}
              onChange={(e) =>
                setNuevoCurso({ ...nuevoCurso, titulo: e.target.value })
              }
            />
          </label>
          <label className="mp-label">
            Descripción:
            <input
              type="text"
              className="mp-input"
              value={nuevoCurso.descripcion}
              onChange={(e) =>
                setNuevoCurso({ ...nuevoCurso, descripcion: e.target.value })
              }
            />
          </label>
          <label className="mp-label">
            Duración:
            <input
              type="text"
              className="mp-input"
              value={nuevoCurso.duracion}
              onChange={(e) =>
                setNuevoCurso({ ...nuevoCurso, duracion: e.target.value })
              }
            />
          </label>
          <label className="mp-label">
            URL del Video:
            <input
              type="text"
              className="mp-input"
              value={nuevoCurso.videoUrl}
              onChange={(e) =>
                setNuevoCurso({ ...nuevoCurso, videoUrl: e.target.value })
              }
            />
          </label>
          <label className="mp-label">
            URL del PDF:
            <input
              type="text"
              className="mp-input"
              value={nuevoCurso.pdfUrl}
              onChange={(e) =>
                setNuevoCurso({ ...nuevoCurso, pdfUrl: e.target.value })
              }
            />
          </label>
          <button className="mp-formulario-guardar" onClick={agregarCurso}>
            Guardar Curso
          </button>
        </div>
      )}

      <button className="mp-volver" onClick={() => navigate("/homeprofesor")}>
        Volver al Panel del Profesor
      </button>
    </div>
  );
};

export default ModuloProfesor;
