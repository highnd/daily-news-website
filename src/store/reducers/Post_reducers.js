import { GET_POST,GET_POST_ID,CLEAR_POST_ID} from '../Types'

export default function Postreducers(state={},action) {

    switch (action.type) {

        case GET_POST:
            return {...state,...action.payload}
         case GET_POST_ID:
             return {...state,postbyid:action.payload}
             case CLEAR_POST_ID:
             return {...state,postbyid:action.payload}
        default:
            return state;
    }
   
}
