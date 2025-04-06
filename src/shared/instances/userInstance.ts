import { UserController } from "../../infra/controllers/userController/useController";
import { IPrismaUserRepository } from "../../infra/database/IPrismaUserRepository";
import { CreateUserUseCase } from "../../use-cases/users/createUserCase";

const userRepository = new IPrismaUserRepository()
const createUserUsecase = new CreateUserUseCase(userRepository)
export const userInstance = new UserController(createUserUsecase)
