
import { useState, useEffect } from 'react';

export const CarruselTresImagenes = ({ otros }) => {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 3) % otros.length);
        }, 5000);
        return () => clearInterval(intervalo);
    }, [otros.length]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img 
                        src={otros[indice]} 
                        alt="Imagen 1"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-4">
                    <img 
                        src={otros[indice + 1]} 
                        alt="Imagen 2"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-4">
                    <img 
                        src={otros[indice + 2]} 
                        alt="Imagen 3"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
};