import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { register, login, getMe } from "./controllers/auth.controller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/me", getMe);

app.get("/health", (req, res) => {
    res.json({ status: "Auth Service Running", mode: "Postgres/Prisma" });
});

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});