import { useEffect, useState } from 'react';
import firebase from '../utils/fb-config';
import {setCatalogItems} from "../Redux/catalog-reducer";
import {connect} from "react-redux";


const usePageData = (fieldName, metod, currentData) => {
    useEffect(() => {
        if (!currentData.length > 0){
            firebase
                .database()
                .ref()
                .child(fieldName)
                .once('value')
                .then(data => metod(data.val()))
        }

    },[currentData])
}

export default usePageData ;