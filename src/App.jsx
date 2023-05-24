import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  // Antes del return puedo poner todo el código de JS
  const [cantidad, setCantidad] = useState(1000000);
  //la función setCantidad modifica el state de cantidad

  const [meses, setMeses] = useState(6);
  // la función setMeses modifica el state de meses

  const [total, setTotal] = useState(0);

  const [pagoMeses, setPagoMeses] = useState(0);

  useEffect(() => {
    
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);

  },[cantidad, meses]);
  
  useEffect(() => {

    setPagoMeses(total / meses);

  }, [total]);
  
  const MIN = 0; //valor mínimo del input
  const MAX = 2000000; //valor máximo del input
  const STEP = 100000; //saltos de 100 en 100
  function handleChangeRango(e) {
    setCantidad(+e.target.value); //para modificar cantidad debo usar la función directamente
  }

  function handleChangeMeses(e) {
    setMeses(+e.target.value);
  }

  function handleClickDecremento(e) {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert("Cantidad no válida");
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento(e) {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert("Cantidad no válida");
      return;
    }
    setCantidad(valor);
  }

  return (
    // Después del return puedo poner todo el código HTML

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between mt-5">
        <Button operador="-" evento={handleClickDecremento} />
        <Button operador="+" evento={handleClickIncremento} />
      </div>
      <input
        type="range"
        className="w-full mt-5 h-6 accent-indigo-600 hover:accent-indigo-700"
        onChange={handleChangeRango}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="font-extrabold text-5xl text-indigo-600 text-center">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 mt-4 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center font-bold text-xl text-gray-600"
        value={meses}
        onChange={handleChangeMeses}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="bg-gray-50 p-5 my-5 space-y-3">
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span className="text-indigo-600">de pagos</span>
      </h2>
      <p className="text-gray-500 text-center text-xl font-bold">Meses: {meses}</p>
      <p className="text-gray-500 text-center text-xl font-bold">Total a Pagar: {formatearDinero(total)}</p>
      <p className="text-gray-500 text-center text-xl font-bold">Mensuales: {formatearDinero(pagoMeses)}</p>
      </div>
    </div>
  );
}

export default App;
