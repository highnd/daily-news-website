import {ADD_NEWS} from '../Types'


export default function Userreducers(state={},action) {

    switch (action.type) {
         
        case ADD_NEWS:
               return {...state,...action.payload}
        default:
            return state;
    }
   
}
