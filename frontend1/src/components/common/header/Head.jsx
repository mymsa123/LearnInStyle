import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../../Context/authContext"
const Head = () => {
  //const [status,setstatus]=useState(true)
  const navigate=useNavigate()
  const { status, setstatus } = useContext(MyContext);
  useEffect(()=>{
    
  },[])
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>EDUQUIK</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          
          <div className='social'>
            {status?<button id="login" onClick={()=>{setstatus(false)}}>Logout</button>:<button id="login" onClick={()=>{navigate('/login')}}>LOGIN</button>}
            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
