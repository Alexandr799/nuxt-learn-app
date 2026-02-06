import type { User } from "./user.interface";

// Типизация токена и пользователя
export interface AuthResponse {
    token: string;
    user: User;
}