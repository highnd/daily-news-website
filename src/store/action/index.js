
import * as api from '../../api'
import { GET_POST,ADD_NEWS,CLEAR_DATA,GET_POST_ID,CLEAR_POST_ID} from '../Types'

export const  getposts = (homepost,page,order,limit) =>(

    {

    type: GET_POST,
    payload : api.getallpost(homepost,page,order,limit),


    }

)


export const getpostbyid =(id)=>(
    {
         type: GET_POST_ID,
         payload :api.getpostbyid(id) ,
    }


)




export const  addNewslatter = (data) =>(

    {

    type: ADD_NEWS,
    payload : api.apiUser(data)

    }



)




 export const  ClearData = () =>(

    {

    type: CLEAR_DATA,
    payload : {
            
             newslatter :false,
             email: []
    }

    }



)





export const clearpostbyid =()=>(
    {
         type: CLEAR_POST_ID,
         payload :{} ,
    }


)
 