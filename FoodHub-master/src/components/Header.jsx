
import "./header.css";
import { useState } from "react";
import FoodHubLogo from "../assets/Food hub.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";


const Title = () => {
  
  return (
    <a href="#logo">
      <img
      key="logo"
        className="logo"
        src = {FoodHubLogo}
        alt="Food Hub"
        title="Food Hub"
      />
    </a>
  );
};

const Header = () => {
  const token = localStorage.getItem("token");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();

  const cartItems = useSelector(store=>store.cart.items);
  
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <li><Link to="cart"><FontAwesomeIcon icon={faCartShopping}/> {cartItems.length} </Link></li>
          <li >{isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedin(!isLoggedin);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
