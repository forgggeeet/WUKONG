import React from "react"
import {BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";
import FrontPage from "./frontPage/frontPage"
const App=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/Login" element={<Login/>}/>
                <Route path="/frontPage" element={<FrontPage></FrontPage>}/>
            </Routes>
        </Router>
    );
};
export default App;