import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';





const App= () => {
  return (
    
      <>
        < NavbarComponent /> 
        < ItemListContainer greeting={"Bienvenidos"}/>
      </>
      
    
  );
}

export default App;
