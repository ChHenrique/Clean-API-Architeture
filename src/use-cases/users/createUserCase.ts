import { randomUUID } from "crypto";
import { IUserRepository } from "../../domain/repositorys/IUserRepository";
import { userSchema, userTypes } from "../../infra/schemas/userSchema";
import { ServerError } from "../../shared/serverError";
import bcrypt from "bcrypt"
import { User } from "../../domain/entities/user";


export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: userTypes) {
        const userParsed = userSchema.safeParse(data)
        if (!userParsed.success) throw new ServerError("Dados inválidos")

        const { name, email, password, photoUrl } = userParsed.data
        const emailExists = await this.userRepository.findByEmail(email)
        if (emailExists) throw new ServerError("Email já existe", 409)

        const hashPassword: string = await bcrypt.hash(password, 10)
        const id = randomUUID()

        const user = new User(name, email, hashPassword, photoUrl, id)
        await this.userRepository.createUser(user)

        return { ...user }

    }
}