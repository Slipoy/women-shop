
import React from "react";

const INIT_STOCK = "INIT_STOCK"
const INIT_CATALOG_NAMES = "INIT_CATALOG_NAMES"
const INIT_ALL_DATA_CATALOG = "INIT_ALL_DATA"
const TEST = "TEST"
const SET_ITEMS_PAGE = "SET_ITEMS_PAGE"
const SORT_BY_RATING = "SORT_BY_RATING"
const SORT_BY_PRICE = 'SORT_BY_PRICE'



const initialState ={
    stock : [],
    category: [],
    women: {
        category: "",
        subcategory: "",
        products : [],
        allData: []
    },
    allData: [],
    itemsPerPage : 6
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
                women: {category: action.data.category, products: [...action.data.products], allData: [...allData]}
            }
        case SET_ITEMS_PAGE:
            const step = 6;
            return {...state,
            itemsPerPage: state.itemsPerPage + step}
        case SORT_BY_RATING:
            const sortDataRatingAll = action.data.sort((a,b)=> {return b.stars - a.stars})
            action.dataCategory.forEach(item=> item.data.sort((a,b)=> {return b.stars - a.stars}))
            return {...state,
                women: {...state.women, allData: [...sortDataRatingAll], products: [...action.dataCategory]}
            }
        case SORT_BY_PRICE:
            const sortDataPriceALL = action.data.sort((a,b)=> {return b.price - a.price})
            action.dataCategory.forEach(item=> item.data.sort((a,b)=> {return b.price - a.price}))
            return {...state,
                women: {...state.women, allData: [...sortDataPriceALL], products: [...action.dataCategory]}
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
export const setTEst = ()=>{
    return{
        type: TEST,

    }
}

export const setItemsPerPage = () =>{
    return{
        type: SET_ITEMS_PAGE
    }
}
export const sortItem = (data, dataCategory, type) =>{
    return{
        type,
        data,
        dataCategory
    }
}
export default catalogReducer