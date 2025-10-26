import { Beneficios } from "../components/Beneficios"
import academia from "../assets/images/academia.png"

export const Academia =()=>{
    return (
        <div>
            <div className="container my-5">
                <div className="card mb-3">
                    <img src={academia} className="card-img-top" alt="Academia" style={{ height: '600px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h3 className="card-title text-center">Nuestra Historia</h3>
                        <p className="card-text">La Academia Pre Universitaria La Heroica cuenta desde hace 14 años con un equipo de profesionales 
                            que se ha especializado en brindar el mejor servicio educativo, necesario para lograr el mayor éxito en los distintos 
                            exámenes de ingreso a las universidades de Lima, Perú y Latinoamérica. El grupo multidisciplinario que hemos llegado 
                            a formar es una de nuestras mayores virtudes, puesto que nos ha permitido enfrentar de una manera más integrada los problemas 
                            relacionados con los procesos de admisión. Por ello, la sinergia lograda es la base de nuestra enseñanza. </p>
                        <h3 className="card-title text-center">Vision</h3>
                        <p className="card-text">El presente quinquenio, la Academia Pre universitaria La Heroica logrará ser reconocida como una organización 
                            líder en calidad educativa, formando alumnos competentes y comprometidos con el progreso del país, adoptando 
                            un modelo curricular similar al cubano, que promueva el desarrollo del talento humano, con una cultura general e integral, 
                            con capacidad actitudinal, cognoscitiva, productiva e innovativa; orientando nuestros esfuerzos hacia la transformación y solución 
                            de los problemas multidisciplinarios que beneficien los intereses colectivos y de la sociedad en general, vinculado a una 
                            participación reflexiva y un aprendizaje permanente, propiciado por la construcción del conocimiento, protección, gestión del medio 
                            ambiente y gestión de la información y del conocimiento. </p>
                        <h3 className="card-title text-center">Mision</h3>
                        <p className="card-text">Descubrir, promover y potencializar las capacidades del alumno La Heroica, que le permitan un desarrollo integral para
                            desenvolverse con éxito en una sociedad en constante cambio, contando con el apoyo de la Comunidad Educativa </p>
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