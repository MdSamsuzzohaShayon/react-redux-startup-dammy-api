//THIS MODULE IS FOR FATCHING OUR POST AND CREATING NEW POST

import {FETCH_POST, NEW_POST} from '../actions/types';


//THIS IS GONNA REPRESENT THE POSTS COMING FROM ACTION
const initialState = {
    items: [],
    item: {}
}


// 
export default function(state= initialState, action){
    switch(action.type){
        case FETCH_POST:
        return {
            ...state,
            items: action.payload
        }
        default:
        return state;
    }
}