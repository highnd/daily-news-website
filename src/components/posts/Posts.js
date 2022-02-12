import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Newslatter from '../newslatter/Newslatter'
import { clearpostbyid, getpostbyid } from '../../store/action'
import Moment from 'react-moment';
import { toast, ToastContainer } from 'react-toastify'



export const Posts = (props) => {

    const madkhal = useSelector(state =>state.Postreducers)
    const dispatch = useDispatch()

        
    useEffect(()=>{

         
        dispatch(getpostbyid(props.match.params.id))

    },[dispatch,props.match.params.id])


    useEffect(() => {
        
        return () => {
            dispatch(clearpostbyid())
            
        }
    }, [dispatch])



    useEffect(() => {
        if(madkhal.postbyid ==='404'){

            showToast("error","the post is not available")
            props.history.push("/")
        }
        
    }, [madkhal,props.history]);

        









/////////////////////////////////////////////////////////////


const showToast = (type,msg)=>{

        switch (type) {
            case "success":
             toast.success(msg,{
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
                case "error":
                toast.error(msg,{
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
        
            default:
              return false;
        }
     }



//////////////////////////////////////////////////////////














     
    return (
        <>
           {madkhal.postbyid ?

           <>

           <img src={madkhal.postbyid.imagexl} style={{height:"600px",alignItems:"center",justifyContent:"center",display:"flex",margin:"0 auto"}} alt="" />

               <Moment style={{margin:"0 auto",alignItems:"center",justifyContent:"center",display:"flex"}} format="DD MMM">{madkhal.postbyid.createdAt}</Moment>

               <h1 style={{margin:"0 auto",alignItems:"center",justifyContent:"center",display:"flex"}}>{madkhal.postbyid.title}</h1>
               <h5 style={{margin:"30px",alignItems:"center",justifyContent:"center",display:"flex"}}>{madkhal.postbyid.excerpt}</h5>
               
               <h6 dangerouslySetInnerHTML={
                   {__html : madkhal.postbyid.content}
               } style={{margin:"30px",alignItems:"center",justifyContent:"center",display:"flex"}}></h6>
                 
           
           </>
        :null}
               
                 <ToastContainer></ToastContainer>

           <hr style={{width:"100%",height:"2px",backgroundColor:"black",opacity:"10"}}/>
           <Newslatter/>
           
        </>
    )
}
