import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/contact';
import CategoriesContainer from './containers/CategoriesContainer/categoriesContainer';
import CartContextProvider from './context/CartContextProvider';
import Cart from './components/cart/Cart';
import { useState } from 'react'


const App= () => {

  ////const [cart, setCart]= useSatate ()

  return (

  
    <BrowserRouter>

      <CartContextProvider>
      
        <header>
          < NavbarComponent /> 
        </header>

        
        <Switch>


          <Route exact path= "/">
            <ItemListContainer/>
          </Route>

          <Route exact path= "/category/:categoryId">
            <CategoriesContainer/>
          </Route>

          <Route exact path= "/item/:itemId">
           <ItemDetailContainer/>
          </Route>

          <Route exact path= "/cart">
            <Cart/>
          </Route>

          <Route exact path= "/contact">
              <Contact/>
          </Route>

        </Switch>

        <footer>

        </footer>

      </CartContextProvider>

    </BrowserRouter>
      
    
      
    
  );
}

export default App;
