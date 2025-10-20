
import { useEffect, useState } from "react"

export const Carrusel = ({
    imagenes,
    titulo='Titulo por defecto',
    interval=5000,
    autoPlay=true,
    height='850px',
    className="container mb-4 text-center"
}) =>{
        const [contador, setContador] = useState(0)
        const [imgActual,setImgActual] = useState(imagenes && imagenes.length >0 ? imagenes[0].img : null)
        const [altActual, setAltActual] = useState('')

        useEffect (()=>{
            if(imagenes && imagenes.length >0){
                setImgActual(imagenes[0].img)
                setAltActual(imagenes[0].alt)
            }
        },[imagenes])
        
        //AutoPlay - cambiar imagen automaticamente
        useEffect (()=>{
            if (!autoPlay || !imagenes || imagenes.length <=1){
                return;
            } else {
            const cambiarImagen = () =>{
                setContador(prevContador =>{
                    let nuevoContador

                    if (prevContador>= imagenes.length-1){
                        nuevoContador=0
                    } else {
                        nuevoContador = prevContador+1
                    }

                    setImgActual (imagenes[nuevoContador].img)
                    setAltActual (imagenes[nuevoContador].alt)
                    return nuevoContador
                })
            }
            const timer = setTimeout(cambiarImagen,interval)
            return()=> clearTimeout(timer)
            }
        },[contador,autoPlay,interval,imagenes]);

        //Funcion para ir a la imagen anterior
        const irAnterior =()=>{
            let nuevoIndice
            if (contador===0){
                nuevoIndice = imagenes.length-1
            } else {
                nuevoIndice= contador -1
            }

            setContador(nuevoIndice)
            setImgActual(imagenes[nuevoIndice].img)
            setAltActual(imagenes[nuevoIndice].alt)
        }

        //Funcion para ir a la imagen siguiente
        const irSiguiente = () =>{
            let nuevoIndice
            if (contador===imagenes.length-1){
                nuevoIndice =0
            } else {
                nuevoIndice = contador+1
            }

            setContador(nuevoIndice)
            setImgActual(imagenes[nuevoIndice].img)
            setAltActual(imagenes[nuevoIndice].alt)
        }
        // Si no hay imágenes, mostrar mensaje
        if (!imagenes || imagenes.length ===0){
            return(
                <div className={className}>
                    <h1>{titulo}</h1>
                    <div className="alert alert-warning">
                        No hay imagenes para mostrar
                    </div>
                </div>
            )
        }
        // Función para cambiar a una imagen específica (para los puntos)
        const cambiarAImagen = (index) => {
            if (index >= 0 && index < imagenes.length) {
            setContador(index);
            setImgActual(imagenes[index].img);
            setAltActual(imagenes[index].alt);
            }
        };


    return(
        <div className={className}>
            <h1>{titulo}</h1>
            <div className="position-relative">
                {imgActual?(
                    <img
                    src={imgActual}
                    alt={altActual}
                    className="rounded w-100"
                    style={{
                        height: height,
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                    }}
                    />
                ):(
                    <div className="d-flex align-items-center justify-content-center bg-light rounded"
                    style={{height:height}}>
                        <span className="text-muted">Cargando imagenes...</span>
                    </div>
                    )}
                
                {imagenes.length>1 && (
                    <>
                    <button
                        onClick={irAnterior}
                        className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3"
                        style={{
                            opacity:0.8,
                            borderRadius:'50%',
                            width:'45px',
                            height:'45px',
                            border: '2px solid white',
                            boxShadow:'o 2px 10px rgba(0,0,0,0.5)'
                        }}
                        onMouseEnter={(e)=>e.target.style.opacity='1'}
                        onMouseLeave={(e)=>e.target.style.opacity='0.8'}
                    >
                        <i className="bi bi-chevron-left" style={{fontSize:'20px'}}></i>
                    </button>
                    <button
                        onClick={irSiguiente}
                        className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3"
                        style={{
                            opacity:0.8,
                            borderRadius:'50%',
                            width:'45px',
                            height:'45px',
                            border: '2px solid white',
                            boxShadow:'o 2px 10px rgba(0,0,0,0.5)'
                        }}
                        onMouseEnter={(e)=>e.target.style.opacity='1'}
                        onMouseLeave={(e)=>e.target.style.opacity='0.8'}
                    >
                        <i className="bi bi-chevron-right" style={{fontSize:'20px'}}></i>
                    </button>
                    </>
                )}
                {/* Indicadores de puntos opcionales */}
                {imagenes.length > 1 && (
                    <div className="mt-3">
                    {imagenes.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => cambiarAImagen(index)}
                        className={`btn btn-sm mx-1 ${
                            index === contador ? 'btn-secondary' : 'btn-outline-secondary'
                        }`}
                        style={{ width: '14px', height: '17px', borderRadius: '100%' }}
                        />
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
}