import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeEstudiante from "./HomeEstudiante";

const LoginEstudiante = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<HomeEstudiante />} />
      </Routes>
    </>
  );
};

export default LoginEstudiante;


