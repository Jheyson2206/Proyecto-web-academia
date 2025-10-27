import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

const arrayDocumentos = [
    {value: 1, text: 'DNI'},
    {value: 2, text: 'CE'}
]

const arraySedes = [
    {value: 1, text: 'Central'},
    {value: 2, text: 'Norte'},
    {value: 3, text: 'Sur'}
]

const arrayCiclos = [
    {value: 1, text: 'Ingenierías'},
    {value: 2, text: 'Ciencias Médicas'},
    {value: 3, text: 'Letras y Humanidades'},
    {value: 4, text: 'Maratones'}
]

export const Formulario = () => {

    const initialState = {
        nombre: '',
        apellidos: '',
        dni: '',
        celular: '',
        celularEmergencia: '',
        email: '',
        documento: 0,
        departamento: '',
        provincia: '',
        distrito: '',
        sede: 0,
        ciclo: 0,
        aceptaTerminos:false,
        aceptaPolitica:false
    }
    const [data, handleChange] = useForm(initialState)

    const [errorNombre, setErrorNombre] = useState('')
    const [errorApellidos, setErrorApellidos] = useState('')
    const [errorDni, setErrorDni] = useState('')
    const [errorCelular, setErrorCelular] = useState('')
    const [errorCelularEmergencia, setErrorCelularEmergencia] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorDocumentos, setErrorDocumentos] = useState('')
    const [errorDepartamento, setErrorDepartamento] = useState('')
    const [errorProvincia, setErrorProvincia] = useState('')
    const [errorDistrito, setErrorDistrito] = useState('')
    const [errorSedes, setErrorSedes] = useState('')
    const [errorCiclos, setErrorCiclos] = useState('')
    const [errorTerminos,setErrorTerminos]=useState('')
    const [errorPolitica,setErrorPolitica]=useState('')

    const [listaDocumentos, setListaDocumentos] = useState([])
    const [listaSedes, setListaSedes] = useState([])
    const [listaCiclos, setListaCiclos] = useState([])

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        handleChange({ target: { name, value: checked } })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validarNombre()
        validarApellidos()
        validarDocumentos()
        validarDni()
        validarCelular()
        validarCelularEmergencia()
        validarEmail()
        validarDepartamento()
        validarProvincia()
        validarDistrito()
        validarSedes()
        validarCiclos()
        validarTerminos()
        validarPolitica()
        
    }

    const saveData = () => {
        // Verificar si TODOS los datos son válidos antes de guardar
        const esValido = 
            data.nombre !== '' &&
            data.apellidos !== '' &&
            data.documento !== 0 &&
            data.dni !== '' &&
            data.celular !== '' &&
            data.celularEmergencia !== '' &&
            data.email !== '' &&
            data.departamento !== '' &&
            data.provincia !== '' &&
            data.distrito !== '' &&
            data.sede !== 0 &&
            data.ciclo !== 0 &&
            data.aceptaTerminos === true &&
            data.aceptaPolitica === true

        if (esValido) {
            console.log('Datos del formulario:', data)
            alert('Formulario enviado correctamente')
            // Aquí puedes hacer el envío real de datos
        } else {
            alert('Por favor complete todos los campos requeridos')
        }
    }

    const validarNombre = () => {
        const regexNombre = RegExp("^[\\p{L}\\s]+$", "u")
        if (data.nombre === '') {
            setErrorNombre('Ingresar Nombre')
        } else {
            if (regexNombre.test(data.nombre)) {
                setErrorNombre('')
            } else {
                setErrorNombre('Nombre no es válido')
            }
        }
    }

    const validarApellidos = () => {
        const regexApellidos = RegExp("^[\\p{L}\\s]+$", "u")
        if (data.apellidos === '') {
            setErrorApellidos('Ingresar Apellido')
        } else {
            if (regexApellidos.test(data.apellidos)) {
                setErrorApellidos('')
            } else {
                setErrorApellidos('Apellido no es válido')
            }
        }
    }

    const validarDocumentos = () => {
        if (data.documento !== 0 && data.documento !== '0') {
            setErrorDocumentos('')
        } else {
            setErrorDocumentos('Seleccionar un tipo de documento')
        }
    }

    const validarDni = () => {
        const tipoDoc = parseInt(data.documento)
        
        if (tipoDoc === 0) {
            setErrorDni('Primero seleccione un tipo de documento')
            return
        }

        if (data.dni === '') {
            setErrorDni('Ingresar número de documento')
            return
        }

        if (tipoDoc === 1) {
            const regexDni = RegExp("^\\d{8}$")
            if (regexDni.test(data.dni)) {
                setErrorDni('')
            } else {
                setErrorDni('DNI debe tener 8 dígitos')
            }
        } else if (tipoDoc === 2) {
            const regexCE = RegExp("^\\d{10}$")
            if (regexCE.test(data.dni)) {
                setErrorDni('')
            } else {
                setErrorDni('CE debe tener 10 dígitos')
            }
        }
    }

    const validarCelular = () => {
        const regexCelular = RegExp("^9\\d{8}$")
        if (data.celular === '') {
            setErrorCelular('Ingresar celular')
        } else {
            if (regexCelular.test(data.celular)) {
                setErrorCelular('')
            } else {
                setErrorCelular('Celular debe empezar con 9 y tener 9 dígitos')
            }
        }
    }

    const validarCelularEmergencia = () => {
        const regexCelular = RegExp("^9\\d{8}$")
        if (data.celularEmergencia === '') {
            setErrorCelularEmergencia('Ingresar celular de emergencia')
        } else {
            if (regexCelular.test(data.celularEmergencia)) {
                setErrorCelularEmergencia('')
            } else {
                setErrorCelularEmergencia('Celular debe empezar con 9 y tener 9 dígitos')
            }
        }
    }

    const validarEmail = () => {
        const regexEmail = RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")
        if (data.email === '') {
            setErrorEmail('Ingresar email')
        } else {
            if (regexEmail.test(data.email)) {
                setErrorEmail('')
            } else {
                setErrorEmail('Email no válido')
            }
        }
    }

    const validarDepartamento = () => {
        const regexTexto = RegExp("^[\\p{L}\\s]+$", "u")
        if (data.departamento === '') {
            setErrorDepartamento('Ingresar departamento')
        } else {
            if (regexTexto.test(data.departamento)) {
                setErrorDepartamento('')
            } else {
                setErrorDepartamento('Departamento no válido')
            }
        }
    }

    const validarProvincia = () => {
        const regexTexto = RegExp("^[\\p{L}\\s]+$", "u")
        if (data.provincia === '') {
            setErrorProvincia('Ingresar provincia')
        } else {
            if (regexTexto.test(data.provincia)) {
                setErrorProvincia('')
            } else {
                setErrorProvincia('Provincia no válida')
            }
        }
    }

    const validarDistrito = () => {
        const regexTexto = RegExp("^[\\p{L}\\s]+$", "u")
        if (data.distrito === '') {
            setErrorDistrito('Ingresar distrito')
        } else {
            if (regexTexto.test(data.distrito)) {
                setErrorDistrito('')
            } else {
                setErrorDistrito('Distrito no válido')
            }
        }
    }

    const validarSedes = () => {
        if (data.sede !== 0 && data.sede !== '0') {
            setErrorSedes('')
        } else {
            setErrorSedes('Seleccionar una sede')
        }
    }

    const validarCiclos = () => {
        if (data.ciclo !== 0 && data.ciclo !== '0') {
            setErrorCiclos('')
        } else {
            setErrorCiclos('Seleccionar un ciclo')
        }
    }

    const validarTerminos=()=>{
        if (data.terminos !== true && data.terminos !== '0') {
            setErrorTerminos('')
        } else {
            setErrorTerminos('Aceptar Terminos y Condiciones')
        }
    }

    const validarPolitica=()=>{
        if (data.politica !== true && data.politica !== '0') {
            setErrorPolitica('')
        } else {
            setErrorPolitica('Aceptar Politica de Datos')
        }
    }


    useEffect(() => {
        if (data.documento !== 0 && data.dni !== '') {
            validarDni()
        }
    }, [data.documento, data.dni])

    useEffect(() => {
        setListaDocumentos(arrayDocumentos)
        setListaSedes(arraySedes)
        setListaCiclos(arrayCiclos)
    }, [])

    const getMaxLengthDni = () => {
        const tipoDoc = parseInt(data.documento)
        if (tipoDoc === 1) return 8
        if (tipoDoc === 2) return 10
        return 10
    }

    return (
        <div className="container mt-5 mb-4"> 
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                <h5 className="mb-3" style={{color: '#f4b814'}}>Datos Personales</h5>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Nombre: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese Nombre"
                            value={data.nombre}
                            name='nombre'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        {errorNombre !== '' && <span className="text-danger small">{errorNombre}</span>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Apellidos: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese Apellidos"
                            value={data.apellidos}
                            name='apellidos'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        {errorApellidos !== '' && <span className="text-danger small">{errorApellidos}</span>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Tipo de Documento: <span className="text-danger">*</span></label>
                        <select 
                            className="form-select"
                            value={data.documento}
                            name='documento'
                            onChange={handleChange}
                        >
                            <option value={0}>Seleccione su documento</option>
                            {
                                listaDocumentos.length > 0 &&
                                listaDocumentos.map((x, idx) => (
                                    <option value={x.value} key={`doc_${idx}`}>{x.text}</option>
                                ))
                            }
                        </select>
                        {errorDocumentos !== '' && <span className="text-danger small">{errorDocumentos}</span>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Número de documento: <span className="text-danger">*</span>
                            {data.documento == 1 && <span className="text-muted small"> (8 dígitos)</span>}
                            {data.documento == 2 && <span className="text-muted small"> (10 dígitos)</span>}
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese número de documento"
                            value={data.dni}
                            name='dni'
                            maxLength={getMaxLengthDni()}
                            autoComplete="off"
                            onChange={handleChange}
                            disabled={data.documento === 0 || data.documento === '0'}
                        />
                        {errorDni !== '' && <span className="text-danger small">{errorDni}</span>}
                    </div>
                </div>

                <h5 className="mb-3 mt-4" style={{color: '#f4b814'}}>Datos de Contacto</h5>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Celular: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese Celular"
                            value={data.celular}
                            name='celular'
                            autoComplete="off"
                            onChange={handleChange}
                            maxLength={9}
                        />
                        {errorCelular !== '' && <span className="text-danger small">{errorCelular}</span>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Celular de Emergencia: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese Celular de Emergencia"
                            value={data.celularEmergencia}
                            name='celularEmergencia'
                            autoComplete="off"
                            onChange={handleChange}
                            maxLength={9}
                        />
                        {errorCelularEmergencia !== '' && <span className="text-danger small">{errorCelularEmergencia}</span>}
                    </div>
                    <div className="col-12 mb-3">
                        <label className="form-label">Email: <span className="text-danger">*</span></label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Ingrese email"
                            value={data.email}
                            name='email'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        {errorEmail !== '' && <span className="text-danger small">{errorEmail}</span>}
                    </div>
                </div>

                <h5 className="mb-3 mt-4" style={{color: '#f4b814'}}>Datos de Residencia</h5>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Departamento: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese departamento"
                            value={data.departamento}
                            name='departamento'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        {errorDepartamento !== '' && <span className="text-danger small">{errorDepartamento}</span>}
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Provincia: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese provincia"
                            value={data.provincia}
                            name='provincia'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        {errorProvincia !== '' && <span className="text-danger small">{errorProvincia}</span>}
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Distrito: <span className="text-danger">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingrese distrito"
                            value={data.distrito}
                            name='distrito'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        {errorDistrito !== '' && <span className="text-danger small">{errorDistrito}</span>}
                    </div>
                </div>

                <h5 className="mb-3 mt-4" style={{color: '#f4b814'}}>Datos de Matrícula</h5>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Sede: <span className="text-danger">*</span></label>
                        <select 
                            className="form-select"
                            value={data.sede}
                            name='sede'
                            onChange={handleChange}
                        >
                            <option value={0}>Seleccione una sede</option>
                            {
                                listaSedes.length > 0 &&
                                listaSedes.map((x, idx) => (
                                    <option value={x.value} key={`sede_${idx}`}>{x.text}</option>
                                ))
                            }
                        </select>
                        {errorSedes !== '' && <span className="text-danger small">{errorSedes}</span>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Ciclo: <span className="text-danger">*</span></label>
                        <select 
                            className="form-select"
                            value={data.ciclo}
                            name='ciclo'
                            onChange={handleChange}
                        >
                            <option value={0}>Seleccione un ciclo</option>
                            {
                                listaCiclos.length > 0 &&
                                listaCiclos.map((x, idx) => (
                                    <option value={x.value} key={`ciclo_${idx}`}>{x.text}</option>
                                ))
                            }
                        </select>
                        {errorCiclos !== '' && <span className="text-danger small">{errorCiclos}</span>}
                    </div>
                </div>

                <h5 className="mb-3 mt-4" style={{color: '#f4b814'}}>Términos y Condiciones</h5>
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                name="terminos"
                                checked={data.terminos}
                                onChange={handleCheckboxChange}
                                id="terminos"
                            />
                            <label className="form-check-label" htmlFor="terminos">
                                Acepto los{' '}
                                <a 
                                    href="/terminos-condiciones" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{color: '#f4b814', textDecoration: 'underline'}}
                                >
                                    Términos y Condiciones
                                </a>
                                {' '}<span className="text-danger">*</span>
                            </label>
                        </div>
                        {errorTerminos !== '' && <span className="text-danger small d-block mt-1">{errorTerminos}</span>}
                    </div>
                    
                    <div className="col-12 mb-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                name="politica"
                                checked={data.politica}
                                onChange={handleCheckboxChange}
                                id="politica"
                            />
                            <label className="form-check-label" htmlFor="politica">
                                Acepto la{' '}
                                <a 
                                    href="/politica-privacidad" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{color: '#f4b814', textDecoration: 'underline'}}
                                >
                                    Política de Privacidad y Uso de Datos
                                </a>
                                {' '}<span className="text-danger">*</span>
                            </label>
                        </div>
                        {errorPolitica !== '' && <span className="text-danger small d-block mt-1">{errorPolitica}</span>}
                    </div>
                </div>


                <div className="col-12 mt-4">
                    <button type="submit" className="btn w-100" style={{backgroundColor: '#f4b814', borderColor: '#f4b814', color: '#000', fontWeight: 'bold'}}>
                        Registrar Matrícula
                    </button>
                </div>
            </form>
        </div>
    )
}