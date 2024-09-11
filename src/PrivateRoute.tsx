import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // 检查用户是否登录
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    // 根据认证状态决定渲染哪个组件
    return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
