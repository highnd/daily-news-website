import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/home'
import { MainLayout } from './hoc/MainLayout'
import { Posts } from './components/posts/Posts'

 
 
 const Routes = () => {

   return (
     
       <BrowserRouter>
       <Header/>
       <MainLayout>
        <Switch>
          <Route path={"/article/:id"} component={Posts}/>
             <Route path={"/"} component={Homepage} />
              
        </Switch>
        </MainLayout>
       </BrowserRouter>
   )
 }
 
 export default Routes
 
