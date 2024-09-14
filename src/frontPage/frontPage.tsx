import React, {CSSProperties} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import './frontPage.css'
const FrontPage = () => {
    const token = localStorage.getItem("token");
    const navigate=useNavigate();
    if (!token) {
        // 如果没有令牌，重定向到登录页面
        return <Navigate to="/login"/>;
    }
    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (

        <div className="container">
            <div>
                <button onClick={logout} className="logout-button">退出登录</button>
            </div>
            <div className="welcome-text">
                欢迎来到这里！
            </div>
        </div>);
};

export default FrontPage;
