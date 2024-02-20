import Schimmer from "./Shimmer";
import { useDispatch,useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../constants";
import "./cart.css";
import { removeItem } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  
  const cartItems = useSelector(store=>store.cart.items);
  const dispatch = useDispatch();
  const removeFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const removeAll = ()=>{
    dispatch(clearCart());
  }
  return cartItems.length==0?(<EmptyCart></EmptyCart>):
  (
    <>
    <div className="myCart">
      <p>MyCart</p>
      <button onClick={()=>{
        removeAll();
      }}>ClearCart</button>
      
    </div>
    <div className="cart-container">

      {cartItems.map((item) => (
        <div className="product" key={item?.id}>
          <img
            className="item-img"
            src={ITEM_IMG_CDN_URL + item?.imageId}
          ></img>
          <div className="remove-container">
            <div>
            <p className="item-cost">
              {item?.price > 0
                ? new Intl.NumberFormat("en-IN", {
                    /* language sensitive number formatting */
                    style: "currency",
                    currency: "INR",
                  }).format(item?.price / 100)
                : " "}
            </p>
            <p className="item-name">{item?.name.slice(0,20)}</p>
            <p className="quantity">{item?.count}</p>
            </div>
            <div className="div-btn">
            <button
              className="remove-btn"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Remove
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};
export default Cart;
