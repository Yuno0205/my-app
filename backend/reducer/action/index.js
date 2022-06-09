export const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  ADD_AUTH: "ADD_AUTH",
  PRODUCT_LIST_FETCHING: "FETCHING_PRODUCT_LIST",
  PRODUCT_LIST_FETCH_COMPLETE: "PRODUCT_FETCH_COMPLETE",
  PRODUCT_LIST_FETCH_ERROR: "PRODUCT_LIST_FETCH_ERROR",
  USER_LOGIN : "USER_LOGIN",
  USER_LOGIN_SUCCESS : "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAILED : "USER_LOGIN_FAILED"


}

export const addToDo = (payload) => {
  return { type: actions.ADD_TODO_ITEM, payload }
}

export const fetchingProductList = (payload) => {
  console.log("fetchingProductList", payload)
  return { type: actions.PRODUCT_LIST_FETCHING }
}

export const UserLogin = (payload) =>{
  return { type: actions.USER_LOGIN , payload }
}

export const initialState = {
  todo: {
    todoList: [],
  },
  auth: {
    isAuth: false,
  },
  product: {
    productList: [],
    fetchingProductList: false,
    fetchProductListError: false,
  },
}

export const init = (initialState) => {
  return { initialState }
}
