import express from "express";
import { registerUser, loginUser } from "../controllers/user";

const router = express.Router();

router.post("/user", registerUser);
router.post("/login", loginUser);

export { router };
