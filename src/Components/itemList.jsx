import './itemList.css'
import Item from './item'


const ItemList = ({ products }) => {

    return (

        <div className='listGroup'>

            {products.map(prod => <Item key={prod.id} {...prod} />)}

        </div>

    )

}

export default ItemList