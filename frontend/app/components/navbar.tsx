import Image from "next/image";
import logo from "@/public/logo.jpg";
import bell from "@/public/bell.svg";
import profile from "@/public/profile.svg";

const Navbar = () => {

    return(
        <div className="flex flex-row justify-between px-5 h-full border-b-1 border-[rgba(44,150,80,0.25)]">
            <div className="flex flex-row items-center justify-between gap-x-2 select-none">
                <Image src={logo} alt="logo" className="rounded-full h-2/3 w-auto" />
                <h1 className="text-xl font-bold text-black hidden sm:block">SEOSabão</h1>
            </div>

            <div className="flex flex-row justify-between items-center gap-x-2">
                <button className="mx-5 hidden sm:block bg-background">Minhas roupas</button>
                <button className="h-4/5 bg-[#E8F2E8] rounded-2xl aspect-square"><Image src={bell} alt="Notificações" className="h-1/2 w-auto mx-auto"/></button>
                <button className="h-11/12 aspect-square bg-background"><Image src={profile} alt="Perfil" className="h-2/3 w-auto mx-auto"/></button>
            </div>
        </div>
    )

}

export default Navbar;