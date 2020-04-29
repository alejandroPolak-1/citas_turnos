import React, { Fragment, useState } from 'react'
import Formulario from './components/Formulario'

function App() {

  // Aggrego de Citas
  const[dates,setDates]= useState([])

  //Funcion que tome citas actuales y agrege la nueva

  const createDate = cita => {
    console.log(cita);
    

  }

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              createDate={createDate}
            />
          </div>

          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
