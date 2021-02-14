import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './style.css';
import CartWidget from '../cartWidget/cartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../../containers/ItemListContainer/mocks/productList';


const NavbarComponent= ()=> {

    return (
    
        <header>
    
           <div className="navigation">

              {/* SIDE BAR ICON*/}

              <div className='navbar'> 
                <i className='sideBarIcon'><FaBars/></i> 
              </div>
              
              {/* BRAND LOGO */}

              <div className='logoDiv'>
                <Link to= {`/`}><img className='logoImg' src="/images/logosmile.png" alt="logo" width='120px' height='120px' /></Link>
              </div>
            

              {/* CART */}

              <div className= 'cartIconDiv'>
                <Link to= {`/cart`}> <CartWidget/> </Link>
              </div>

          </div>

          {/* SIDE BAR TOGGLE*/}

          <nav className='nav-menu'>
                <ul className= 'nav-menu-items'>
                    <li className='navbar-toggle'>
                        <i className='closeicon'><AiOutlineClose/></i> 
                    </li>
                    <li> <NavLink to= {`/`} activeClassName="current" className="home_text"> Home </NavLink> </li>
                    <li> <NavLink to= {``} activeClassName="current" className="products_text"> Products </NavLink></li>
                    <li> <NavLink to = {`/category/${product.id}`} activeClassName="current"> Remeras </NavLink> </li>
                    <li><NavLink to = {`/category/${product.id}`} activeClassName="current"> Zapatillas </NavLink></li>
                    <li> <NavLink to= {`/cart`} activeClassName="current" className="shooping_cart_text"> Shopping Cart </NavLink> </li>
                    <li> <NavLink to= {`/contact`} activeClassName="current" className="contact_text"> Contact </NavLink> </li>
                </ul>
           </nav>

          

        </header>
    
  );
}

export default NavbarComponent;
