import { client } from './client';
import { LoginCredentials, RegisterCredentials, AuthResponse, User } from '@/types/auth';

export const authApi = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const response = await client.post<AuthResponse>('/auth/login', credentials);
        return response.data;
    },

    register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
        const response = await client.post<AuthResponse>('/auth/register', credentials);
        return response.data;
    },

    getCurrentUser: async (): Promise<User> => {
        const response = await client.get<{ user: User }>('/auth/me');
        return response.data.user;
    },

    logout: async (): Promise<void> => {
        // client.post('/auth/logout');
    }
};
