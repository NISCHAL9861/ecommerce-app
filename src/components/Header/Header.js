import { LocationOnOutlined, Search,  ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header-logo" src="" alt="" />
      </Link>
      <div className="header-optiion" style={{ marginRight: "-10px" }}>
        <LocationOnOutlined style={{color:"#fff"}}/>
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option1">Selecte Your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <Search className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option1">Hello Guest</span>
            <span className="header-option1">Sign In</span>
          </div>
        </Link>
        <Link to="/order" className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option1">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
            <div className="header-basket">
                <ShoppingBasketOutlined />
                <span className="header-option2 basket-count">0</span>
            </div>
        
       
          
        </Link>
      </div>
    </nav>
  );
};

export default Header;
