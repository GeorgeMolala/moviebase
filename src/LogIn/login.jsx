import React from "react";
import "./loginStyling.css";
import { useEffect, useState, useRef } from "react";
  

const Login = () =>{

    const [mail,setmail] = useState();
    const [pass,setpass] = useState();
    const [err,seterr] = useState();

    // const navig = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail,pass)
    
    let UserObject = {
        "username": mail,
        "password" : pass
    }

    fetch("https://localhost:44366/api/Register/LogIn",{
        method:"POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(UserObject)

    }).then((res) => {
        console.log("Checking");
        if (res.StatusCode == 200)
        {
            
            alert("Logged in");
            
        }
        return res.json();
    }).then(res => {
        console.log("Logged in");
        if (res.StatusCode == 200)
        {
            
            alert("Logged in");
            
        }
        
    }).catch((err) => {

        console.log("Error ")
        
    });

   }

return(

    <div className="LogIn" id = "logins">

        <div className="headerPart">
            <span> </span>
        </div>

        <form className="LoginSection" onSubmit={handleSubmit}>

         <div className="Username" >
            <input type="text" placeholder="User Name" className="UserNameInput" onChange={(e) => setmail(e.target.value)} value={mail}></input>
        </div>

            <div className="Password">
                <input type="Password" placeholder="Password" className="PasswordInput" onChange={(e) => setpass(e.target.value)} value={pass}></input>
            </div>

           <div className="LoginButtons">
                <button className="LogIn-Button" type="submit">Log In</button>
                <button className="Cancel-Button">Register</button>
           </div>
        
           <div className="forgotPassword">
             <a href="">forgot Password</a>
           </div>

        </form>

    
    </div>

)

} 
export default Login;