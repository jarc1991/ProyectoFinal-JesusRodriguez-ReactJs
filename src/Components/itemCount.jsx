import './itemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {

        if (quantity < stock) {

        setQuantity(quantity + 1)}
        
    }

    const decrement = () => {
       
    if (quantity > stock){

        setQuantity(quantity - 1 )}

    }
    
    return (

        <div className='divContainer'>

            <div className='controlContainer'>

                <button className='btnDI' onClick={increment}>+</button>
                <h4 className='numberDI'>{quantity}</h4>
                <button className='btnDI' onClick={decrement}>-</button>

            </div>
            <div>

                <button className='btnAgreg' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>

            </div>

        </div>
  )
}

export default ItemCount