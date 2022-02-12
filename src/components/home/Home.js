import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {getposts} from '../../store/action'
import { Spinner,Button } from "react-bootstrap"
import Moment from 'react-moment';
import Masonry from 'react-masonry-css'
import { LinkContainer } from "react-router-bootstrap";
import "../../styles/home.css"


const Home = () => {
    

    const homePost = useSelector(state=> state.Postreducers);
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false)

     useEffect(()=>{
       
        dispatch(getposts({},1,"desc",6))

     },[dispatch])

     const loadposts =()=>{
       const page = homePost.page + 1
       setloading(true)
       dispatch(getposts(homePost,page,"desc",6)).then(()=>{

        setloading(false)
       })
       

     }

    return (

        <>

        <Masonry

             breakpointCols={{default:3,800:2,400:1}}
             className="my-masonry-grid"
             columnClassName="my-masonry-grid_column">
               {
               homePost.posts ? 

                   homePost.posts.map((item)=>(

                        <div className="container" key={item.id}>
                            <img src={item.image} className="image"/>
                    
                             <div className={"author"}>
                                 <span>{item.author}</span>
                                 <Moment style={{marginLeft:"10px"}} format="DD MMM">{item.createdAt}</Moment>
                             </div>
                             <div className="content">

                              <div className="title">{item.title}</div>
                              <div className="info">{item.excerpt}</div>
                             </div>
                             <LinkContainer className="m-3" to={`/article/${item.id}`}>
                              <Button variant="dark" >read more</Button>
                             </LinkContainer>
                        </div>

                     ))
                          :null
               }
        </Masonry>

        {
        loading ?
        
        <div style={{textAlign:"center"}}>
   
          <Spinner animation="border" role="status">

               <span className="sr-only"></span>
          </Spinner>
        </div>
    
                          :null
    
        }
        {
            !homePost.end & !loading ?

            <Button style={{margin:"50px"}} variant="outline-dark" onClick={()=>loadposts()}>
                load more 
            </Button>


                          :null
        }

           <hr style={{width:"100%",height:"2px",backgroundColor:"black",opacity:"10"}}/>
            
        </>
    )
}

export default Home
