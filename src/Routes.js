import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogIn from "./LogIn/login.jsx"
import "./LogIn/loginStyling.css"
import HomePage from "./LoggedIn/HomePage.jsx"

function Routess()
{
return (


  
     <Routes>
        <Route index path='/' element={<LogIn/>} />
        {/* <Route path="./LoggedIn/HomePage.jsx" element={<HomePage/>}/> */}
     </Routes>
    
    
     
    )
   
}
export default Routess;