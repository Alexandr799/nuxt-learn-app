export interface User {
    id: number;
    email: string;
    created_at: string; // или можно использовать Date, если будет парсинг
}