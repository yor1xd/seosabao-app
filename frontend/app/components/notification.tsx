import Image from "next/image";
import check from "@/public/check.svg";

const Notification = () => {
    return(
        <div className="fixed z-10 bg-background left-1/2 bottom-5 -translate-x-1/2 shadow-2xl flex flex-row w-full sm:w-fit items-center p-5 rounded-2xl gap-x-2 transition-all animate-notify">
            <Image src={check} alt="✓" width={32} height={32} className=""/>
            <p className="">Há uma máquina <span>disponível!</span></p>

        </div>
    )
}

export default Notification;