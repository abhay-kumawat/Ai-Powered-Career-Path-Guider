import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Service URLs (should be in .env, defaulting here for dev)
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://localhost:3001";
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:3002";
const CAREER_SERVICE_URL = process.env.CAREER_SERVICE_URL || "http://localhost:3003";
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || "http://localhost:3004";

// Health Check
app.get("/health", (req, res) => {
  res.json({ status: "API Gateway is running" });
});

// Proxy Rules - Matching Frontend Clients
// Auth Service (Frontend uses /auth/login -> Gateway /api/auth/login -> Auth Service /auth/login)
app.use("/api/auth", proxy(AUTH_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return "/auth" + req.url; // Maps /api/auth/login -> /auth/login
  }
}));

// User Service (Frontend uses /users/profile -> Gateway /api/users/profile -> User Service /users/profile)
app.use("/api/users", proxy(USER_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return "/users" + req.url;
  }
}));

// Career Service
app.use("/api/careers", proxy(CAREER_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return "/careers" + req.url;
  }
}));

// AI Service
app.use("/api/ai", proxy(AI_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return "/ai" + req.url;
  }
}));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
  console.log(`Proxying to:
  - Auth: ${AUTH_SERVICE_URL}
  - User: ${USER_SERVICE_URL}
  - Career: ${CAREER_SERVICE_URL}
  - AI: ${AI_SERVICE_URL}`);
});