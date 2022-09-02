import React from 'react'
import data from './data.json'
import Item from './Item'

export default function Listado({carrito}) {
  
  return (
    <div className='container'>
      {data.map((item) => <Item key = {item.id} nombre = {item.producto.nombre} descripcion = {item.producto.descripcion} stock = {item.stock} carrito = {carrito}/> )}
    </div>
  )
}
