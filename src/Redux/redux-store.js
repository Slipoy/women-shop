import {combineReducers, createStore} from "redux";
import catalogReducer from './catalog-reducer'



let reducer = combineReducers({
    catalogItems: catalogReducer

})


let store = createStore(reducer);

export default store
