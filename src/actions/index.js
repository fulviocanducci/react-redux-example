import { ADD_COUNTER, ADD_NEW_ITEM } from './constants';
import { CHANGE_INPUT } from './constants';

export function addCounter(payload) {    
    return {
        type: ADD_COUNTER,
        payload
    }    
};

export function changeInput(payload) {
    return {
        type: CHANGE_INPUT,
        payload
    }    
}

export function addNewItem(payload) {
    return {
        type: ADD_NEW_ITEM,
        payload
    }
}