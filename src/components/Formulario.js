import React, { Fragment } from 'react'

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          paceholder="Nombre mascota"
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          paceholder="Nombre dueño de la mascota"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          //   paceholder=""
        />

        <label>Hora</label>
        <input
          type="time"
          name="horao"
          className="u-full-width"
          //   paceholder=""
        />

        <label>Sintomas</label>
        <textarea 
            className="u-full-width" 
            name="sintomas">
        </textarea>

        <button
            type="submit"
            className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  )
}

export default Formulario
