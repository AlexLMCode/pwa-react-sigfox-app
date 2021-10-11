import React from 'react'
import { Link } from 'react-router-dom'
import MainTable from './MainTable'

const Principal = () => {
  return (
    <div>
      <section className="container mt-5">
        <h1>Bienvenido...</h1>
        <p>Los datos mostrados son del dia de hoy</p>
        <MainTable option="mensajes" />
        <Link to="/historial" className="mt-3 mb-5 d-flex justify-content-center">Acceder a los datos de dias anteriores...</Link>
      </section>
    </div>
  )
}

export default Principal
