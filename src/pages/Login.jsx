// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext"; // Usamos el contexto de autenticación
// import Button from "../components/Button";
// import { useNavigate } from "react-router-dom"; // Para redirigir al Home después de iniciar sesión

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth(); // Usamos el contexto de autenticación
//   const navigate = useNavigate(); // Hook para redirigir al Home

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulación de login (puedes cambiar esto por una verificación real)
//     if (email === "pedro@hotmail.com" && password === "123") {
//       login({ username: "Pedro", email, role: "estudiante" }); // Guardamos al usuario en el contexto como estudiante
//       navigate("/home"); // Redirigimos al Home del Estudiante después de iniciar sesión
//     } else if (email === "profesor@hotmail.com" && password === "123") {
//       login({ username: "Profesor", email, role: "profesor" }); // Guardamos al usuario en el contexto como profesor
//       navigate("/homeProfesor"); // Redirigimos al Home del Profesor después de iniciar sesión
//     } else {
//       alert("Credenciales incorrectas"); // En caso de error
//     }
//   };

//   return (
//     <>
//       <div className="padre">
//         <div className="login-container">
//           <h2>¡Bienvenido de vuelta a la comunidad de Robotic Academy!</h2>
//           <div>
//             <button className="botonesLogin">login with Google</button>
//             <button className="botonesLogin">login with Facebook</button>
//           </div>
//           <form className="formContainer" onSubmit={handleSubmit}>
//             <label className="labelText" htmlFor="email">
//               Correo electrónico o usuario:
//             </label>
//             <input
//               className="textfield"
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="labelText" htmlFor="password">
//               Contraseña:
//             </label>
//             <input
//               className="textfield"
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="footer">
//               <div className="cuadro">
//                 <input type="checkbox" />
//                 <p className="labelText">Guardar información</p>
//               </div>
//               <Button tipo="submit" estilo="btn main" titulo="INICIAR SESIÓN" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;import React, { useState } from "react";

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Usamos el contexto de autenticación
import Button from "../components/Button";
import { useNavigate } from "react-router-dom"; // Para redirigir al Home después de iniciar sesión

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Usamos la función `login` del contexto de autenticación
  const navigate = useNavigate(); // Hook para redirigir al Home

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los usuarios guardados en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si las credenciales corresponden a un usuario
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      login(foundUser); // Inicia sesión en el contexto
      // Redirigir según el rol
      if (foundUser.role === "profesor") {
        navigate("/homeProfesor");
      } else {
        navigate("/home");
      }
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="padre">
      <div className="login-container">
        <h2>¡Bienvenido de vuelta a la comunidad de Robotic Academy!</h2>
        <div>
          <button className="botonesLogin">Login with Google</button>
          <button className="botonesLogin">Login with Facebook</button>
        </div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <label className="labelText" htmlFor="email">
            Correo electrónico o usuario:
          </label>
          <input
            className="textfield"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="labelText" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="textfield"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="footer">
            <div className="cuadro">
              <input type="checkbox" />
              <p className="labelText">Guardar información</p>
            </div>
            <Button tipo="submit" estilo="btn main" titulo="INICIAR SESIÓN" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
