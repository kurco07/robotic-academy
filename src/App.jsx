
import { AuthProvider } from "./context/AuthContext";
import LoginEstudiante from "./Rutas/LoginEstudiante";

function App() {
  return (
    <>
    <AuthProvider>
      <LoginEstudiante />
    </AuthProvider>
    </>
  );
}

export default App;
