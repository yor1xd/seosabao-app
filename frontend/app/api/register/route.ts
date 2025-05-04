import { neon } from "@neondatabase/serverless"
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    const { username, email, password } = await request.json();

    const sql = neon(`${process.env.DATABASE_URL}`);

    const result = await sql`SELECT 1 FROM users WHERE email = ${email} LIMIT 1`;
    const userExists = result.length > 0;

    if(userExists){
    return Response.json({ message: "User already exists"}, {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${hashedPassword})`

    return Response.json({ message: "User registered successfully"}, {status: 201});



}