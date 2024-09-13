import React from "react"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";
import FrontPage from "./frontPage"
const App=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/frontPage" element={<FrontPage></FrontPage>}/>
            </Routes>
        </Router>
    );
};
export default App;