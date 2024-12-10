// import React, { createContext, useState } from "react";

// export const ModulosContext = createContext();

// const ModulosProvider = ({ children }) => {
//   const [modulos, setModulos] = useState([
//     // Inicialmente puedes tener módulos precargados o comenzar con un array vacío
//   ]);

//   // Función para agregar un nuevo módulo vacío
//   const agregarModuloVacio = (titulo, nivel, cantidadCursos) => {
//     const nuevoId = modulos.length ? modulos[modulos.length - 1].id + 1 : 1;
//     const nuevoModulo = {
//       id: nuevoId,
//       titulo: titulo || `Nuevo Módulo ${nuevoId}`,
//       nivel: nivel || 1,
//       cursos: Array.from({ length: cantidadCursos }, (_, index) => ({
//         id: nuevoId * 100 + (index + 1),
//         titulo: "",
//         descripcion: "",
//         duracion: "",
//       })),
//     };

//     setModulos((prevModulos) => [...prevModulos, nuevoModulo]);
//   };

//   // Función para editar el título y nivel de un módulo
//   const editarModulo = (id, nuevosDatos) => {
//     const modulosActualizados = modulos.map((modulo) =>
//       modulo.id === id
//         ? { ...modulo, titulo: nuevosDatos.titulo, nivel: nuevosDatos.nivel }
//         : modulo
//     );
//     setModulos(modulosActualizados);
//   };

//   // Función para eliminar un módulo
//   const eliminarModulo = (id) => {
//     const modulosActualizados = modulos.filter((modulo) => modulo.id !== id);
//     setModulos(modulosActualizados);
//   };

//   return (
//     <ModulosContext.Provider
//       value={{
//         modulos,
//         setModulos,
//         agregarModuloVacio,
//         editarModulo,
//         eliminarModulo,
//       }}
//     >
//       {children}
//     </ModulosContext.Provider>
//   );
// };

// export default ModulosProvider;

import React, { createContext, useState, useEffect } from "react";

export const ModulosContext = createContext();

const ModulosProvider = ({ children }) => {
  // Cargar los módulos desde localStorage si existen, o usar un array vacío
  const cargarModulosDesdeLocalStorage = () => {
    const modulosGuardados = JSON.parse(localStorage.getItem("modulos"));
    return modulosGuardados || [];
  };

  const [modulos, setModulos] = useState(cargarModulosDesdeLocalStorage());

  // Guardar los módulos en localStorage cada vez que cambien
  useEffect(() => {
    if (modulos.length > 0) {
      localStorage.setItem("modulos", JSON.stringify(modulos));
    }
  }, [modulos]);

  // Función para agregar un nuevo módulo vacío
  const agregarModuloVacio = (titulo, nivel, cantidadCursos) => {
    const nuevoId = modulos.length ? modulos[modulos.length - 1].id + 1 : 1;
    const nuevoModulo = {
      id: nuevoId,
      titulo: titulo || `Nuevo Módulo ${nuevoId}`,
      nivel: nivel || 1,
      cursos: Array.from({ length: cantidadCursos }, (_, index) => ({
        id: nuevoId * 100 + (index + 1),
        titulo: "",
        descripcion: "",
        duracion: "",
      })),
    };

    setModulos((prevModulos) => [...prevModulos, nuevoModulo]);
  };

  // Función para editar el título y nivel de un módulo
  const editarModulo = (id, nuevosDatos) => {
    const modulosActualizados = modulos.map((modulo) =>
      modulo.id === id
        ? { ...modulo, titulo: nuevosDatos.titulo, nivel: nuevosDatos.nivel }
        : modulo
    );
    setModulos(modulosActualizados);
  };

  // Función para eliminar un módulo
  const eliminarModulo = (id) => {
    const modulosActualizados = modulos.filter((modulo) => modulo.id !== id);
    setModulos(modulosActualizados);
  };

  return (
    <ModulosContext.Provider
      value={{
        modulos,
        setModulos,
        agregarModuloVacio,
        editarModulo,
        eliminarModulo,
      }}
    >
      {children}
    </ModulosContext.Provider>
  );
};

export default ModulosProvider;
