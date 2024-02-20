import { Link } from "react-router-dom";
import "./EmptyCart.css";
const EmptyCart = () => {
  return (
    <>
      <div className="container">
          <div className="emptyCart">
          <p className="first">Your cart is empty!</p>
          <p className="second">Add items to it now.</p>
          <Link to="/"><div className="btn"><button>Shop now</button></div></Link>
        </div>
        
      </div>
    </>
  );
};
export default EmptyCart;
