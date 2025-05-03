import Image from "next/image";
import profile from "@/public/profile.svg";

const Waitlist = () => {
    return(
        <div className="flex flex-col justify-evenly gap-y-5">
            <h1 className="font-bold">Sua posição</h1>
            <p>Você não está na fila, clique <span>aqui</span> para entrar!</p>
            <h1 className="font-bold mt-5 mb-2">Usuários em espera</h1>

            <div className="flex flex-col gap-y-10">
                <div className="flex flex-row gap-x-4">
                    <Image src={profile} alt="" className="h-14 w-auto"/>
                    <div>
                        <p className="text-2xl">Usuário</p>
                        <p className="text-md"><span>Atualmente usando</span></p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-4">
                    <Image src={profile} alt="" className="h-14 w-auto"/>
                    <div>
                        <p className="text-2xl">Usuário</p>
                        <p className="text-md"><span>Atualmente usando</span></p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-4">
                    <Image src={profile} alt="" className="h-14 w-auto"/>
                    <div>
                        <p className="text-2xl">Usuário</p>
                        <p className="text-md"><span>Atualmente usando</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Waitlist;