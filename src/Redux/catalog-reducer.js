const INIT_STOCK = "INIT_STOCK"
const INIT_CATALOG_NAMES = "INIT_CATALOG_NAMES"
const INIT_ALL_DATA_CATALOG = "INIT_ALL_DATA"
const TEST = "TEST"



const initialState ={
    stock : [],
    category: [],
    women: {
        products : [],
        allData: []
    },
    currentTest: []

}

const catalogReducer = (state = initialState, action)=>{
    switch (action.type){
        case INIT_STOCK:
            return{
                ...state,
                stock: action.data
            }
        case INIT_CATALOG_NAMES:
            return {
                ...state,
                category: action.data
            }
        case INIT_ALL_DATA_CATALOG:
            const allData = action.data.products.map(item => item.data).flat(Infinity)
            return {
                ...state,
                women: {products: [...action.data.products], allData: [...allData]}
            }
        case TEST:
            let test = state.women.products.filter(item => item.path === action.path)
            return {
                ...state,
                currentTest: [test]
            }


        default: return state
    }
}


export const setCatalogItems = (data)=>{
    return {
        type: INIT_STOCK,
        data
    }
}
export const setCategoryName = (data)=>{
    return {
        type:INIT_CATALOG_NAMES,
        data
    }
}
export const setAllDataCatalog = (data)=>{
    return{
        type:INIT_ALL_DATA_CATALOG,
        data
    }
}
export const setTEst = (path)=>{
    return{
        type: TEST,
        path
    }
}
export default catalogReducer