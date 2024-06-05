import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VerTodasLasTareas from './VerTodasLasTareas'
import ProveedorDeTareas from './context/ProveedorDeTareas'
import './Navbar.css';
import { useState } from 'react';
function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
  setMenuAbierto(!menuAbierto);
  };
  

  return (
    <Router>

      <ProveedorDeTareas>
        {/* entre estas dos etiquetas los componentes que esten, tendran el contexto  */}
        {/* aca se encuentran los children nombrados en el proveedor */}

        <nav>
          <div className={`menu ${menuAbierto ? 'abierto' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul>
              <li>
                <Link to="/agregar" onClick={toggleMenu}>
                  Agregar Tarea
                </Link>
              </li>
              <li>
                <Link to="/ver-todas" onClick={toggleMenu}>
                  Ver Todas las Tareas
                </Link>
              </li>
              <li>
                <Link to="/editar/1" onClick={toggleMenu}>
                  Editar Tarea
                </Link>
              </li>
            </ul>
          </div>
        </nav>


        <Routes>
          <Route path="/ver-todas" element={<VerTodasLasTareas />} />

        </Routes>
      </ProveedorDeTareas>
    </Router>
  )
}

export default App
