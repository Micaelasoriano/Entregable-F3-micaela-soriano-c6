import { useState } from 'react';
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'

function App() {

  const [compra, setCompra] = useState(0)

  const aumentarCarrito = ()=>{
    setCompra(compra + 1)
  }

  return (
    <div className="App">
      <Cabecera cantidad={compra}/>
      <Listado carrito={aumentarCarrito}/>
    </div>
  );
}

export default App;