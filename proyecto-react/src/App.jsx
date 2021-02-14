import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/cartWidget/cartWidget';
import Contact from './components/contact';
import CategoriesContainer from './containers/CategoriesContainer/categoriesContainer';





const App= () => {
  return (
    
      <BrowserRouter>
      
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
            <CartWidget/>
          </Route>

          <Route exact path= "/contact">
              <Contact/>
          </Route>

        </Switch>

        <footer>

        </footer>

      </BrowserRouter>
      
    
  );
}

export default App;
