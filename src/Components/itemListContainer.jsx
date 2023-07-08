
import './itemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './itemList'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../Components/services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

    useEffect(() => {

      setLoading(true)

      const collectionRef = categoriaId
        ? query (collection(db, 'products'), where ('categoria', '==', categoriaId))
        : collection(db, 'products')

      getDocs(collectionRef)
        .then(response => {

          const productsAdapted = response.docs.map(doc =>{

              const data = doc.data()
              return { id: doc.id, ...data }

          })

          setProducts(productsAdapted)

        })

        .catch(error => {

          console.log(error)

        })
        .finally(() => {

          setLoading(false)

        })

  }, [categoriaId])

  return (
    
    <div>

      <h1 className='saludo'>{greeting}</h1>
      <h2 className='h2Product'>Estos son los productos:</h2>

      <section className='products__section'>
      
          <div>

            <ItemList products={products}/>

          </div>

      </section>

    </div>


  )
}

export default ItemListContainer