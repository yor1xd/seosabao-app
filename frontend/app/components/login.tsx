"use client"

import Image from "next/image";
import google from "@/public/google.svg";
import { useState } from "react";
import LoginAction from "../api/login/loginAction";

const Login = () => {
    const [isLoginClicked, setLoginClick] = useState(false);
    const [isPasswordClicked, setPasswordClick] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col rounded-2xl shadow-2xl items-center gap-y-10 py-5">
            <h1>👋 Bem-vindo de volta!</h1>
            <p>Acesse sua conta para acompanhar o status das suas roupas, entrar na fila de espera e visualizar seu histórico de lavagens!</p>
            <form className="flex flex-col gap-y-5" action={LoginAction}>
                <div className="relative w-fit h-fit">
                    <input type="text" name="email" className="outline-1 outline-foreground rounded-full px-5 py-2" onChange={(ev) => {setPassword(ev.target.value)}} onFocus={() => {setLoginClick(true)}} onBlur={() => {if(!password) setLoginClick(false)}}></input>
                    <p className="absolute translate-y-1/2 text-foreground bg-background text-xs px-2 left-[5%] transition-all duration-300 pointer-events-none"
                    style={{bottom: isLoginClicked ? "100%" : "50%", fontSize: isLoginClicked ? "" : "1rem", opacity: isLoginClicked ? "100%" : "50%"}}>Nome de usuário</p>
                </div>

                <div className="relative w-fit h-fit">
                    <input type="text" name="password" className="outline-1 outline-foreground rounded-full px-5 py-2" onChange={(ev) => {setPassword(ev.target.value)}} onFocus={() => {setPasswordClick(true)}} onBlur={() => {if(!password) setPasswordClick(false)}}></input>
                    <p className="absolute translate-y-1/2 text-foreground bg-background text-xs px-2 left-[5%] transition-all duration-300 pointer-events-none"
                    style={{bottom: isPasswordClicked ? "100%" : "50%", fontSize: isPasswordClicked ? "" : "1rem", opacity: isPasswordClicked ? "100%" : "50%"}}>Senha</p>
                </div>

                <button type="submit" className="bg-foreground text-background rounded-full">Entrar</button>
                <div className="flex flex-row items-center gap-x-2">
                    <div className="flex-grow h-[1px] bg-foreground rounded-full"/>
                    <p className="text-xs text-foreground bg-background">ou</p>
                    <div className="flex-grow h-[1px] bg-foreground rounded-full"/>
                </div>
                <button className="flex flex-row items-center justify-evenly px-5 py-2 rounded-2xl shadow-md">
                    <Image src={google} alt="Google" width={32} height={32}/>
                    <p className="text-base"><span className="text-black hidden sm:inline">Entrar com </span>Google</p>
                </button>
            </form>
        </div>
    )
}

export default Login;