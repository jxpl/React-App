import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/inicio'
import Contacto from './Paginas/Contacto'
import Registro from './Paginas/Registro'

function App()  {
   return(
      <div>
        <Router>
          <Routes>
            <Route path='/Inicio' element={<Inicio/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Registro' element={<Registro/>}/>
          </Routes>
        </Router>
      </div>
   )
}

export default App