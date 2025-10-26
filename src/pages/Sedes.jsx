import sede1 from '../assets/images/sede1.png'
import sede2 from '../assets/images/sede2.png'
import sede3 from '../assets/images/sede3.png'

export const Sedes = () => {
    const sedes = [
        {
            imagen: sede1,
            nombre: "Sede Central",
            descripcion: (
                <div>
                    <h4>Direccion:</h4>
                    <ul>
                        <li>Av Mexico 1043 - La Victoria</li>
                    </ul>
                    <h4>Horarios de Atencion:</h4>
                    <ul>
                        <li>Lunes a Viernes: 8 am - 7 pm</li>
                        <li>Sabados y Domingos: 9 am - 4 pm</li>
                    </ul>
                </div>
            )
        },
        {
            imagen: sede2,
            nombre: "Sede Norte",
            descripcion: (
                <div>
                    <h4>Direccion:</h4>
                    <ul>
                        <li>Calle Anton Sanchez 108 - Rimac</li>
                    </ul>
                    <h4>Horarios de Atencion:</h4>
                    <ul>
                        <li>Lunes a Viernes: 8 am - 7 pm</li>
                        <li>Sabados y Domingos: 9 am - 4 pm</li>
                    </ul>
                </div>
            )
        },
        {
            imagen: sede3,
            nombre: "Sede Sur",
            descripcion: (
                <div>
                    <h4>Direccion:</h4>
                    <ul>
                        <li>Av San Fernando 125 - Surquillo</li>
                    </ul>
                    <h4>Horarios de Atencion:</h4>
                    <ul>
                        <li>Lunes a Viernes: 8 am - 7 pm</li>
                        <li>Sabados y Domingos: 9 am - 4 pm</li>
                    </ul>
                </div>
            )
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