"use client"

import { useState } from "react";

const ProgressBar = () => {
    return (
        <div className="relative flex flex-col justify-evenly gap-y-2">
            <p>Progresso atual</p>
            <div className="w-full h-[20px] rounded-2xl bg-[#E8F2E8] overflow-hidden">
                <div className="h-full bg-[#1AE51A] rounded-2xl transition-all duration-300" style={{width: `${0}%`}}></div>

            </div>
            <p><span>Tempo estimado: {0}min</span></p>

            <p className="absolute top-0 right-0">{0}%</p>


        </div>
    )
}

export default ProgressBar;