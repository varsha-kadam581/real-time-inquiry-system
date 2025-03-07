import React from "react";
import { NavLink } from "react-router-dom";

const handleLogin = async()=>{
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const res = await fetch("http://localhost:4000/login",{
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    // const r = await res.json();
    console.log(await res.json());
}

const Login = () => {
    return(
        <div>
            <div className='container'>
                 <div>
                    <div className="row">
                         <div className="col-xs- 12 col-sm-12 col-md-12">
                              <div className="loginPage">
                                    <div>
                                        <h1>Login</h1>
                                        <p>Enter your email and password to access your account</p>
                                    </div>

                                    <div>
                                         <p>Email</p> 
                                         <input type="text" id="email" placeholder="Enter your email" />
                                    </div>

                                    <div>
                                         <p>Password</p>
                                         <input type="password" id="password" placeholder="Enter your password" />
                                    </div>

                                    <div className="loginRegister">
                                        <p> <NavLink to="login" onClick={()=>handleLogin()}> Login </NavLink> </p>
                                        <p className="removeRegister"> <NavLink to="Register" onClick={()=>handleRegister()} className="removeRegister"> Don't have an Account? Register here </NavLink> </p>
                                    </div>
                              </div>                               
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Login; 

