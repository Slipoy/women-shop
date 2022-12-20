import {combineReducers, createStore} from "redux";
import catalogReducer from './catalog-reducer'
import basket from "./basket";
import reducerLog from "./login-reducer";
import reviewsData from "./reviewsReducer";


let reducer = combineReducers({
    catalogItems: catalogReducer,
    initBasket: basket,
    reducerLog,
    reviewsData

})


let store = createStore(reducer);

export default store
