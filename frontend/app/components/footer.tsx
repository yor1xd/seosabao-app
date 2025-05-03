import Image from "next/image";
import instagram from "@/public/insta.svg";
import whatsapp from "@/public/whatsapp.svg";
import maps from "@/public/maps.svg";

const Footer = () => {
    return(
        <div className="w-full h-full py-15 flex flex-row justify-evenly bg-[#E8F2E8] border-t-1 border-[rgba(44,150,80,0.25)]">
            <div className="hidden sm:flex flex-col w-fit gap-y-5">
                <h1 className="text-xl">Links para navegação</h1>
                <p className="text-sm">Página inicial</p>
                <p className="text-sm">Termos de uso</p>
                <p className="text-sm">Política de privacidade</p>
            </div>

            <div className="flex flex-col w-fit gap-y-5">
                <h1 className="text-xl">Suporte</h1>
                <p className="text-sm">Ajuda / FAQ</p>
                <p className="text-sm">Fale Conosco</p>
            </div>

            <div className="flex flex-col w-fit gap-y-5">
                <h1 className="text-xl">Contato</h1>
                <p className="hidden sm:block text-sm">
                    <a href="https://www.instagram.com/seosabaolavanderia/" target="_blank" className="hover:underline">Instagram</a>
                </p>
                <p className="hidden sm:block text-sm">
                    <a  href="wa.me/5535997369051" target="_blank" className="hover:underline">Whatsapp</a>
                </p>
                <p className="hidden sm:block text-sm">
                    <a href="https://maps.app.goo.gl/t3wqiaoEs98Hd1xMA" target="_blank" className="hover:underline">Av. BPS 1720</a>
                </p>

                <div className="flex flex-row gap-x-2 sm:hidden">
                    <button><Image src={instagram} alt="Instagram" width={32} height={32}/></button>
                    <button><Image src={whatsapp} alt="Whatsapp" width={32} height={32}/></button>
                    <button><Image src={maps} alt="Google Maps" width={32} height={32}/></button>
                </div>
            </div>

            <div className="absolute w-full sm:w-auto bottom-5 sm:right-5">
                <p className="w-fit text-sm mx-auto">© 2025 SeoSabão. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;