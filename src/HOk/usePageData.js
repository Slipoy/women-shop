import { useEffect, useState } from 'react';
import firebase from '../utils/fb-config';
import {setCatalogItems} from "../Redux/catalog-reducer";
import {connect} from "react-redux";


const usePageData = (fieldName) => {

    

    // useEffect(() => {
    //     firebase
    //         .database()
    //         .ref()
    //         .child(fieldName)
    //         .once('value')
    //         .then(data => setCatalogItems(data.val()))
    // },[fieldName]);


}

export default usePageData ;