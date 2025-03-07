import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const Register = () => {
    return(
        <div>
            <div className='container'>
                 <div>
                    <div className="row">
                         <div className="col-xs- 12 col-sm-12 col-md-12">
                              <div className="registerPage">
                                    <div>
                                        <h1>Create an Account</h1>
                                        <p>Enter your details to Create a new Account</p> 
                                    </div>

                                    <div>
                                         <p>Email</p> 
                                         <input type="text" id="email" placeholder="Enter your email" />
                                    </div>

                                    <div>
                                         <p>Password</p>
                                         <input type="password" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div>
                                         <p>Confirm Password</p>
                                         <input type="password" id="password" placeholder="Confirm your password"/>
                                    </div>
                                    <div className="loginRegister">
                                        <p> <NavLink to="Register" onClick={()=>handleRegister()}> Register </NavLink> </p>
                                        <p className="removeRegister"> <NavLink to= {Login} onClick={()=>handleLogin()}className="removeRegister"> Already have an account? Login here </NavLink> </p>
                                    </div>
                              </div>                               
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Register; 