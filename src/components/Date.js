import React from 'react';

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
 
export default Date;