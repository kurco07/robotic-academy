// import React from "react";
// import { useAuth } from "../context/AuthContext"; // Asegúrate de importar el contexto
// import Button from "./Button";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const { user, logout } = useAuth(); // Accedemos a la autenticación

//   return (
//     <>
//       <nav>
//         <div className="bar">
//           <div className="leftBar">
//             <h3 className="titulo_logo">Robotic</h3>
//             <ul className="ul_navbar">
//               <li style={{ color: "#3434FF" }}>
//                 <NavLink to="home">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="cursos">Cursos</NavLink>
//               </li>
//               <li>
//                 <NavLink to="about">Acerca de nosotros</NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="rightBar">
//             {user ? (
//               <>
//                 <span className="user-greeting">Bienvenido, {user.username}</span>
//                 {/* Aquí se asegura de que el onClick llame al logout */}
//                 <Button estilo="btn secundary" titulo="Cerrar sesión" onClick={logout} />
//               </>
//             ) : (
//               <>
//                 <Button url="login" estilo="btn main" titulo="INICIAR SESIÓN" />
//                 <Button url="register" estilo="btn secundary" titulo="REGISTRARSE" />
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;







import React from "react";
import { useAuth } from "../context/AuthContext"; // Asegúrate de importar el contexto
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth(); // Accedemos a la autenticación

  return (
    <>
      <nav>
        <div className="bar">
          <div className="leftBar">
            <h3 className="titulo_logo">Robotic</h3>
            <ul className="ul_navbar">
              {/* Mostrar las rutas comunes */}
              <li style={{ color: "#3434FF" }}>
                <NavLink to={user?.role === "profesor" ? "homeProfesor" : "home"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="cursos">Cursos</NavLink>
              </li>
              <li>
                <NavLink to="about">Acerca de nosotros</NavLink>
              </li>
            </ul>
          </div>
          <div className="rightBar">
            {user ? (
              <>
                <span className="user-greeting">Bienvenido, {user.username}</span>
                {/* Aquí se asegura de que el onClick llame al logout */}
                <Button estilo="btn secundary" titulo="Cerrar sesión" onClick={logout} />
              </>
            ) : (
              <>
                <Button url="login" estilo="btn main" titulo="INICIAR SESIÓN" />
                <Button url="register" estilo="btn secundary" titulo="REGISTRARSE" />
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
