import CardActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CardActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: CardActionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductQuantity = (payload) => ({
    type: CardActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decreaseProductQuantity = (payload) => ({
    type: CardActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
})