
const checktoken=()=>{
    if(localStorage.getItem("UserLogin")){
          return true
      }
    return false
  }
  
  const autent={
    isLogin:checktoken(),
  
    authenticate(cb)
    {
        this.isLogin=true
        setTimeout(cb,100)
    },
    singout(cb)
    {
      this.isLogin=false
      localStorage.clear()
      setTimeout(cb,100)
    }
}
export {autent}
