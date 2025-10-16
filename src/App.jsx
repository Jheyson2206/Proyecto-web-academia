
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Ciclos } from './pages/Ciclos'
import { Sedes } from './pages/Sedes'
import { Academia } from './pages/Academia'
import { Recursos } from './pages/Recursos'
import { Matricula } from './pages/Matricula'
import './App.css'
import { Alerta } from './components/Alerta'

function App() {
  return (
    <BrowserRouter>
      <Alerta txtalerta="¡Inscripciones abiertas hasta el 20 de octubre! No pierdas tu oportunidad de ingresar a la universidad de tus sueños"/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ciclos" element={<Ciclos/>} />
        <Route path="/sedes" element={<Sedes/>} />
        <Route path="/academia" element={<Academia/>} />
        <Route path="/recursos" element={<Recursos/>} />
        <Route path="/matricula" element={<Matricula/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App