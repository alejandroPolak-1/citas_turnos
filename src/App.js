import React, { Fragment, useState } from 'react'
import Formulario from './components/Formulario'
import Date from './components/Date'

function App() {
  // Aggrego de Citas
  const [dates, setDates] = useState([])

  //Funcion que tome citas actuales y agrege la nueva

  const createDate = (date) => {
    setDates([...dates, date])
  }

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createDate={createDate} />
          </div>

          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {dates.map((date) => (
              <Date
               key={date.id} 
               date={date} 
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
