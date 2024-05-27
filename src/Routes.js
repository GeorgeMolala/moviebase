import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogIn from "./LogIn/login.jsx"
import "./LogIn/loginStyling.css"
import HomePage from "./LoggedIn/HomePage.jsx"
import Layout from './Layout.js'

function Routess()
{
return (


  
     <Routes>
        <Route path='/' element={<Layout/>} >
             <Route path="/" element={<LogIn/>}/>
             <Route path="/Home" element={<HomePage/>}/>
             <Route path="*" element={<LogIn/>}/>

        </Route>
       
     </Routes>
    
    
     
    )
   
}
export default Routess;