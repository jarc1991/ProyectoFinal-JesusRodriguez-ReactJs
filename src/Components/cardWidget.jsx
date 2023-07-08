import './cardWidget.css'
import { useContext } from 'react';
import { CartContext } from './context/cartContext';
import { Link } from 'react-router-dom';

const CardWid = () => {

  const { totalCantidad } = useContext(CartContext)

  return (

    <>

    <Link to='/cart' className='btnCart' >
    <i className="bi bi-cart-plus-fill">{totalCantidad}</i>
    </Link>


    </>

  )
}

export default CardWid;
