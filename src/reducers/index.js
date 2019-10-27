import { ADD_COUNTER, CHANGE_INPUT, ADD_NEW_ITEM } from '../actions/constants';

const initialState = {
    counter: 0, 
    value: '',
    list: []
}

function rootReducer(state = initialState, action) {   
    switch(action.type){
        case ADD_COUNTER: {
            state = {...state, counter: action.payload.counter };
            break;
        }
        case ADD_NEW_ITEM: {
            state = {...state, list: action.payload.list };
            break;
        }
        case CHANGE_INPUT: { 
            state = {...state, value: action.payload.value };
            break;
        }        
    }     
    return state;
}

export default rootReducer;