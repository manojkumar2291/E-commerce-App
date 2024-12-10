
import React ,{useState} from 'react'
import './css/loginsignup.css'


const LoginSignup = () => {
  const [state,setstate]=useState('login');
  const [formdata,setformdata]=useState({
    username:"",
    password:'',
    email:""
  })
  const changeHandler=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

const loginhandler=async () =>{
  console.log('login')
  let responsedata;
  await fetch("http://localhost:4000/login",{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formdata)
  }).then((response)=>response.json()).then((data)=>responsedata=data)

 console.log(responsedata)
  if(responsedata.success){
    alert('login successful')
    localStorage.setItem('auth-token',responsedata.token);
    window.location.reload("/");
  }
}


const signuphandler=async () =>{
  console.log('signup')
  let responsedata;
  await fetch("http://localhost:4000/signup",{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formdata)
  }).then((response)=>response.json()).then((data)=>responsedata=data)

 console.log(responsedata)
  if(responsedata.success){
    alert('signup successful')
    localStorage.setItem('auth-token',responsedata.token);
    window.location.reload("/");
  }
}


  return (
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>{state}</h1>
      <div className="loginsignup-fields">
        {state==="signup"?<input type="text" placeholder='Your Name' name="username" value={formdata.username} onChange={changeHandler} />:<></>}
        
        <input type="email" placeholder='Email Address'  name="email" value={formdata.email} onChange={changeHandler}/>
        <input type="password" placeholder='Password' name="password" value={formdata.password} onChange={changeHandler}/>

      </div>
      <button onClick={()=>{
        state==='login' ? loginhandler():signuphandler()
      }}>continue</button>
      {state==='signup'?<p className="loginsignup-login">Already have an account <span onClick={()=>{setstate("login")}}>Login Here</span></p>:<></>}

      {state==='login'?<p className="loginsignup-login">Create An Account <span onClick={()=>{setstate("signup")}}>Click Here</span></p>:<></>}
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p> by continuing, I agree to the terms of use & privacy policy </p>
      </div>
    </div>
   </div>
  )
}

export default LoginSignup