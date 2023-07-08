import './cartItem.css'

const CartItem = ({nombre, precio}) => {

    return (
        
        <div className='cartCounter'>
          
            <div className='product1'>
    
                <h2 className='product__name'>{nombre}</h2>
                <p className='product__price'>Precio: $ {precio}</p>
    
            </div> 

        </div>
        
    )
              
}

export default CartItem