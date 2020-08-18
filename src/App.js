import React, { Fragment, useState } from "react";

import Formulario from "./componets/Formulario";
import Resultado from "./componets/Resultado";

function App() {
  const [resultado, guardarResultado] = useState({});

  const [ocultar, setOcultar] = useState(false);

  return (
    <Fragment>
      <h1 className="teal-text center-align">Simulador CallCenter</h1>
      <div className="grid-container">
        <div>
          <Formulario
            guardarResultado={guardarResultado}
            setOcultar={setOcultar}
          />
        </div>
        <div>
          <Resultado resultado={resultado} ocultar={ocultar} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
