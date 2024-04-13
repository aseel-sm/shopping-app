import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          srcSet=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />{" "}
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_sub_one">
              Hello ,{!user ? "Guest" : user.email}
            </span>
            <span className="header_option_sub_two">
              {" "}
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_sub_one">Return</span>
          <span className="header_option_sub_two">&Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_sub_one">Your</span>
          <span className="header_option_sub_two">Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header_option_basket">
            {" "}
            <ShoppingBasketIcon />
            <span className="header_option_sub_two header_basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
