import Image from "next/image"
import login from "@/public/login.svg"
import google from "@/public/google.svg"

const Welcome = () => {
    return(
        <div className="flex flex-col justify-evenly">
            <h1 className="text-4xl font-bold">Bem vindo!</h1>
            <div className="flex flex-row justify-evenly">
                <button className="flex flex-row items-center gap-x-5 text-2xl p-5 rounded-2xl shadow-md">
                    <Image src={login} alt="Login" width={32} height={32}/>
                    <p>Entrar</p>
                </button>
                <button className="flex flex-row items-center gap-x-5 text-2xl p-5 rounded-2xl shadow-md">
                    <Image src={google} alt="Google" width={32} height={32}/>
                    <p>Entrar com Google</p>
                </button>
            </div>
        </div>
    )
}

export default Welcome;