import { prisma } from "../../config/prisma";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/repositorys/IUserRepository";

export class IPrismaUserRepository implements IUserRepository {

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email }
        })
        return user
    }

    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { id }
        })
        return user
    }

    async findMany(): Promise<User[] | null> {
        const users = await prisma.user.findMany()
        return users
    }

    async createUser(data: User): Promise<void> {
        await prisma.user.create({
            data: {
                id: data.id ?? '',
                name: data.name,
                email: data.email,
                password: data.password,
                photoUrl: data.photoUrl
            }
        })
    }

    async updateUser(data: User): Promise<void> {
        await prisma.user.update({
            where: { id: data.id },
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                photoUrl: data.photoUrl
            }
        })
    }

    async deleteUser(id: string): Promise<void> {
        await prisma.user.delete({
            where: { id }
        })
    }


}