import { Formulario } from "../components/Formulario"

export const Matricula = () =>{
    return(
        <div className="mt-5">
            <div className="container">
                <h1 className="text-center">Registro Pre - Matricula</h1>
                <p className="text-center">A continuacion registre el DNI, Apellidos, Nombres, Correo electronico y telefonos. Tenga en cuenta que los datos a registrar deben ser del estudiante.</p>
            </div>
            
            <Formulario/>
        </div>
    )
}