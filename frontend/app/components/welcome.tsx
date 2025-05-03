import Image from "next/image"
import login from "@/public/login.svg"
import google from "@/public/google.svg"

const Welcome = () => {
    return(
        <div className="flex flex-col justify-evenly">
            <h1 className="text-4xl font-bold mb-5">Bem vindo!</h1>
            <p className="">Fique atualizado, evite filas e receba notificações quando uma máquina estiver disponível!</p>
            <p>Lavar roupa nunca foi tão fácil!</p>
            <p className="my-5">Entre para saber mais:</p>
            <div className="flex flex-row justify-evenly sm:justify-start sm:gap-x-5">
                <button className="flex flex-row items-center gap-x-2 text-2xl p-5 rounded-2xl shadow-md">
                    <Image src={login} alt="Login" width={32} height={32}/>
                    <p><span className="text-black hidden sm:inline">Registrar com </span>Email</p>
                </button>
                <button className="flex flex-row items-center gap-x-2 text-2xl p-5 rounded-2xl shadow-md sm:whitespace-nowrap">
                    <Image src={google} alt="Google" width={32} height={32}/>
                    <p><span className="text-black hidden sm:inline">Entrar com </span>Google</p>
                </button>
            </div>
        </div>
    )
}

export default Welcome;