import {combineReducers, createStore} from "redux";
import catalogReducer from './catalog-reducer'
import basketReducer from "./basketReducer";


let reducer = combineReducers({
    catalogItems: catalogReducer,
    initBasket: basketReducer

})


let store = createStore(reducer);

export default store
