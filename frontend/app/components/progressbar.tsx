"use client"

import { useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    return (
        <div className="relative flex flex-col justify-evenly gap-y-2">
            <p>Progresso atual</p>
            <div className="w-full h-[20px] rounded-2xl bg-[#E8F2E8] overflow-hidden">
                <div className="h-full bg-[#1AE51A] rounded-2xl transition-all duration-300" style={{width: `${progress}%`}}></div>

            </div>
            <p><span>Tempo estimado: {progress}min</span></p>

            <p className="absolute top-0 right-0">{progress}%</p>


        </div>
    )
}

export default ProgressBar;