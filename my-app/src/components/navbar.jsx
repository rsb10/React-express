import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from '../context/shop-context';
import "./navbar.css";

export const Navbar = () => {
    const { getCartCount} = useContext(ShopContext);
    const cartCount = getCartCount();

    return (  
        <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
            <span class='badge badge-warning' id='lblCartCount'> {cartCount} </span>
          </Link>
        </div>
      </div>
    )
}