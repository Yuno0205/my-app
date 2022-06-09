/**=============== action type ================*/
export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"
export const FETCH_CART = "FETCH_CART"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"



/**=============== action event ================*/

export const addCart = (payload) => {

  return { type: ADD_CART, payload }

}

export const removeCart = (payload) => {
  return {type : REMOVE_CART , payload}
}

export const UserLoginSuccess = (payload) => {
  //save  localstorage
  console.log("Payload", payload)
  localStorage.setItem(
    "User",
    JSON.stringify({ username: payload.User.username, role: payload.User.role, img: payload.User.img, id: payload.User._id  , email : payload.User.email})
  )
  return { type: USER_LOGIN_SUCCESS, payload }
}
