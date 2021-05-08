import React from 'react';
import {Link} from 'react-router-dom';
import {autent} from './auth'


function We() {
  function logout(){
    autent.singout()
    window.location='/'
  }
  const [name, setname] = React.useState("")

  React.useEffect(() => {
    
    if(localStorage.getItem('UserLogin'))
    {
      let data=localStorage.getItem('UserLogin');
      setname(data)
    }
  }, [])
  let data=localStorage.getItem('UserLogin');
  console.log(data)

    return(<>
      <div className="welcome">
      <h2>Welcome {name}</h2>
      <button onClick={()=>logout()}>Logout</button>
    </div>
    </>
    )
  }
export default We;