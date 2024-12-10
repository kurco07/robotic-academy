// import React, { useState } from "react";
// import Button from "../components/Button";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <>
//       <div className="padre">
//         <div className="login-container">
//           <h2>¡Bienvendio de vuelta a la comunidad de Robotic Academy!</h2>
//           <div>
//             <button className="botonesLogin">Registrate con Google</button>
//             <button className="botonesLogin">Registrate con facebook</button>
//           </div>
//           <form className="formContainer">
//             <label className="labelText" htmlFor="email">
//               Correo electrónico:
//             </label>
//             <input
//               className="textfield"
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="labelText" htmlFor="email">
//               Usuario:
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
//                 <p className="labelText">
//                   Acepto los términos y condiciones de uso
//                 </p>
//               </div>
//               <Button estilo="btn main" titulo="REGISTRAR" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;
import React, { useState } from "react";
import Button from "../components/Button";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios existentes del localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el correo ya está registrado
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      alert("Este correo ya está registrado. Intenta con otro.");
      return;
    }

    // Crear un nuevo usuario con rol de estudiante
    const newUser = { email, username, password, role: "estudiante" };

    // Agregar el nuevo usuario a la lista y guardar en localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    // Redirigir a la página de inicio de sesión
    window.location.href = "/login";
  };

  return (
    <div className="padre">
      <div className="login-container">
        <h2>¡Bienvenido a la comunidad de Robotic Academy!</h2>
        <div>
          <button className="botonesLogin">Regístrate con Google</button>
          <button className="botonesLogin">Regístrate con Facebook</button>
        </div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <label className="labelText" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            className="textfield"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="labelText" htmlFor="username">
            Usuario:
          </label>
          <input
            className="textfield"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              <p className="labelText">
                Acepto los términos y condiciones de uso
              </p>
            </div>
            <Button tipo="submit" estilo="btn main" titulo="REGISTRAR" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
