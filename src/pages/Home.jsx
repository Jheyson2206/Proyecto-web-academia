import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import { Carrusel } from "../components/Carrusel";

export const Home =()=>{
    const imagenes = [
    {img:img1, alt:'imagen1'},
    {img:img2, alt:'imagen2'},
    {img:img3, alt:'imagen3'},
    ];

    return(
        <main>
            <Carrusel
                    imagenes={imagenes}
                    titulo=''
                    interval={5000}
                    autoPlay={true}
            />
        </main>
    )
}