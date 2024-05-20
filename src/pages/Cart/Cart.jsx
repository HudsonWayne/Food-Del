import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react';

const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext);

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
        {food_list.map((item, index)=>{
            if(cartItems[item._id]>0)
             {
              return(
                <div key={item._id_}  className="cart-items-title">
                  <p>{item.name}</p>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]}</p>
                  <p>x</p>
                </div>
              )
             }
        })}
      </div>
    </div>
  )
}

export default Cart


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

