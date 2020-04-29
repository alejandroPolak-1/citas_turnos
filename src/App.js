import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Date from './components/Date'

function App() {
  //Citas en Local Storage
  let datesIniciales= JSON.parse(localStorage.getItem('dates'));
  if(!datesIniciales) {
    datesIniciales= []
  }

  // Aggrego de Citas
  const [dates, setDates] = useState(datesIniciales)

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if(datesIniciales) {
      localStorage.setItem('dates', JSON.stringify(dates))
    } else {
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [dates, datesIniciales])

  //Funcion que tome citas actuales y agrege la nueva

  const createDate = (date) => {
    setDates([...dates, date])
  }

  // Funcion que elimina una cita por su Id
  const removeDate = (id) => {
    const newDates = dates.filter((date) => date.id !== id)
    setDates(newDates)
  }

  //mensage condicional
  const title = dates.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createDate={createDate} />
          </div>

          <div className="one-half column">
            <h2>{title}</h2>
            {dates.map((date) => (
              <Date key={date.id} date={date} removeDate={removeDate} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
