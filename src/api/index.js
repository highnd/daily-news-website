import axios from "axios";





export const getallpost = async(homepost,page,order,limit) =>{

    try {
       
        const response = await axios.get(`http://localhost:3000/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`)

        return{

            posts: homepost.posts ? [...homepost.posts , ...response.data] : response.data,
            page: page,
            end:response.data.length === 0 ? true : false
        }

    }
    catch(erorr){

       throw erorr;

    }




}



export const apiUser = async(data)=>{

 try {
       
    const findUsers = await axios.get(`http://localhost:3000/newsletter?email=${data.email}`)
     
     if(!Array.isArray(findUsers.data) || !findUsers.data.length){

         const response = await axios({
             method:'POST',
             url:"http://localhost:3000/newsletter",
             data:{
                 email:data.email
             }
         })
         return {
             newslatter :"added",
             email: response.data
         }
     }else {
                
            return{
                newslatter:'failed'
            }
     } 

    }
    catch(erorr){

       throw erorr;

    }

}


export const getpostbyid = async(id) =>{

    try {
       
        const response = await axios.get(`http://localhost:3000/posts/${id}`)
        return response.data;

    }
    catch(erorr){

       throw '404';

    }




}