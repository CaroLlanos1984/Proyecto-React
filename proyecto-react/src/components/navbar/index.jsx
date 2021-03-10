import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './style.css';
import CartWidget from '../cartWidget/cartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useState, useContext} from 'react';
import {CartContext} from '../../context/CartContextProvider';





const NavbarComponent= ()=> {

  const [sidebar, setSidebar]= useState (false)
  const showSidebar = () => setSidebar (!sidebar) 

  
  const CartContextUse = useContext(CartContext)

  const {cart, setCart} = useContext (CartContext)
  

    return (
    
        <> 

           <div className="navigation">

              {/* SIDE BAR ICON*/}

              <div className='navbar'> 
                <Link to= {``} className='sideBarIcon' > <i> <FaBars onClick={showSidebar} /> </i> </Link>
              </div>
              
              {/* BRAND LOGO */}

              <div className='logoDiv'>
                <Link to= {`/`}><img className='logoImg' src="/images/logosmile.png" alt="logo" width='120px' height='120px' /></Link>
              </div>
            

              {/* CART */}

              <div className= 'cartIconDiv'>
                <span>0</span>
                <Link to= {`/cart`}> <CartWidget/> </Link>
              </div>

          </div>

         {/* SIDE BAR TOGGLE MENU */}
 
        
          <nav className= {sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul className= 'nav-menu-items' onClick={showSidebar} >
                <li className='navbar-toggle'>
                    <Link to= {` `} className='closeicon'> <i> <AiOutlineClose/> </i> </Link>
                </li>
                <li> <NavLink to= {`/`} activeClassName="current" className="home_text"> Home </NavLink> </li>
                <li> <NavLink to= {``} activeClassName="current" className="products_text"> Products </NavLink></li>
                <li> <NavLink to = {`/category/remeras`} activeClassName="current"> Remeras </NavLink> </li>
                <li><NavLink to = {`/category/zapatillas`} activeClassName="current"> Zapatillas </NavLink></li>
                <li> <NavLink to= {`/cart`} activeClassName="current" className="shooping_cart_text"> Shopping Cart </NavLink> </li>
                <li> <NavLink to= {`/contact`} activeClassName="current" className="contact_text"> Contact </NavLink> </li>
            </ul>
          </nav>
        
          
          

        </>

        

      

      

            
    
  );
}

export default NavbarComponent;
