import React, { useContext } from 'react';
import { CartContext } from './context/cartContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './cart.css'

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const formato = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  const total = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0)

  return (

    <div className="counter">

    <div>

        {cart.length === 0 ? (

            <div className="row">

                <h1 className="display-5 text-center">Carro sin productos</h1> 

                <Link to="/" className="btnCheck">Volver al Catálogo</Link>

            </div>
                     
        ) : (
        
          <div>
            {cart.map((item) => (

              <div key={item.id} className="counterFinal">
                
                    <div>

                        <h5 className="nombreCar">{item.nombre}</h5>

                        <h6>Cantidad: {item.quantity}</h6>

                        <h6>Precio: {formato(item.precio)}</h6>

                        <h6>Sub-Total: {formato(item.precio * item.quantity)}</h6>

                    </div>                   
            </div>

            )
        
        )
    }

            <div className='total1'>

              <span className='total'>Total: {formato(total)}</span> 

            </div>

            <div className='counterFinal2'> 

              <button className='btnLimpiar' onClick={() => clearCart()}>Vaciar Carrito</button>
              <Link to='/checkout'><button className='btnCheck'>Checkout</button></Link>
              <Link to="/" ><button className="btnCheck1">Volver al Catálogo</button></Link>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart }

