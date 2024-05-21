import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id_}>
                <div
                  key={item._id_}
                  className="cart-items-title cart-items-item"
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-button">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here.</p>
            <div>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code"/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import './Cart.css';
// import { StoreContext } from '../../context/StoreContext'; // Assuming context is defined here
// import { useContext } from 'react';

// const Cart = () => {
//   const { cartItems, foodList, removeFromCart } = useContext(StoreContext);

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {foodList.map((item, index) => (
//           cartItems[item._id] > 0 && ( // Ensure item exists in cart before rendering
//             <div key={item._id} className="cart-item"> {/* Add unique key for each item */}
//               <p>{item.name}</p>
//               <img src={item.image} alt={item.name} /> {/* Add alt text for accessibility */}
//               <p>{item.price.toFixed(2)}</p> {/* Format price to two decimal places */}
//               <p>{cartItems[item._id]}</p>
//               <p>{(item.price * cartItems[item._id]).toFixed(2)}</p> {/* Calculate and format total */}
//               <button onClick={() => removeFromCart(item._id)}>Remove</button> {/* Button for removal */}
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
