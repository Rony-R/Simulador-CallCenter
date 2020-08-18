import React, { useState } from "react";
import { generar } from "../helper";

import Error from "./Error";

const Formulario = ({ guardarResultado, setOcultar }) => {
  const [jornada, guardarJornada] = useState({
    llamadas: 0,
    precio: 0,
  });

  const { llamadas, precio } = jornada;

  const [error, actualizarError] = useState(false);

  const actualizarJornada = (e) => {
    guardarJornada({
      ...jornada,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Comprobar
    if (llamadas <= 0 || precio <= 0) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    setOcultar(false);

    //Mandarlo al principal
    guardarResultado(
      generar({
        llamadas: parseInt(llamadas),
        precio: parseInt(precio),
      })
    );
  };

  const LimpiarForm = () => {
    guardarJornada({
      llamadas: 0,
      precio: 0,
    });
    setOcultar(true);
  };

  return (
    <div className="card-panel blue-grey lighten-5 z-depth-3">
      <form className="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="number"
              name="llamadas"
              id="llamadas"
              value={llamadas}
              onChange={actualizarJornada}
            />
            <label htmlFor="llamadas">Llamadas Jornada</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              type="number"
              name="precio"
              id="precio"
              value={precio}
              onChange={actualizarJornada}
            />
            <label htmlFor="precio">Precio del Producto</label>
          </div>
        </div>

        {error ? (
          <div className="row">
            <Error />
          </div>
        ) : null}

        <div className="row">
          <button
            className="btn waves-effect waves-light btn-large col s12"
            type="submit"
            name="action"
          >
            Generar
          </button>
        </div>
      </form>

      <div className="row">
        <button
          className="btn waves-effect waves-light btn-large col s12"
          type="button"
          onClick={LimpiarForm}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default Formulario;
