import { User } from "../enteties/Users";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | undefined>;
    save(user: User): Promise<void>;
}