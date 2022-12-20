import React from "react";
const ADD_REVIEWS = 'ADD_REVIEWS'


let initialState = {
    reviewsData: [{
        nameUser: "Анна Котлова",
        reviewsText: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. ",
        data: "25.03.2021"
    }, {
            nameUser: "Влад Курган",
            reviewsText: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. ",
            data: "25.03.2021"

        },{
        nameUser: "TEST Котлова",
        reviewsText: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. ",
        data: "25.03.2021"
    },
        {
            nameUser: "TEST Котлова",
            reviewsText: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. ",
            data: "25.03.2021"
        }]
}




const reviewsData = (state = initialState, action)=>{
    switch (action.type){
        case ADD_REVIEWS:{
            return {
                ...state,
                reviewsData: [action.data, ...state.reviewsData]
            }
        }
        default: return state
    }
}

export const addReviews = (data)=> {
    return{
        type:ADD_REVIEWS,
        data
    }
}

export default reviewsData
