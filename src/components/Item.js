import '../index.css'
import { useState } from 'react'

export default function Item({nombre, descripcion, stock, carrito}) {

  const [stockActual, setStockActual] = useState(stock)

  const actualizarStock = ()=>{
    setStockActual(stockActual - 1)
    carrito()
  }

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        En stock: <span>{stockActual > 0 ? stockActual : "sin stock"}</span>
      </h5>
      <button onClick={actualizarStock} disabled = {stockActual <= 0}>Comprar</button>
    </div>
  )
}

