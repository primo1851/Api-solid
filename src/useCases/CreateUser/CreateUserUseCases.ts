import { User } from "../../enteties/Users";
import { IMailProvider } from "../../providers/IMailprovider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestsDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
   constructor(
      private usersRepository: IUsersRepository,
      private mailProvider: IMailProvider
   ) {}


   async execute(data: ICreateUserRequestsDTO) {
      const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

      if (userAlreadyExists) {
         throw new Error(`User already exists.`);
      }

      const user = new User(data);

      await this.usersRepository.save(user);

      this.mailProvider.sendMail({
         to: {
            name: data.name,
            email: data.email,

         },
         from: {
            name: `Equipe Kdeo`,
            email: `kdeobrasil@gmail.com`

         },
         subject: `Seja bem-vindo à plataforma kdeo`,
         body: `<p>Seu cadastro foi um sucesso! Acesse o app com o login criado<p>`
      })
   }
}