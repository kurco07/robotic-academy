import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ModulosContext } from "../context/ModulosProvider";

const EditarModulo = () => {
  const { modulos, editarModulo } = useContext(ModulosContext);
  const location = useLocation();
  const navigate = useNavigate();

  const modulo = location.state?.modulo; // Traemos el módulo a editar desde el estado de la navegación

  // Estado para el formulario de edición
  const [titulo, setTitulo] = useState(modulo.titulo);
  const [nivel, setNivel] = useState(modulo.nivel);

  const handleGuardarCambios = () => {
    if (!titulo || !nivel) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Guardamos los cambios en el módulo (solo título y nivel)
    editarModulo(modulo.id, {
      titulo,
      nivel,
    });

    navigate("/homeprofesor"); // Regresamos al panel del profesor después de guardar los cambios
  };

  return (
    <div className="editar-modulo">
      <h2>Editar Módulo: {modulo.titulo}</h2>
      <form>
        <label>
          Título del Módulo:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>

        <label>
          Nivel:
          <input
            type="number"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleGuardarCambios}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditarModulo;
