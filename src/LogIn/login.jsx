import React from "react";
import header from "./header,jsx"


const login = () =>{

return(

   

    <div className="LogIn" id = "logins">

        <div className="headerPart">
            <span> </span>
        </div>

        <div className="LoginSection">

         <div className="Username" >
            <input type="text" placeholder="UserName" className="UserNameInput"></input>
        </div>

            <div className="Password">
                <input type="Password" placeholder="Password" className="PasswordInput"></input>
            </div>

           <div className="LoginButtons">
                <button>LogIn</button>
                <button>Cancel</button>
           </div>
        
           <div className="forgotPassword">
             <a href="">forgot Password</a>
           </div>

        </div>

    
    </div>

)

} 
export default login;