import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png' 
import otros1 from '../assets/images/otros1.png'
import otros2 from '../assets/images/otros2.png'
import otros3 from '../assets/images/otros3.png'
import otros4 from '../assets/images/otros4.png'
import otros5 from '../assets/images/otros5.png'
import otros6 from '../assets/images/otros6.png'

import { Beneficios } from '../components/Beneficios';
import { Carrusel } from "../components/Carrusel";
import { CarruselTresImagenes } from '../components/CarruselTresImg'

export const Home =()=>{
    const imagenes = [
    {img:img1, alt:'imagen1'},
    {img:img2, alt:'imagen2'},
    {img:img3, alt:'imagen3'},
    ]

    const otros =[
        otros1,otros2,otros3,otros4,otros5,otros6
    ]

    return(
        <main>
            <Carrusel
                    imagenes={imagenes}
                    titulo=''
                    interval={5000}
                    autoPlay={true}
            />
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
                </div>
            </div>

            <div className='container my-5'>
                <h2 className='text-center mb-4'>Nuestro cachimbos</h2>
                <CarruselTresImagenes otros={otros} />
            </div>

            <div className='container justify-content-center align-item-center my-5'>
                <h3 className='text-center mb-4'>Los Tips de confianza</h3>
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-lg-4 mb-3'>
                        <div className="card text-bg-warning">
                            <div className="card-header">Tip 1</div>
                            <div className="card-body">
                                <h5 className="card-title">Domina la teoria con estrategia</h5>
                                <p className="card-text">No se trata solo de memorizar, sino de comprender. Organiza tus temas por nivel de dificultad y prioriza lo que más pesa en el examen.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                        <div className="card text-bg-warning">
                            <div className="card-header">Tip 2</div>
                            <div className="card-body">
                                <h5 className="card-title">Entrena con simulacros reales</h5>
                                <p className="card-text">Practicar como si estuvieras en el examen te ayuda a medir tu avance, controlar tus nervios y mejorar tu rendimiento cada semana.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 mb-3'>
                        <div className="card text-bg-warning">
                            <div className="card-header">Tip 3</div>
                            <div className="card-body">
                                <h5 className="card-title">Manten disciplina y enfoque</h5>
                                <p className="card-text">El éxito no depende solo del talento, sino de la constancia. Estudia con un plan diario y evita distracciones para avanzar con claridad.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </main>
    )
}