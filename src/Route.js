import React from 'react';
import Welcome from './Welcome';
import Login from './login'
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';
import {autent} from './auth'

const  Rt=()=>{

    const ProtectedRouter=({component:Component,...rest})=>(
        <Route {...rest} render={(props)=>(
            autent.isLogin?<Component  {...props}/>:<Redirect to="/" />
        )}/>)
         

    return (
      <Router>
        <Route path="/" exact component={Login} />      
        <ProtectedRouter path="/Welcome" exact component={Welcome} /> 
      </Router>
    );
  }
  
export default Rt;