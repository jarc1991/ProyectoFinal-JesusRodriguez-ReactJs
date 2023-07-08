import './cart.css'
import { useContext } from 'react'
import { CartContext } from './context/cartContext'
import CartItem from './cartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, totalCantidad, total } = useContext(CartContext)

    if(totalCantidad === 0) {

        return (

            <div>

                <h1>No hay nada en el carrito</h1>
                <Link to='/' className='btnForm'>Productos</Link>

            </div>

        )

    }

    return (

        <>
        <div className='counter'>
            <div className='counterFinal'>

                { cart.map (p => <CartItem key={p.id} {...p}/>) }

            </div>
            <div className='counterFinal2'>
            
                <h3 className='total'>Total: ${ total }</h3>
                <button onClick={() => clearCart()} className='btnLimpiar'>Limpiar carrito</button>
                <Link to='/checkout' className='btnCheck'>Checkout</Link>

            </div>
        </div>

        </>
    )
}



export { Cart }