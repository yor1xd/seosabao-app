import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const { email, password } = await request.json();

    const sql = neon(`${process.env.DATABASE_URL}`);

    const result = await sql`SELECT id, email, password FROM users WHERE email = ${email} LIMIT 1`;
    const userExists = result.length > 0;

    if(!userExists){
        return Response.json({"error": "Username or password incorrect."}, {status: 401});
    }

    const validatedPassword = await bcrypt.compare(password, result[0].password);

    if(!validatedPassword){
         return Response.json({"error": "Username or password incorrect."}, {status: 401});
    }

    const token = jwt.sign({
        id: result[0].id,
        email: result[0].email
    }, process.env.JWT_PASS as string);

    const response = NextResponse.json({success: true});
    response.cookies.set({
        name: "token",
        value: token,
        path: "/",
        httpOnly: true,
        secure: true,
        maxAge: 60*60*24,
    });

    return response;

}