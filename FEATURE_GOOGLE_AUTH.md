# Features Implemented for Frontend Authorization

## Google Sign-In Integration
I have added a "Continue with Google" button to the Login and Registration screens.

### Changes Made:
- **`apps/web/src/config/firebase.ts`**: Exported `signInWithGoogle` helper function using `GoogleAuthProvider`.
- **`apps/web/src/pages/Auth/Login.tsx`**: Added the Google button styling (SVGs) and the handler function to call Firebase.
- **`apps/web/src/pages/Auth/Register.tsx`**: Replicated the same button and logic for the Sign Up flow.

### How it Works:
1. User clicks the "Continue with Google" button.
2. Firebase popup opens for Google authentication.
3. Upon success, the app retrieves the user's `idToken`.
4. (Current) The app simulates a backend login by creating a mock user object and logging them in via `AuthContext`.
5. (Future) You should send this `idToken` to your backend (`/api/auth/google`) to verify the token and create/fetch the user in your database.

### Verification:
- Both Login and Register pages now show the Google button clearly separated by an "OR" divider.
- The button handles loading states (`isGoogleLoading`).
- Basic error handling (e.g., popup closed by user) is implemented.
