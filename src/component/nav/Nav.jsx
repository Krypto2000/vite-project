
import './nav.css';
import { FaArrowRight, FaBitcoin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className='navbar container'>
      <Link to="/">
        <div className='logo'>
           <FaBitcoin width={33} size={33} />
          <h1 className='logo-text'>
            <span>Coins</span> 
          </h1>
        </div>
      </Link>
      <div className='Menu'>
        <ul className="nav-links" id="nav-links-mobile-hide">
          <li>
            <Link to="/about">
              About <FaArrowRight />
            </Link>
          </li>
          <li>
          <Link to="/">
              Auth Coin <FaArrowRight />
              </Link>
            
          </li>
        </ul>
      </div>
      <div className='menu-icons'>
        
      </div>
    </div>
  );
};
