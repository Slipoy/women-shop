

const ADD_TO_BASKET = "ADD_TO_BASKET"
const DELETE_FROM_BASKET = "DELETE_FROM_BASKET"
const CHANGE_COUNT = "CHANGE_COUNT"
const DELETE_ITEM = "DELETE_ITEM"

const initialState = {
    basket: []
}
const basketReducer =(state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.data]
            }
        case DELETE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case CHANGE_COUNT:
            if (action.k === 1){
                return {
                    ...state,
                    basket: state.basket.map(item => {if(item.id === action.id){
                        return {...item, count: item.count + 1}
                    }else return item})
                }}else return {
                ...state,
                basket: state.basket.map(item => {if(item.id === action.id && item.count > 1){
                    return {...item, count: item.count - 1}
                }else return item})
            }
        default: return state
    }
}

export const addToBasket = (data)=>{
    return{
        type: ADD_TO_BASKET,
        data
    }
}
export const deleteToBasket = (id)=>{
    return{
        type: DELETE_FROM_BASKET,
        id
    }
}
export const changeCounter = (id,k,count)=>{
    return {
        type: CHANGE_COUNT,
        id,
        count,
        k
    }
}

export default basketReducer