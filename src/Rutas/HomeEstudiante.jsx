// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import Cursos from "../components/Cursos";
// import Navbar from "../components/navbar";
// import About from "../pages/About";
// import Curso from "../pages/Curso";
// const HomeEstudiante = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/cursos" element={<Cursos />} />
//         <Route path="/curso/:id" element={<Curso />} /> {/* Ruta dinámica */}
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Navigate to="home" />} />
//       </Routes>
//     </>
//   );
// };

// export default HomeEstudiante;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cursos from "../components/Cursos";
import Navbar from "../components/navbar";
import About from "../pages/About";
import HomeProfesor from "../pages/HomeProfesor"; // Importa HomeProfesor
import ModuloProfesor from "../components/ModuloProfesor";
import CursoDetalle from "../pages/CursoDetalle";
import Curso from "../pages/Curso";
import EditarModulo from "../components/EditarModulo";
import EditarCurso from "../pages/EditarCurso";

const HomeEstudiante = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Rutas para el Estudiante */}
        <Route path="/home" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<Curso />} /> {/* Ruta dinámica */}
        <Route path="/about" element={<About />} />
        {/* Rutas para el Profesor */}
        <Route path="/homeprofesor" element={<HomeProfesor />} />{" "}
        {/* Página principal del Profesor */}
        <Route path="/moduloprofesor/:id" element={<ModuloProfesor />} />
        <Route path="/editarmodulo/:id" element={<EditarModulo />} />
        <Route path="/editarcurso/:id" element={<EditarCurso />} />
        {/* Redirección predeterminada */}
        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
    </>
  );
};

export default HomeEstudiante;
