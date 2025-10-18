import { useState } from "react"

export const Ciclos =()=>{
    const [tabActiva, setTabActiva]=useState('ingenierias')

    const contenidoCiclos={
        ingenierias:{
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
            titulo:"Ciclo Ciencias Medicas",
            descripcion:"Preparacion especializada para carreras de Ingenieria",
            contenido:(
                <div>
                    <h4>
                        Areas que cubrimos:
                    </h4>
                    <ul>
                        <li>Matematica avanzada</li>
                        <li>Fisica</li>
                    </ul>
                </div>
            )
        },
        letras:{
            titulo:"Ciclo Letras y Humanidades",
            descripcion:"Preparacion especializada para carreras de Ingenieria",
            contenido:(
                <div>
                    <h4>
                        Areas que cubrimos:
                    </h4>
                    <ul>
                        <li>Matematica avanzada</li>
                        <li>Fisica</li>
                    </ul>
                </div>
            )
        },
        maratones:{
            titulo:"Maratones",
            descripcion:"Preparacion especializada para carreras de Ingenieria",
            contenido:(
                <div>
                    <h4>
                        Areas que cubrimos:
                    </h4>
                    <ul>
                        <li>Matematica avanzada</li>
                        <li>Fisica</li>
                    </ul>
                </div>
            )
        }
    }

    return(
        <div>
            <h3 className='text-center mb-4 my-5'>Conoce nuestros ciclos especializados</h3>
            <div className="card text-center">
                <div className="card-header">
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
                        <h5 className="card-title fw-bold mb-3">
                            {contenidoCiclos[tabActiva].titulo}
                        </h5>
                        <p className="card-text mb-4">
                            {contenidoCiclos[tabActiva].descripcion}
                        </p>
                        <div className="text-start">
                            {contenidoCiclos[tabActiva].contenido}
                        </div>
                </div>
            </div>
        </div>
        
    )
}