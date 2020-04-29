import React, { Fragment, useState } from 'react'

const Formulario = () => {
  //Crear State de Citas
  const [data, setData] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintoma: '',
  })

  const [error, setError] = useState(false)

  //función que se ejecuta cada vez que el usuario escribe en el input
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  //Destructuramos para extraer valores del state
  const { mascota, propietario, fecha, hora, sintomas } = data

  // CUando el usuario presiona agregar cita
  const SubmitData = (e) => {
    e.preventDefault()

    //Validar que todos los campos esten completos
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true)
      return
    }

    console.log('agregando')
    //Asignar un ID

    //Crear la cita

    //Reiniciar el form
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

        { error ? <p className="alerta-error">Todos los campos son obligatorios </p>   : null}

      <form onSubmit={SubmitData}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          paceholder="Nombre mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          paceholder="Nombre dueño de la mascota"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleChange}
        >
          Agregar Cita
        </button>
      </form>
    </Fragment>
  )
}

export default Formulario
