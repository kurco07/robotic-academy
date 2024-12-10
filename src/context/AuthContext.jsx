// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Crear el contexto de autenticación
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Estado del usuario logueado
//   const navigate = useNavigate();

//   // Cargar usuario logueado desde localStorage al inicializar
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (storedUser) {
//       setUser(storedUser); // Restaurar usuario logueado
//     }
//   }, []);

//   // Función para registrar un nuevo usuario
//   const register = (userData) => {
//     // Obtener usuarios existentes desde localStorage
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Verificar si el email ya está registrado
//     const userExists = existingUsers.some(
//       (user) => user.email === userData.email
//     );
//     if (userExists) {
//       throw new Error("Este correo ya está registrado");
//     }

//     // Guardar el nuevo usuario en la lista
//     const updatedUsers = [...existingUsers, userData];
//     localStorage.setItem("users", JSON.stringify(updatedUsers));

//     // Iniciar sesión automáticamente después del registro
//     login(userData);
//   };

//   // Función para iniciar sesión
//   const login = ({ email, password }) => {
//     // Obtener usuarios existentes desde localStorage
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Buscar usuario con el email y verificar contraseña
//     const foundUser = existingUsers.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (!foundUser) {
//       throw new Error("Credenciales incorrectas");
//     }

//     // Establecer usuario logueado y guardarlo en localStorage
//     setUser(foundUser);
//     localStorage.setItem("currentUser", JSON.stringify(foundUser));

//     // Redirigir según el rol
//     if (foundUser.role === "profesor") {
//       navigate("/homeProfesor");
//     } else {
//       navigate("/home");
//     }
//   };

//   // Función para cerrar sesión
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("currentUser");
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto de autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario logueado
  const navigate = useNavigate();

  // Función para inicializar usuarios predeterminados
  const initializeDefaultUsers = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si ya existe el profesor en la lista de usuarios
    const professorExists = existingUsers.some(
      (user) => user.email === "profesor@hotmail.com"
    );

    if (!professorExists) {
      // Agregar usuario predeterminado del profesor
      const defaultProfessor = {
        email: "profesor@hotmail.com",
        username: "Profesor",
        password: "123",
        role: "profesor",
      };

      const updatedUsers = [...existingUsers, defaultProfessor];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  useEffect(() => {
    // Inicializar usuarios predeterminados al cargar el contexto
    initializeDefaultUsers();

    // Restaurar usuario logueado si existe
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Función para registrar un nuevo usuario
  const register = (userData) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(
      (user) => user.email === userData.email
    );
    if (userExists) {
      throw new Error("Este correo ya está registrado");
    }
    const updatedUsers = [...existingUsers, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    login(userData);
  };

  const login = ({ email, password }) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      throw new Error("Credenciales incorrectas");
    }

    setUser(foundUser);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    if (foundUser.role === "profesor") {
      navigate("/homeProfesor");
    } else {
      navigate("/home");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
