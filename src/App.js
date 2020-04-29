import React, { Fragment } from 'react'
import Formulario from './components/Formulario'

function App() {
  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="conteiner">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>

          <div className="one-half column">
            <Formulario />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
