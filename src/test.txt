import React, {CSSProperties} from "react";
import {Navigate,useNavigate} from "react-router-dom";

const FrontPage = () => {
    const token = localStorage.getItem("token");
    const navigate=useNavigate();
    if (!token) {
        // 如果没有令牌，重定向到登录页面
        return <Navigate to="/login"/>;
    }
    const goHome = () =>{
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div style={containerStyle}>
            <div>
                <button style={xxx} onClick={goHome}>退出登录</button>
            </div>
            <div style={qqq}>
                欢迎来到这里！
            </div>
        </div>);
};
const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0", // 确保容器没有外部边距
    padding: "0", // 确保容器没有内边距
    backgroundImage: `url(/style/FPbg.jpg)`, // 使用引入的图片
    backgroundSize: 'cover', // 使背景图片覆盖整个容器
    backgroundPosition: 'center', // 将背景图片居中显示
    backgroundRepeat: 'no-repeat', // 避免背景图片重复显示
    width: "100%",
    height: "100vh",
    overflow: "hidden"

};
const qqq: CSSProperties = {
    fontFamily: "Arial, sans-serif", // 字体系列
    fontSize: "60px", // 字体大小
    fontWeight: "bold", // 字体粗细
    fontStyle: "italic", // 字体样式
    lineHeight: "1.5", // 行高
    textAlign: "center", // 文字对齐方式
    color: "#333", // 字体颜色
    // 偏移设置
    marginLeft: "-500px", // 向左偏移
    marginTop: "-300px", // 向上偏移
};
const xxx: CSSProperties = {
    padding: "4px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#fff",
    color: "#000000",
    fontSize: "16px",
    cursor: "pointer",
    position: "absolute",  // 使用绝对定位
    top: "10px", // 距离顶部的距离
    right: "10px", // 距离左边的距离
};
export default FrontPage;
