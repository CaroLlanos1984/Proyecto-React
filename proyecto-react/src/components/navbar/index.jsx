import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './style.css';
import CartWidget from '../cartWidget/cartWidget';



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
                <img className='logoImg' src="/images/logosmile.png" alt="logo" width='120px' height='120px' />
              </div>
            

              {/* CART */}

              <div className= 'cartIconDiv'>
                <CartWidget/>
              </div>

          </div>

          <nav className='nav-menu'>
                <ul className= 'nav-menu-items'>
                    <li className='navbar-toggle'>
                        <i className='closeicon'><AiOutlineClose/></i> 
                    </li>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">Search</a> </li>
                    <li> <a href="#">Shopping Cart</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
           </nav>

          

        </header>
    
  );
}

export default NavbarComponent;
