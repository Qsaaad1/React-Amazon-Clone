import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart,user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      {/* SearchBar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo header__CartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
