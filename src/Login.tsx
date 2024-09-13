import React, {CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // 登录处理函数
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://127.0.0.1:5000/api/login", { username, password }, {
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token); // 登录成功保存令牌
                navigate("/frontPage"); // 跳转到首页
            })
            .catch((error) => {
                alert("登录失败，请检查用户名和密码是否正确");
            });
    };

    // 注册处理函数
    const handleRegister = (event) => {
        event.preventDefault();
        axios
            .post("http://127.0.0.1:5000/api/register", { username, password }, {
                headers: { "Content-Type": "application/json" }
            })
            .then(() => {
                alert("注册成功，请登录");
            })
            .catch((error) => {
                alert("注册失败，用户名可能已存在");
            });
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    登录
                </button>
                <button type="button" onClick={handleRegister} style={buttonStyle}>
                    注册
                </button>
            </form>
        </div>
    );
};

    // 定义样式对象并明确指定类型为 CSSProperties
const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0", // 确保容器没有外部边距
    padding: "0", // 确保容器没有内边距
    backgroundImage: `url(/style/bg1.JPG)`, // 使用引入的图片
    backgroundSize: 'cover', // 使背景图片覆盖整个容器
    backgroundPosition: 'center', // 将背景图片居中显示
    backgroundRepeat: 'no-repeat', // 避免背景图片重复显示
    width: "100%", // 容器宽度为100%
    overflow: "hidden"
};

const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const inputStyle: CSSProperties = {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
};

const buttonStyle: CSSProperties = {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#1890ff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
};

export default Login;