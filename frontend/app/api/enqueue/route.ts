import { neon } from "@neondatabase/serverless";
import Pusher from "pusher";

const pusher = new Pusher({
    appId: process.env.APP_ID!,
    key: process.env.KEY!,
    secret: process.env.SECRET!,
    cluster: process.env.CLUSTER!,
    useTLS: true,
});

export async function POST(req: Request){
    const { user_id } = await req.json();

    const sql = neon(`${process.env.DATABASE_URL}`);

    const result = await sql`SELECT id FROM queue WHERE user_id = ${user_id} LIMIT 1`

    if(result.length > 0){
        return Response.json({"error": "User already in waitlist"}, {status: 400})
    }

    await sql`INSERT INTO queue (user_id) VALUES (${user_id})`

    const queue = await sql`SELECT * FROM queue ORDER BY created_at ASC`;

    await pusher.trigger("seosabao", "updated", { queue: queue});

    return Response.json({"message": "User inserted into waitlist"}, {status: 200})

}