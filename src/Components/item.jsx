import './item.css'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, img, categoria, precio, alt}) => {

  return (
        <>
        
        <div className='product'>

            <h2>{nombre}</h2>
            <img src={img} alt={alt} className='product__Img'></img>
            <p className='product__Price'>Precio: $ {precio}</p>
            <p>Categoria: {categoria}</p>

            <div>

                <Link to={`/item/${id}`} className='detalle'>Ver Detalle</Link>

            </div>

        </div>

        </>


  )

}

export default Item