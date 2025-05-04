import { neon } from "@neondatabase/serverless";

export async function GET(){
    const sql = neon(`${process.env.DATABASE_URL}`);

    const queue = await sql`SELECT * FROM queue ORDER BY created_at ASC`;

    return Response.json(queue);

}