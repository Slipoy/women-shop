
import React from "react";

const INIT_STOCK = "INIT_STOCK"
const INIT_CATALOG_NAMES = "INIT_CATALOG_NAMES"
const INIT_ALL_DATA_CATALOG = "INIT_ALL_DATA"
const INIT_CURRENT_DATA = "INIT_CURRENT_DATA"
const SET_ITEMS_PAGE = "SET_ITEMS_PAGE"
const SORT_BY_RATING = "SORT_BY_RATING"
const SORT_BY_PRICE = 'SORT_BY_PRICE'
const UPDATE_BASKET_STATUS = "UPDATE_BASKET_STATUS"

const FILTER_DATA = "FILTER_DATA"

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
const UPDATE_FAV_STATUS = 'UPDATE_FAV_STATUS'
const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES"




const initialState ={
    stock : [],
    favorites : [],
    category: [],
    women: {
        category: "",
        subcategory: "",
        products : [],
        allData: []
    },
    allData: [],
    currentData : [],
    filterData: [],
    itemsPerPage : 6,
}

const catalogReducer = (state = initialState, action)=>{
    switch (action.type){
        case INIT_STOCK:
            return{
                ...state,
                stock: action.data.data
            }
        case INIT_CATALOG_NAMES:
            return {
                ...state,
                category: action.data
            }
        case INIT_ALL_DATA_CATALOG:
            const allData = action.data.products.map(item => item.data).flat(Infinity)
            allData.forEach(item=> item.isFavorites = false)
            return {
                ...state,
                women: {category: action.data.category, products: [...action.data.products], allData: [...allData]},
                currentData: allData,
            }
        case SET_ITEMS_PAGE:
            const step = 6;
            return {...state,
            itemsPerPage: state.itemsPerPage + step}
        case SORT_BY_RATING:
            const sortDataRatingAll = action.data.sort((a,b)=> {return b.stars - a.stars})
            return {...state,
                currentData: [...sortDataRatingAll],
                filterData: state.filterData.sort((a,b)=> {return b.stars - a.stars})

            }
        case SORT_BY_PRICE:
            const sortDataPriceALL = action.data.sort((a,b)=> {return b.price - a.price})
            return {...state,
                currentData: [...sortDataPriceALL],
                filterData: state.filterData.sort((a,b)=> {return b.price - a.price})
            }
        case UPDATE_BASKET_STATUS:{

            return {
                ...state,
                stock: state.stock.map(item=> {if(item.id === action.id){
                    return {...item, isBasket: !item.isBasket}
                }else return  item}),
                favorites: state.favorites.map(item=> {if(item.id === action.id){
                    return {...item, isBasket: !item.isBasket}
                }else return  item}),
                currentData: [...state.currentData.map(item=> {if(item.id === action.id){
                    return {...item, isBasket: !item.isBasket}
                }else return  item})]
            }
        }

        case ADD_TO_FAVORITES:
            const favorData =  state.currentData.filter(item => item.id === action.id)
            return {
                ...state,
                favorites: [...state.favorites, ...favorData]
            }
        case UPDATE_FAV_STATUS:
            return {
                ...state,
                stock: state.stock.map(item=> {if(item.id === action.id){
                    return {...item, isFavorites: !item.isFavorites}
                }else return  item}),
                favorites: state.favorites.map(item=> {if(item.id === action.id){
                    return {...item, isFavorites: !item.isFavorites}
                }else return  item}),
                currentData: state.currentData.map(item=> {if(item.id === action.id){
                    return {...item, isFavorites: !item.isFavorites}
                }else return  item})

            }
        case DELETE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.id)
            }

        case FILTER_DATA:
            const filter = state.currentData.filter(item=> item.path === action.value)
            if (!action.checked){
                return {
                    ...state,
                    filterData: [...state.filterData, ...filter]
                }
            }else return {
                ...state,
                filterData: state.filterData.filter(item=> item.path !== action.value)
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
// export const setTEst = (data)=>{
//     return{
//         type: INIT_CURRENT_DATA,
//         data
//
//     }
// }

export const setItemsPerPage = () =>{
    return{
        type: SET_ITEMS_PAGE
    }
}
export const sortItem = (data, type) =>{
    return{
        type,
        data,
    }
}
export const updateBasketStatus = (id)=>{
    return{
        type: UPDATE_BASKET_STATUS,
        id
    }
}
export const addToFavorites =(id)=>{
    return{
        type: ADD_TO_FAVORITES,
        id
    }
}
export const updateFavoritesStatus = (id)=>{
    return{
        type: UPDATE_FAV_STATUS,
        id
    }
}
export const deleteToFavorites = (id)=>{
    return{
        type: DELETE_FROM_FAVORITES,
        id
    }
}
export const filterForData = (value, checked)=>{
    return {
        type: FILTER_DATA,
        value,
        checked
    }


}


export default catalogReducer