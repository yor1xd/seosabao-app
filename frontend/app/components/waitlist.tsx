"use client"

import Image from "next/image";
import profile from "@/public/profile.svg";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";

type QueueEntry = {
    id: number;
    user_id: number;
    created_at: string;
}
type QueueUpdateData = {
    queue: QueueEntry[];
}

const Waitlist = () => {

    const [queue, setQueue] = useState<QueueEntry[]>([]);

    const joinQueue = async () => {
        const res = await fetch("/api/enqueue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: 1
            })

        })

        console.log(res);
        
    }

    const refreshQueue = async () => {
        const res = await fetch("/api/refresh");
        const data = await res.json();
        
        setQueue(data);
        console.log(res);
    }

    useEffect(() => {

        refreshQueue();

        const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY!, {
            cluster: process.env.NEXT_PUBLIC_CLUSTER!,
        });

        const channel = pusher.subscribe("seosabao");
        channel.bind("updated", (data: QueueUpdateData) => {
            console.log(data.queue);
            setQueue(data.queue)
            
        })

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [])

    return(
        <div className="flex flex-col justify-evenly gap-y-5">
            <h1 className="font-bold">Sua posição</h1>
            <p>Você não está na fila, clique <span className="cursor-pointer" onClick={joinQueue}>aqui</span> para entrar!</p>
            <h1 className="font-bold mt-5 mb-2">Usuários em espera</h1>

            <div className="flex flex-col gap-y-10">

                {
                    queue.map(({id, user_id, created_at}, index) => {
                        return(
                <div className="flex flex-row gap-x-4" key={index}>
                    <Image src={profile} alt="" className="h-14 w-auto"/>
                    <div>
                        <p className="text-2xl">{user_id}</p>
                        <p className="text-md"><span>{created_at}</span></p>
                    </div>
                </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Waitlist;