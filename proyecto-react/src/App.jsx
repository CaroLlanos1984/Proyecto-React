import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemListContainer/ItemDetailContainer/ItemDetailContainer';





const App= () => {
  return (
    
      <BrowserRouter>
      
        <header>
          < NavbarComponent /> 
        </header>

        <ItemDetailContainer/>

        <Switch>

          <Route exact path= "/">
            < ItemListContainer/>
          </Route>

        </Switch>

        <footer>

        </footer>

      </BrowserRouter>
      
    
  );
}

export default App;
