import React,{useState} from 'react';
import LoginForm from './LoginForm';
import {autent} from './auth'


function Login() {
  
  const adminUser ={
    email: "admin@admin.com",
    password:"admin123"
  }

  
  const[error,setError]=useState("");

  const Login = details => {
    

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
    

     
      autent.authenticate();
      localStorage.setItem('UserLogin',details.name)
      window.location='/welcome'


    }else{
    console.log("Details do not match!");
    setError("Details do not match!");
    }
}
  


  return (
    <div className="App">
     
        <LoginForm Login={Login} error={error}/>
     
    </div>
  );
}

export default Login;
