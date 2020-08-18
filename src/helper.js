/*
  Diccionario
  Entrada =>  Numero de llamadas del dia    => llamadas
              precio del producto del dia.  => precioProducto
  
  Proceso =>  Probabilidad de llamada atendida      => probAtendidas
              Total de llamadas atendidas           => llamadasAtendidas
              Total de llamdas no atendidas         => llamadasNoAtendidas   ///Esta no sirve para lo qeu buscamos ahora.
              Ventas por mujeres                    => ventasMujeres
              Ventas por hombres                    => ventasHombres
              Probabilidad conteste mujer           => probMujer
              Probabilidad conteste hombre          => probHombre
              Llamadas atendidas y aceptan oferta   => ventas
              Porcentaje a empleado por venta       => bono 


  Salida => Ingresos                        => ingresos
            Gastos por bonos a empleados    => gastos
            Utilidad                        => utilidad
*/

export const generar = (jornada) => {
  let { llamadas, precio } = jornada;

  //Segun estudios de mercado se tiene que cierto porcentaje de las llamadas son atendidas
  let probAtendidas = parseFloat(Math.random()).toFixed(4); //Un decimal entre 0 y 1 pseudoaleatorio de 4 cifras
  let llamadasAtendidas = Math.round(probAtendidas * llamadas);

  //En ese mismo estudio se detalla que de ese numero de llamadas atendidas solo un ratio de estas seran exitosas ventas, teniendo las mujeres una probabilidad y los hombres otra.
  let probHombre = parseFloat(Math.random()).toFixed(4);
  let probMujer = parseFloat(Math.random()).toFixed(4);

  let ventasMujeres = probMujer * llamadasAtendidas;
  let ventasHombres = probHombre * llamadasAtendidas;

  //El ingreso de la jornada se dara por el total de la suma de las ventas a hombres y ventas a mujeres y esto multiplicado por el precio del articulo
  let ventas = Math.round(ventasHombres + ventasMujeres);
  let ingresos = parseFloat(ventas * precio).toFixed(2);

  //Para calcular el total de gastos por bonos hechos a los empleados por venta se tiene un % que sera destinado al empleado
  //No excedera del 10%

  let bono = parseFloat(Math.random()).toFixed(4);
  //bono <= 0.1 ? gastos = (ingresos * bono) : gastos = ingresos * 0.1;
  let gastos = parseFloat(bono * ingresos).toFixed(2);

  //Por ultimo tenemos una utilidad del dia
  let utilidad = parseFloat(ingresos - gastos).toFixed(2);

  return {
    ingresos: ingresos,
    gastos: gastos,
    utilidad: utilidad,
    llamadasAtendidas: llamadasAtendidas,
    ventasMujeres: ventasMujeres.toFixed(4),
    ventasHombres: ventasHombres.toFixed(4),
  };
};
