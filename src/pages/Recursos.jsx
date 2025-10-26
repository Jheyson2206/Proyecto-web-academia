import matematica from '../assets/images/matematica.png'
import letras from '../assets/images/lenguaje.png'
import ciencias from '../assets/images/ciencias.png'

export const Recursos =()=>{
    return(
        <div>
            <h1 className="text-center">Recursos de la Academia</h1>
            <div className="container my-5">
                <h3 className="text-center mb-4">Algunos examenes que puedes practicar</h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={matematica} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Examen Matematicas</h5>
                                <p className="card-text">Examen rapido de 10 preguntas para que practiques.</p>
                                <a href="#" className="btn btn-warning">Inicia</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={letras} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Examen Letras</h5>
                                <p className="card-text">Examen de 20 preguntas para que practiques.</p>
                                <a href="#" className="btn btn-warning">Inicia</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={ciencias} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Examen Ciencias</h5>
                                <p className="card-text">Examen de 20 preguntas para que practiques</p>
                                <a href="#" className="btn btn-warning">Inicia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h3 className="text-center mb-4">Clases de muestra</h3>
                <p className="text-center mb-2">Aqui puedes ver algunas clases de muestra de los profesores de la academia.</p>
                <div className="ratio ratio-16x9">
                    <iframe
                    src="https://www.youtube.com/embed/_6uyQISZvBc"
                    title="YouTube video"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
