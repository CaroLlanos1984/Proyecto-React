import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import { CgShoppingCart} from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import './style.css';

const NavbarComponent= ()=> {

    return (
    <>
        <header>
    
           <div className="navigation row d-flex align-items-center d-flex justify-content-between">

              {/* SIDE BAR ICON*/}

              <div className='navbar'> 
                <i className='sideBarIcon'><FaBars/></i> 
              </div>
              
              {/* BRAND LOGO */}

              <div>
               <img src="/images/logosmile.png" alt="logo" width='120px' height='120px'/>
              </div>


              {/* CART */}

              <div className= 'cartIconDiv'>
                <i className='cartIcon'><CgShoppingCart/></i>
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
    </>
  );
}

export default NavbarComponent;
