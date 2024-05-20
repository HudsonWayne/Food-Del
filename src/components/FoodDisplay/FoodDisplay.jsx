import { useContext } from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    console.log(food_list)
  return (
    <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
                if(category==="All" || category===item.category){
                    return <FoodItem
                     key={index} 
                     id={item._id} 
                     name={item.name} 
                     description={item.description} 
                     price={item.price} 
                     image={item.image}/> 
                }    
            })}
        </div>
    </div>
  )
}

export default FoodDisplay



// import { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from './FoodItem' // Assuming the path to your child component

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext)

//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item, index) => (
//           // Only render if category is "All" or matches item.category
//           category === "All" || category === item.category ? (
//             <FoodItem
//               key={index}
//               id={item.id}
//               name={item.name}
//               description={item.description}
//               price={item.price}
//               image={item.image}
//             />
//           ) : null
//         ))}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay