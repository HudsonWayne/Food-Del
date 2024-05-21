// import { createContext } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContextProvider = createContext(null)

// const MyStoreContextProvider = (props) =>{
//     const contextValue = {
//         food_list
//     }
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )

// }

// export default StoreContextProvider;

import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: -1 }));
  };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = food_list.find((product) => product._id === item);
  //       totalAmount += itemInfo * cartItems[item];
  //     }
  //   }
  //   return totalAmount
  // };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemQuantity = cartItems[itemId]; // Get the quantity for the current item ID
      if (itemQuantity > 0) {
        // Find the corresponding item in the food_list using its ID
        const itemInfo = food_list.find((item) => item._id === itemId);
        if (itemInfo) {
          // Ensure item exists before adding to total
          totalAmount += itemInfo.price * itemQuantity;
        } else {
          console.warn(`Item with ID "${itemId}" not found in food_list.`);
        }
      }
    }
  
    return totalAmount;
  };


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

// import { createContext } from "react";
// import { food_list } from "../assets/assets";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const contextValue = {
//     food_list,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
