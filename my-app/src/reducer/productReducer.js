import { CHANGEHOTPAGE, CHANGEPAGE, GETFLASHPRODUCT, GETHOTPRODUCT, GETPRODUCTBYCATE, SETLISTPRODUCT } from "../constants";

export const productReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case SETLISTPRODUCT:
            console.log("Payload :", payload)
            return {
                ...state,
                listproduct: payload.listproduct,
                total: payload.total
            }
        case CHANGEPAGE:
            return {
                ...state,
                page: payload.page
            }
        case CHANGEHOTPAGE:
           
            return {
                ...state,
                hotpage : payload.hotpage
            }
        case GETPRODUCTBYCATE:

            return {
                ...state,
                listproduct: payload.listproduct,
                total: payload.total
            }

        case GETHOTPRODUCT:

            return {
                ...state,
                hotproduct: payload.hotproduct,
                totalHot: payload.totalHot
            }

        case GETFLASHPRODUCT:
            console.log("Runnnn", payload)
            return {
                ...state,
                flashproduct: payload.flashproduct,
                totalFlash: payload.totalFlash
            }
        default:
            return state;
    }
}