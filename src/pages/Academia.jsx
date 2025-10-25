import { Beneficios } from "../components/Beneficios"
import academia from "../assets/images/academia.png"

export const Academia =()=>{
    return (
        <div>
            <div className="container my-5">
                <div className="card mb-3">
                    <img src={academia} className="card-img-top" alt="Academia" style={{ height: '600px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            

            <div className='container my-5'>
                <h3 className='text-center mb-4'>Nuestros Beneficios</h3>
                    <div className='row justify-content-center'>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Beneficios
                                icono="book" 
                                titulo="Enseñanza dividida por áreas de postulación" 
                                texto="Ciclos especializados para reforzar lo que necesitas para tu examen." 
                                color="#f4b814"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Beneficios
                                icono="award" 
                                titulo="Enseñanza con alto nivel académico" 
                                texto="Preparación Intensiva con material académico, preparado para las mejores universidades del país." 
                                color="#f4b814"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Beneficios
                                icono="clipboard-check" 
                                titulo="Simulacros semanales tipo admisión" 
                                texto="Exámenes de 100 preguntas con seguimiento y reforzamiento." 
                                color="#f4b814"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Beneficios
                                icono="person-check" 
                                titulo="Docentes especializados y experimentados" 
                                texto="Profesores con amplia experiencia en preparación preuniversitaria y egresados de las mejores universidades del país." 
                                color="#f4b814"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Beneficios
                                icono="file-earmark-text" 
                                titulo="Material académico actualizado" 
                                texto="Separatas, guías de estudio y banco de preguntas actualizadas según los últimos exámenes de admisión." 
                                color="#f4b814"
                            />
                        </div>
                    </div>
            </div>
        </div>
    )
}