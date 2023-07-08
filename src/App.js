import './App.css';
import ItemDetailContainer from './Components/itemDetailContainer';
import ItemListContainer from './Components/itemListContainer';
import NavBar from './Components/navBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Components/context/cartContext';
import { Cart } from './Components/cart';
import CheckOut from './Components/checkOut';



function App() {

  return (

    <div className='app'>

        <BrowserRouter>
            
            <CartProvider>

              <NavBar />

              <Routes>

                  <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la tienda de Adele'}/>}></Route>
                  <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
                  <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
                  <Route path='/cart' element={<Cart />}></Route>
                  <Route path='/checkout' element={<CheckOut />}></Route>
                  <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
                  

              </Routes>

            </CartProvider>

        </BrowserRouter>
      
    </div>

  );
}

export default App;

