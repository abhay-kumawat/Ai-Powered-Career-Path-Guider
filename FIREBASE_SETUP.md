# Firebase Integration

## Summary
Firebase Authentication has been integrated into the frontend (`apps/web`).

## Configuration
- **Environment Variables**: stored in `apps/web/.env` using the `VITE_FIREBASE_*` prefix.
- **Initialization**: `apps/web/src/config/firebase.ts` configures the app and exports the `auth` instance.

## Usage
Import `auth` from `@/config/firebase` (or relative path) to use in React components or context providers.

```typescript
import { auth } from '../config/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Example: Sign in with Google
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider);
```

## Next Steps
- Implement the `AuthContext` using this firebase configuration to manage user sessions.
