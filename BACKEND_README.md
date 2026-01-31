# Career Path Guider - Microservices Backend

> **AI-Powered Career Guidance Platform** built with microservices architecture, powered by Grok AI

## 🚀 Quick Start

### Prerequisites

- **Docker & Docker Compose** installed
- **Grok API Key** from [X.AI](https://console.x.ai/)
- **Node.js 18+** (for local development)
- **pnpm** package manager

### Setup

1. **Clone the repository**
   ```bash
   cd /home/nikhil/Desktop/projects/chintu-project/Ai-Powered-Career-Path-Guider
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your **Grok API key**:
   ```env
   GROK_API_KEY=your-grok-api-key-here
   ```

3. **Start all services with Docker**
   ```bash
   docker-compose up -d
   ```

4. **Run database migrations**
   ```bash
   # Auth Service
   docker-compose exec auth-service npx prisma migrate deploy
   
   # User Service
   docker-compose exec user-service npx prisma migrate deploy
   
   # Career Service
   docker-compose exec career-service npx prisma migrate deploy
   
   # AI Service
   docker-compose exec ai-service npx prisma migrate deploy
   ```

5. **Verify services are running**
   ```bash
   curl http://localhost:3000/health  # API Gateway
   curl http://localhost:3001/health  # Auth Service
   curl http://localhost:3002/health  # User Service
   curl http://localhost:3003/health  # Career Service
   curl http://localhost:3004/ai/health  # AI Service
   ```

## 🏗️ Architecture

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  API Gateway    │  :3000
│  Rate Limiting  │
│  Authentication │
└────────┬────────┘
         │
    ┌────┴────┬────────┬────────┐
    ▼         ▼        ▼        ▼
┌────────┐ ┌────┐  ┌──────┐ ┌─────┐
│ Auth   │ │User│  │Career│ │ AI  │
│ :3001  │ │3002│  │ 3003 │ │3004 │
└────┬───┘ └─┬──┘  └───┬──┘ └──┬──┘
     │       │         │       │
     ▼       ▼         ▼       ▼
   [DB]    [DB]      [DB]    [DB]
```

### Services

| Service | Port | Purpose |
|---------|------|---------|
| **API Gateway** | 3000 | Entry point, routing, auth validation, rate limiting |
| **Auth Service** | 3001 | User authentication, JWT tokens, session management |
| **User Service** | 3002 | User profiles, skills, interests, assessments |
| **Career Service** | 3003 | Career paths, recommendations, learning roadmaps |
| **AI Service** | 3004 | Grok-powered insights, explanations, personalized roadmaps |

### Databases

- **PostgreSQL** - 4 separate databases (one per service)
- **Redis** - Rate limiting and caching

## 🤖 AI Features (Grok Integration)

The AI Service leverages Grok's powerful language model to provide:

### 1. **Career Path Analysis**
- Analyzes user profile and survey answers
- Suggests best-fit career paths with match scores
- Provides market trends and growth projections

### 2. **Personalized Insights**
- Identifies skill gaps and strengths
- Highlights market opportunities
- Generates actionable recommendations

### 3. **Recommendation Explanations**
- Explains why careers match user profiles
- Details strengths and growth areas
- Provides market outlook and salary information

### 4. **Personalized Learning Roadmaps**
- Creates step-by-step learning plans
- Recommends courses, books, and projects
- Tailored to user's timeframe and current skills

## 📡 API Endpoints

All requests go through API Gateway at `http://localhost:3000/api/v1`

### Authentication

```bash
# Register
POST /auth/register
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

# Login
POST /auth/login
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

# Refresh Token
POST /auth/refresh
{
  "refreshToken": "your-refresh-token"
}
```

### User Profile

```bash
# Get Profile (requires auth)
GET /users/profile
Headers: Authorization: Bearer <token>

# Update Profile
PUT /users/profile
Headers: Authorization: Bearer <token>
{
  "fullName": "John Doe",
  "experienceYears": 5,
  "educationLevel": "Bachelor's"
}

# Add Skills
POST /users/skills
{
  "skillName": "JavaScript",
  "proficiency": "Advanced",
  "yearsExp": 3
}
```

### AI-Powered Features

```bash
# Generate Career Insights
POST /ai/insights
Headers: Authorization: Bearer <token>
{
  "skills": [...],
  "interests": [...],
  "careerGoals": "..."
}

# Explain Career Recommendation
POST /ai/explain-recommendation
{
  "careerPath": {...},
  "userProfile": {...}
}

# Generate Learning Roadmap
POST /ai/roadmap
{
  "careerPathTitle": "Full-Stack Developer",
  "currentSkills": [...],
  "targetSkills": [...],
  "timeframe": "6 months"
}

# Analyze Career Path
POST /ai/analyze
{
  "answers": {
    "skills": [...],
    "interests": [...],
    "experience": "..."
  }
}
```

### Career Paths

```bash
# Get All Career Paths
GET /careers/paths?category=tech&difficulty=intermediate

# Get Career Recommendations
GET /careers/recommendations
Headers: Authorization: Bearer <token>
```

## 🛠️ Development

### Local Development (without Docker)

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start databases**
   ```bash
   docker-compose up auth-db user-db career-db ai-db redis -d
   ```

3. **Run migrations**
   ```bash
   cd apps/api/auth-service && npx prisma migrate dev
   cd apps/api/user-service && npx prisma migrate dev
   cd apps/api/career-service && npx prisma migrate dev
   cd apps/api/ai-service && npx prisma migrate dev
   ```

4. **Start services**
   ```bash
   # Terminal 1 - Auth Service
   cd apps/api/auth-service && pnpm dev

   # Terminal 2 - User Service
   cd apps/api/user-service && pnpm dev

   # Terminal 3 - Career Service
   cd apps/api/career-service && pnpm dev

   # Terminal 4 - AI Service
   cd apps/api/ai-service && pnpm dev

   # Terminal 5 - API Gateway
   cd apps/api/api-gateway && pnpm dev
   ```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f ai-service
docker-compose logs -f api-gateway
```

### Stop Services

```bash
docker-compose down

# Remove volumes (warning: deletes all data)
docker-compose down -v
```

## 🧪 Testing

### Test API Flow

```bash
# 1. Register a user
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!@#"}'

# 2. Login
TOKEN=$(curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!@#"}' | jq -r '.data.accessToken')

# 3. Create profile
curl -X PUT http://localhost:3000/api/v1/users/profile \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","experienceYears":3}'

# 4. Get AI insights
curl -X POST http://localhost:3000/api/v1/ai/insights \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"skills":[{"skillName":"JavaScript","proficiency":"Advanced"}],"interests":[{"interestName":"Web Development"}]}'
```

## 📂 Project Structure

```
Ai-Powered-Career-Path-Guider/
├── apps/
│   └── api/
│       ├── api-gateway/         # API Gateway service
│       ├── auth-service/        # Authentication service
│       ├── user-service/        # User management service
│       ├── career-service/      # Career paths and recommendations
│       └── ai-service/          # AI-powered features with Grok
├── docker-compose.yml
├── .env.example
└── README.md
```

## 🔐 Environment Variables

Key environment variables (see `.env.example` for complete list):

| Variable | Description | Required |
|----------|-------------|----------|
| `GROK_API_KEY` | Your Grok API key from X.AI | **Yes** (for AI features) |
| `JWT_SECRET` | Secret key for JWT signing | **Yes** |
| `JWT_REFRESH_SECRET` | Secret for refresh tokens | **Yes** |
| `DATABASE_URL` | PostgreSQL connection string | **Yes** |
| `REDIS_HOST` | Redis host for rate limiting | Yes |

## 🚨 Troubleshooting

### Services won't start
```bash
# Check if ports are already in use
lsof -i :3000 -i :3001 -i :3002 -i :3003 -i :3004

# Remove old containers
docker-compose down && docker-compose up -d
```

### Database connection errors
```bash
# Wait for databases to be healthy
docker-compose ps

# Re-run migrations
docker-compose exec auth-service npx prisma migrate deploy
```

### AI Service not working
- Verify `GROK_API_KEY` is set in `.env`
- Check AI service logs: `docker-compose logs ai-service`
- The service will use mock data if Grok API is not configured

## 📚 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL 15
- **ORM**: Prisma
- **Cache**: Redis 7
- **AI**: Grok (X.AI)
- **Containerization**: Docker & Docker Compose
- **Language**: TypeScript

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Grok AI**
