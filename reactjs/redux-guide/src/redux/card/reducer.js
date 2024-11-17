import CardActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CardActionTypes.ADD_PRODUCT:
            const productIsAlreadyInCard = state.products.some((product) => product.id === action.payload.id);

            if (productIsAlreadyInCard) {
                return {
                    ...state,
                    products: state.products.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1 } : product),
                }
            }

            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1}],
            };

            case CardActionTypes.REMOVE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== action.payload)
                }
            
            case CardActionTypes.INCREASE_PRODUCT_QUANTITY:
                return {
                    ...state,
                    products: state.products.map((product) => product.id === action.payload ? {...product, quantity: product.quantity + 1} : product),
                }
                
            case CardActionTypes.DECREASE_PRODUCT_QUANTITY:
                return {
                    ...state,
                    products: state.products.map((product) => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product)
                    .filter((product) => product.quantity > 0),
                }
        default:
            return state;    
    }
}

export default cartReducer;