import { combineReducers } from "redux"

import userReducer from "./user/reducer"
import cartReducer from "./card/reducer"

const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer;

/**
 * links https://www.youtube.com/watch?v=mXI2-gjIZ40&t=3539s
 */