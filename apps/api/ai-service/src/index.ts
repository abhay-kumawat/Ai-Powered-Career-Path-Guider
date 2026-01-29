import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

import aiRoutes from "./routes/ai.routes";

app.use(cors());
app.use(express.json());

app.use("/ai", aiRoutes);

app.get("/health", (req, res) => {
    res.json({ status: "AI Service Running" });
});

app.listen(PORT, () => {
    console.log(`AI Service running on port ${PORT}`);
});