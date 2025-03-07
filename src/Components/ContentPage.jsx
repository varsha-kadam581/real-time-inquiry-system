import React from "react"; 
import { NavLink } from "react-router-dom";

const ContentPage = () => {
    return (
        <>
           <div className='container-fluid ourCtnFluid'>
                <div className="row">
                    <div className='col'>
                        <div className='topHeader'>
                            <h1> Real Time Inquiry System </h1>
                            <p> A powerful platform for managing user inquiries in real-time. <br /> 
                            Connect with administrators instantly and get the support you need. </p>
                        </div>
                    </div>
                </div>
           </div>
    
    
    
           <div className='container myPadding'>
                <div className="row">
                      <div className='col-xs-12 col-sm-12 col-md-4 col-xl-4 flexBoxClass'>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-12 w-12 mb-4 text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                              <h2> Communication </h2>
                              <p> Instant messaging between users and administrators for quick resolution of inquiries. </p>
                          </div>
                      </div>
    
    
                      <div className='col-xs-12 col-sm-12 col-md-4 col-xl-4 flexBoxClass'>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-12 w-12 mb-4 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                              <h2> Secure Platform </h2>
                              <p> Protected by JWT authentication and role-based access control for enhanced security. </p>
                          </div>
                      </div>
    
                      <div className='col-xs-12 col-sm-12 col-md-4 col-xl-4 flexBoxClass'>
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-12 w-12 mb-4 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                              <h2> User Management </h2>
                              <p> Efficient handling of user inquiries with status tracking and admin assignment. </p>
                          </div>
                      </div>
                </div>
           </div>
    
    
            <div className='container-fluid myPadding'>
                <div className="row">
                    <center className='loginRegister'>
                        <NavLink to="login"> Login </NavLink>
                        <NavLink to="Register"> Register </NavLink>
                    </center>
                </div>
            </div>
        </>
      )
}
export default ContentPage; 





