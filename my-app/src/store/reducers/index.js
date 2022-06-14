
import { ADD_CART, DECREASE, INCREASE, REMOVE_CART } from "../actions"


export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      console.log("Adđ")
      // them moi
      const { id } = action.payload
      const index = state.cart.findIndex((product) => product.id === id)
      // đã có trong cart state
      if (index !== -1) {
        const cloneCartNew = state.cart.slice()
        const currentItem = cloneCartNew[index]
        currentItem.quantity = currentItem.quantity + 1
        cloneCartNew[index] = currentItem



        return {
          ...state,
          cart: cloneCartNew,


        }

      }
      // chưa có => thêm vào
      const cloneCartNew = state.cart.slice()
      cloneCartNew.push(action.payload)

      return {
        ...state,
        cart: cloneCartNew,
      }

    }

    case REMOVE_CART:
      {
        const { id } = action.payload
        
        const newCart = state.cart.filter((item) => item.id !== id);

        return {
          ...state,
          cart: newCart,
        }
      }

    case INCREASE: {
      console.log("Case tăng số lượng")
      console.log("Thử payload" , action.payload)
      const cloneCartNew = state.cart.slice()
      const ind = state.cart.indexOf(action.payload)
   
      // cloneCartNew[ind].quantity += 1;

      console.log(cloneCartNew[ind].quantity += +1)
      return {
        ...state,
        cart : cloneCartNew
      }
    }

    case DECREASE: {
     
      const cloneCartNew = state.cart.slice()
      const ind = state.cart.indexOf(action.payload)
   
      // cloneCartNew[ind].quantity += 1;

      console.log(cloneCartNew[ind].quantity += -1)


      if (cloneCartNew[ind].quantity === 0) cloneCartNew[ind].quantity = 1;
     
      return {
        ...state,
        cart : cloneCartNew
      }
    }
      break
    default: return state

  }


}
