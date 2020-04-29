import React from 'react';
import PropTypes from 'prop-types'

const Date = ({date, removeDate}) => (
    <div className="cita">
        <p>Mascota: <spam>{date.mascota}</spam></p>
        <p>Dueño: <spam>{date.propietario}</spam></p>
        <p>Fecha: <spam>{date.fecha}</spam></p>
        <p>Hora: <spam>{date.hora}</spam></p>
        <p>Sintomas: <spam>{date.sintomas}</spam></p>

    <button
    className="button eliminar u-full-width"
    onClick={()=>removeDate(date.id)}
    >Eliminar &times;</button>
    
    </div>
)

Date.propTypes = {
    date: PropTypes.object.isRequired,
    removeDate: PropTypes.func.isRequired,
}
 
export default Date;