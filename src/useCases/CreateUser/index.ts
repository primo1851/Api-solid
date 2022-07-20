import { MailtrapMailProvider } from "../../providers/implematations/MailtrapMailprovider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostegresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCases";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider

)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {createUserUseCase, createUserController }