const ADD_TO_STORE = "ADD_TO_STORE"



const initialState ={
    store : []
}

const catalogReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_STORE:
            return{
                ...state,
                store: [...state.store, action.data]
            }
        default: return state
    }
}


export const setCatalogItems = (data)=>{
    return {
        type: ADD_TO_STORE,
        data
    }
}
export default catalogReducer