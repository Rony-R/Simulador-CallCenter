import React, { Fragment } from "react";

const Resultado = ({ resultado, ocultar }) => {
  if (Object.keys(resultado).length === 0) {
    return null;
  }

  if (ocultar) {
    return null;
  }

  const {
    ingresos,
    gastos,
    utilidad,
    llamadasAtendidas,
    ventasMujeres,
    ventasHombres,
  } = resultado;

  return (
    <Fragment>
      <div className="card-panel blue-grey lighten-5 z-depth-3">
        <h4 className="teal-text center-align">Resultado</h4>
        <ul className="center-align">
          <li className="mb3">Ingresos: ${ingresos}</li>
          <li className="mb3">Gastos(Bono Empleados): ${gastos}</li>
          <li className="mb3">Utilidad: ${utilidad}</li>
        </ul>
      </div>

      <div className="card-panel blue-grey lighten-5 z-depth-3">
        <h4 className="teal-text center-align">Otros Datos</h4>
        <ul className="center-align">
          <li className="mb3">Llamadas Atendidas: {llamadasAtendidas}</li>
          <li className="mb3">Ventas de Mujeres: ${ventasMujeres}</li>
          <li className="mb3">Ventas de Hombres: ${ventasHombres}</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Resultado;
