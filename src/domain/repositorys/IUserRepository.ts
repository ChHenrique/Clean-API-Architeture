import { User } from "../entities/user";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User | null>
    findMany(): Promise<User[] | null>
    createUser(data: User): Promise<void>
    updateUser(data: User): Promise<void>
    deleteUser(id: string): Promise<void>
}