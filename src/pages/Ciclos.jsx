import { useState } from "react"
import ingenieria from "../assets/images/ingenieria.jpg"
import medicos from "../assets/images/medicos.jpg"
import humanidades from "../assets/images/humanidades.jpg"
import maraton from "../assets/images/maraton.jpg"

export const Ciclos =()=>{
    const [tabActiva, setTabActiva]=useState('ingenierias')

    const contenidoCiclos={
        ingenierias:{
            imagen: ingenieria,
            titulo:"Ciclo Ingenierias",
            descripcion:"Preparacion especializada para carreras de Ingenieria",
            contenido:(
                <div>
                    <h4>
                        Areas que cubrimos:
                    </h4>
                    <ul>
                        <li>Matematica avanzada</li>
                        <li>Fisica</li>
                        <li>Quimica</li>
                        <li>Razonamiento Verbal</li>
                        <li>Razonamiento matematico</li>
                        <li>Humanidades y ciencias sociales</li>
                    </ul>
                    <h4>Duracion:</h4>
                    <ul>
                        <li>3 meses</li>
                        <li>Clases Sabados y Domingos</li>
                        <li>De 9 am - 2 pm</li>
                    </ul>
                </div>
            )
        },
        medicas:{
            imagen: medicos,
            titulo:"Ciclo Ciencias Medicas",
            descripcion:"Preparacion especializada para carreras de ciencias medicas.",
            contenido:(
                <div>
                    <h4>
                        Areas que cubrimos:
                    </h4>
                    <ul>
                        <li>Biologia</li>
                        <li>Quimica</li>
                        <li>Fisica</li>
                        <li>Matematica avanzada</li>
                        <li>Humanidades y ciencias sociales</li>
                    </ul>
                    <h4>Duracion:</h4>
                    <ul>
                        <li>3 meses</li>
                        <li>Clases Sabados y Domingos</li>
                        <li>De 9 am - 2 pm</li>
                    </ul>
                </div>
            )
        },
        letras:{
            imagen: humanidades,
            titulo:"Ciclo Letras y Humanidades",
            descripcion:"Preparacion especializada para carreras de letras y humanidades.",
            contenido:(
                <div>
                    <h4>
                        Areas que cubrimos:
                    </h4>
                    <ul>
                        <li>Habilidad Verbal</li>
                        <li>Lenguaje</li>
                        <li>Literatura</li>
                        <li>Historia</li>
                        <li>Matematica avanzada</li>
                        <li>Fisica</li>
                    </ul>
                    <h4>Duracion:</h4>
                    <ul>
                        <li>3 meses</li>
                        <li>Clases Sabados y Domingos</li>
                        <li>De 9 am - 2 pm</li>
                    </ul>
                </div>
            )
        },
        maratones:{
            imagen: maraton,
            titulo:"Maratones",
            descripcion:"Preparación intensiva previa al examen de admisión con clases continuas durante todo el día.",
            contenido:(
                <div>
                    <h4>Incluye:</h4>
                    <ul>
                        <li>Repaso integral de todos los temas</li>
                        <li>Resolución de exámenes de años anteriores</li>
                        <li>Simulacros tipo admisión</li>
                        <li>Técnicas y estrategias para el examen</li>
                        <li>Reforzamiento de temas débiles</li>
                    </ul>
                    <h4>Modalidad:</h4>
                    <ul>
                        <li>Clases intensivas de 8am a 8pm</li>
                        <li>Una semana antes del examen de admisión</li>
                        <li>Material de estudio incluido</li>
                        <li>Simulacro final el último día</li>
                    </ul>
                </div>
            )
        }
    }

    return(
        <div className="container my-5">
            <h3 className='text-center mb-4'>Conoce nuestros ciclos especializados</h3>
            <div className="card text-center shadow">
                <div className="card-header bg-white">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <button 
                                    className={`nav-link ${tabActiva === 'ingenierias' ? 'active' : ''}`}
                                    onClick={() => setTabActiva('ingenierias')}
                                    style={{ color: tabActiva !== 'ingenierias' ? '#f4b814' : '' }}
                                >
                                    Ciclo Ingenierías
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                    className={`nav-link ${tabActiva === 'medicas' ? 'active' : ''}`}
                                    onClick={() => setTabActiva('medicas')}
                                    style={{ color: tabActiva !== 'medicas' ? '#f4b814' : '' }}
                                >
                                    Ciclo Ciencias Medicas
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                    className={`nav-link ${tabActiva === 'letras' ? 'active' : ''}`}
                                    onClick={() => setTabActiva('letras')}
                                    style={{ color: tabActiva !== 'letras' ? '#f4b814' : '' }}
                                >
                                    Ciclo Letras y Humanidades
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                    className={`nav-link ${tabActiva === 'maratones' ? 'active' : ''}`}
                                    onClick={() => setTabActiva('maratones')}
                                    style={{ color: tabActiva !== 'maratones' ? '#f4b814' : '' }}
                                >
                                    Maratones
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="card-body p-5">
                    <h5 className="card-title fw-bold mb-4 text-center">
                        {contenidoCiclos[tabActiva].titulo}
                    </h5>
                    <div className="row">
                        <div className="col-md-6">
                            <img 
                                src={contenidoCiclos[tabActiva].imagen} 
                                alt={contenidoCiclos[tabActiva].titulo}
                                className="img-fluid rounded shadow"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <p className="card-text mb-4">
                                {contenidoCiclos[tabActiva].descripcion}
                            </p>
                            <div className="text-start">
                                {contenidoCiclos[tabActiva].contenido}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}