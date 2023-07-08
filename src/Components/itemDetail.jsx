import './itemDetail.css'
import ItemCount from './itemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/cartContext'

const ItemDetail = ({ id, nombre, img, categoria, precio, stock, detalle, alt }) => {

  const [cantidadAgregada, setCantidadAgregada] = useState(0)

  const { addItem } = useContext(CartContext)

  const agregar = (quantity) => {

    setCantidadAgregada(quantity)

    const item = {

      id, nombre, precio

    }

    addItem(item, quantity)

  }

  return (

    <div className='product'>

        <h2>{nombre}</h2>
        <img src={img} alt={alt} className='product__Img'></img>
        <p className='product__Price'>Precio: $ {precio}</p>
        <p>Categoria: {categoria}</p>
        <p>Stock disponible: {stock}</p>
        <p><strong>Detalle del producto: {detalle}</strong></p>

        <div>
          {
            cantidadAgregada > 0 ? (

              <Link to='/cart' className='carrito'>Terminar compra</Link>

            ) : (

            <ItemCount  initial={1} stock={stock} onAdd={agregar}/>

            )

          }

        </div>

    </div>


  )

}

export default ItemDetail