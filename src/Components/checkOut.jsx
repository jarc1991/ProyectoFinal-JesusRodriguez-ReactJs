import { useContext, useState } from "react"
import { CartContext } from "./context/cartContext"
import { useForm } from  'react-hook-form'
import { collection, addDoc,  } from "firebase/firestore"
import { db } from "./services/firebase/firebaseConfig"
import './checkOut.css'
const CheckOut = () => {

    const [pedidoId, setPedido] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)
    const { register, handleSubmit } = useForm()
    const comprar = (data) => {

        const pedido = {

            cliente: data,
            productos: cart,
            total: total(),
        }

        console.log(pedido)

        const pedidosRef = collection(db, 'pedidos')

        addDoc(pedidosRef, pedido)
            .then((doc) => {

                setPedido(doc.id)
                clearCart()
            })
    }

    if(pedidoId) {

        return (

            <div className="container">

                <h1 className="gracias">GRACIAS POR COMPRAR EN ADELE STORE</h1>
                <p className="compraId">Tú ID de compra es: {pedidoId}</p>

            </div>
        )
    }

  return (
    <div className="containerCheckout">

        <h1 className="checkoutTitle">Rellene el siguiente formulario para finalizar su compra:</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} className="inputForm"></input>
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email") } className="inputForm"></input>
                <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono") } className="inputForm"></input>

                <button className="enviar" type="submit">Finalizar compra</button>

            </form>

    </div>
  )
}

export default CheckOut

