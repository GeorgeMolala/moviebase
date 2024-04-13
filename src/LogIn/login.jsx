import React from "react";
import "./loginStyling.css"


const login = () =>{

return(

   

    <div className="LogIn" id = "logins">

        <div className="headerPart">
            <span> </span>
        </div>

        <div className="LoginSection">

         <div className="Username" >
            <input type="text" placeholder="User Name" className="UserNameInput"></input>
        </div>

            <div className="Password">
                <input type="Password" placeholder="Password" className="PasswordInput"></input>
            </div>

           <div className="LoginButtons">
                <button className="LogIn-Button">Log In</button>
                <button className="Cancel-Button">Register</button>
           </div>
        
           <div className="forgotPassword">
             <a href="">forgot Password</a>
           </div>

        </div>

    
    </div>

)

} 
export default login;