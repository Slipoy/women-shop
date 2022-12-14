import {combineReducers, createStore} from "redux";
import catalogReducer from './catalog-reducer'
import basket from "./basket";


let reducer = combineReducers({
    catalogItems: catalogReducer,
    initBasket: basket

})


let store = createStore(reducer);

export default store
