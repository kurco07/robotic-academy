import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModulosContext } from "../context/ModulosProvider";

const HomeProfesor = () => {
  const { modulos, agregarModuloVacio, editarModulo, eliminarModulo } =
    useContext(ModulosContext);
  const [nuevoModulo, setNuevoModulo] = useState({
    titulo: "",
    nivel: "",
    cantidadCursos: 0,
  });
  const [moduloEnEdicion, setModuloEnEdicion] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const navigate = useNavigate();

  const handleAgregarModulo = () => {
    const { titulo, nivel, cantidadCursos } = nuevoModulo;

    if (!titulo || !nivel || cantidadCursos <= 0) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    agregarModuloVacio(
      titulo,
      parseInt(nivel, 10),
      parseInt(cantidadCursos, 10)
    );
    setNuevoModulo({ titulo: "", nivel: "", cantidadCursos: 0 });
    setMostrarFormulario(false);
  };

  const handleEditarModulo = () => {
    if (!moduloEnEdicion.titulo || !moduloEnEdicion.nivel) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    editarModulo(moduloEnEdicion.id, {
      titulo: moduloEnEdicion.titulo,
      nivel: parseInt(moduloEnEdicion.nivel, 10),
    });
    setModuloEnEdicion(null);
  };

  const handleEliminar = (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este módulo? Esta acción no se puede deshacer."
    );
    if (confirmacion) {
      eliminarModulo(id);
    }
  };

  const verModulo = (id) => {
    const moduloSeleccionado = modulos.find((mod) => mod.id === id);
    navigate(`/moduloprofesor/${id}`, {
      state: { modulo: moduloSeleccionado },
    });
  };

  return (
    <div className="home-profesor">
      <h2>Panel del Profesor</h2>

      <button
        className="btn main"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Cancelar" : "Agregar Módulo"}
      </button>

      {/* Formulario para agregar módulos */}
      {mostrarFormulario && (
        <div className="formulario-nuevo-modulo">
          <h3>Agregar Nuevo Módulo</h3>
          <label>
            Título del Módulo:
            <input
              type="text"
              value={nuevoModulo.titulo}
              onChange={(e) =>
                setNuevoModulo({ ...nuevoModulo, titulo: e.target.value })
              }
            />
          </label>
          <label>
            Nivel:
            <input
              type="number"
              value={nuevoModulo.nivel}
              onChange={(e) =>
                setNuevoModulo({ ...nuevoModulo, nivel: e.target.value })
              }
            />
          </label>
          <label>
            Cantidad de Cursos:
            <input
              type="number"
              value={nuevoModulo.cantidadCursos}
              onChange={(e) =>
                setNuevoModulo({
                  ...nuevoModulo,
                  cantidadCursos: parseInt(e.target.value, 10),
                })
              }
            />
          </label>
          <button className="btn main" onClick={handleAgregarModulo}>
            Guardar Módulo
          </button>
        </div>
      )}

      {/* Listado de módulos */}
      <div className="modulos-container">
        {modulos.map((modulo) => (
          <div key={modulo.id} className="modulo-item">
            {moduloEnEdicion && moduloEnEdicion.id === modulo.id ? (
              <>
                <h4>Editando Módulo {modulo.id}</h4>
                <label>
                  Título del Módulo:
                  <input
                    type="text"
                    value={moduloEnEdicion.titulo}
                    onChange={(e) =>
                      setModuloEnEdicion({
                        ...moduloEnEdicion,
                        titulo: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Nivel:
                  <input
                    type="number"
                    value={moduloEnEdicion.nivel}
                    onChange={(e) =>
                      setModuloEnEdicion({
                        ...moduloEnEdicion,
                        nivel: e.target.value,
                      })
                    }
                  />
                </label>
                <button onClick={handleEditarModulo} className="btn main">
                  Guardar Cambios
                </button>
                <button
                  onClick={() => setModuloEnEdicion(null)}
                  className="btn"
                  style={{ backgroundColor: "gray" }}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <h4>{modulo.titulo}</h4>
                <p>Nivel: {modulo.nivel}</p>
                <p>Cantidad de cursos: {modulo.cursos.length}</p>
                <button onClick={() => verModulo(modulo.id)}>Ver Módulo</button>
                <button
                  onClick={() =>
                    setModuloEnEdicion({
                      id: modulo.id,
                      titulo: modulo.titulo,
                      nivel: modulo.nivel,
                    })
                  }
                >
                  Editar Módulo
                </button>
                <button
                  onClick={() => handleEliminar(modulo.id)}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Eliminar Módulo
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProfesor;
