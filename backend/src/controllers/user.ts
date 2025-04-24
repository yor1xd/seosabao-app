import "dotenv/config";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../client";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { name, email, phoneNumber, password } = req.body;

  try {
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        phoneNumber,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExists) {
      return res.status(401).json({ message: "Invalid user or password." });
    }

    const passwordValidated = await bcrypt.compare(
      password,
      userExists.password
    );

    if (!passwordValidated) {
      return res.status(400).json({ message: "Invalid user or password." });
    }

    const token = jwt.sign(
      { id: userExists.id, email: userExists.email },
      process.env.JWT_PASS as string
    );
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
