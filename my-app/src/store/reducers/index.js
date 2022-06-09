
import { ADD_CART, REMOVE_CART } from "../actions"


export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {

      // them moi
      const { id } = action.payload
      console.log("ID", id)
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
        console.log("ID xoas ", id)
        const newCart = state.cart.filter((item) => item.id !== id);

        return {
          ...state,
          cart : newCart,
        }
      }
      break
    default: throw new Error("Invalid action")

  }
}
