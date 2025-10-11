import { Link } from 'react-router-dom'

export const Navbar=()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Academia</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ciclos">Ciclos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sedes">Sedes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academia">Sobre la academia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recursos">Recursos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/matricula">Matrícula</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://aula-virtual.com" target="_blank" rel="noopener noreferrer">
                Aula Virtual
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
