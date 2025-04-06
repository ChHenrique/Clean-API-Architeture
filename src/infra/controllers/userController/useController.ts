import { FastifyContextDTO } from "../../../dto/fastifyContextDTO";
import { CreateUserUseCase } from "../../../use-cases/users/createUserCase";
import { userTypes } from "../../schemas/userSchema";

export class UserController{
    constructor(
        private createUser: CreateUserUseCase
    ){}

    async create(fastify: FastifyContextDTO){
        const data = fastify.req.body as userTypes
        const user = await this.createUser.execute(data)
        fastify.res.status(201).send({msg: "Usuário criado com sucesso", user})
    }
}