
export const Footer =()=>{
    return (
        <footer className="mt-auto" style={{backgroundColor:'#f4bf1d'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Academia La Heroica</h5>
                        <p>Tu esfuerzo de hoy te convertirá en el profesional que el país necesita mañana.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Links de interes</h5>
                        <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-white">Home</a></li>
                        <li><a href="#" className="text-decoration-none text-white">Contactanos</a></li>
                        <li><a href="#" className="text-decoration-none text-white">Terminos y condiciones</a></li>
                        <li><a href="#" className="text-decoration-none text-white">Libro de reclamaciones</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Siguenos</h5>
                        <ul className="list-inline social-icons">
                        <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr className="mb-4"/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2025 Academia La Heroica. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}