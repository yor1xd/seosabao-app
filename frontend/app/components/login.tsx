"use client"

import { useState } from "react";

const Login = () => {
    const [isLoginClicked, setLoginClick] = useState(false);
    const [isPasswordClicked, setPasswordClick] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col shadow-2xl items-center gap-y-10">
            <h1>Login</h1>
            <form className="flex flex-col gap-y-5">
                <div className="relative w-fit h-fit">
                    <input type="text" className="outline-1 outline-foreground rounded-full px-5 py-2" onChange={(ev) => {setPassword(ev.target.value)}} onFocus={() => {setLoginClick(true)}} onBlur={() => {if(!password) setLoginClick(false)}}></input>
                    <p className="absolute translate-y-1/2 text-foreground bg-background text-xs px-2 left-[5%] transition-all duration-300 pointer-events-none"
                    style={{bottom: isLoginClicked ? "100%" : "50%", fontSize: isLoginClicked ? "" : "1rem", opacity: isLoginClicked ? "100%" : "50%"}}>Nome de usuário</p>
                </div>

                <div className="relative w-fit h-fit">
                    <input type="text" className="outline-1 outline-foreground rounded-full px-5 py-2" onChange={(ev) => {setPassword(ev.target.value)}} onFocus={() => {setPasswordClick(true)}} onBlur={() => {if(!password) setPasswordClick(false)}}></input>
                    <p className="absolute translate-y-1/2 text-foreground bg-background text-xs px-2 left-[5%] transition-all duration-300 pointer-events-none"
                    style={{bottom: isPasswordClicked ? "100%" : "50%", fontSize: isPasswordClicked ? "" : "1rem", opacity: isPasswordClicked ? "100%" : "50%"}}>Senha</p>
                </div>
            </form>
        </div>
    )
}

export default Login;