import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getProfile, updateProfile } from "./controllers/user.controller";
import { authenticateToken } from "./middlewares/auth.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get("/users/profile", authenticateToken, getProfile);
app.put("/users/profile", authenticateToken, updateProfile);

app.get("/health", (req, res) => {
    res.json({ status: "User Service Running", mode: "Postgres/Prisma" });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});