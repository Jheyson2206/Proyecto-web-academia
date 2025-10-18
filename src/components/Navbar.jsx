import { Link } from 'react-router-dom'

export const Navbar=()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'rgba(162, 6, 33)'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">La Heroica</Link>
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
              <a className="nav-link" href="https://cibertec.blackboard.com/" target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#f4b814', color:'rgba(162, 6, 33)'}}>
                Aula Virtual
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
