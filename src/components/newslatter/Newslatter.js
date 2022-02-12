import React,{useRef,useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Form,Button } from 'react-bootstrap'
import { addNewslatter,ClearData  } from '../../store/action'
import { toast, ToastContainer } from 'react-toastify'

const Newslatter = () => {
    const userData = useSelector(state => state.Userreducers)
    const dispatch = useDispatch()
    const TextInput = useRef()


    const handlesubmit =(e)=>{
       e.preventDefault();
       const value = TextInput.current.value;
       
       dispatch(addNewslatter({email: value}))

      

    }


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


             useEffect(()=>{

              if(userData.newslatter){
                       
                if(!TextInput.current.value){
                    showToast("erorr","the input is empty")

                }else {
                if(userData.newslatter === "added"){

                      showToast("success","Thank you for subscribing...")
                             TextInput.current.value = ""
                           
                }else if(userData.newslatter === "faild"){

                     showToast("error","You already added..")
                   
                }
              }}


        },[userData])


         useEffect(()=>{

            return ()=>{
                dispatch(ClearData())
            }
         },[dispatch])



    return (
        <>
            <div className={"container"}>
                      
                   
                   <h1>join our newslatter</h1>
                   <div className="form">
                       <Form onSubmit={handlesubmit} className="mt-4">
                           <Form.Group>
                               <Form.Control type="text" placeholder="Example: youremailgmail.com" name="email" ref={TextInput} />

                          
                           </Form.Group>
                           <br/>
                           <Button variant="primary" type="submit">
                               add me to the list
                           </Button>
                           <br/>
                            <br/>
                             <br/>

                       </Form>

                   </div>
               <ToastContainer></ToastContainer>
            </div>
        </>
    )
}

export default Newslatter
