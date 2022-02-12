import { combineReducers } from "redux";
import Postreducers from "./Post_reducers";
import Userreducers from "./User_reducer";


const appReducers = combineReducers({
    
    Postreducers,
    Userreducers,

})

export default appReducers;