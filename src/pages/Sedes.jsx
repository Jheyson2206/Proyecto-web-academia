import sede1 from '../assets/images/sede1.png'
import sede2 from '../assets/images/sede2.png'
import sede3 from '../assets/images/sede3.png'

export const Sedes = () => {
    const sedes = [
        {
            imagen: sede1,
            nombre: "Sede Central",
            descripcion: "Ubicada en el corazón de la ciudad, con aulas completamente equipadas."
        },
        {
            imagen: sede2,
            nombre: "Sede Norte",
            descripcion: "Moderna infraestructura y fácil acceso desde todas las zonas del norte."
        },
        {
            imagen: sede3,
            nombre: "Sede Sur",
            descripcion: "Amplio espacio y ambiente ideal para el estudio concentrado."
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5 fw-bold">Nuestras Sedes</h2>
            <div className="row">
                {sedes.map((sede, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow border-0">
                            <img 
                                src={sede.imagen} 
                                className="card-img-top" 
                                alt={sede.nombre}
                                style={{ height: '350px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{sede.nombre}</h5>
                                <p className="card-text">{sede.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};