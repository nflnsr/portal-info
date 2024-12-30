// import { HttpException } from "@repo/utils/server";
import { UserRepository } from "./user.repository";
import { User, CreateUserType, UpdateUserType } from "@repo/dto";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers(): Promise<Array<Omit<User, "password">>> {
    return await this.userRepository.getUsers();
  }

  async getUserById(id: number): Promise<Omit<User, "password"> | null> {
    return await this.userRepository.getUserById(id);
  }

  async createUser(
    user: CreateUserType,
  ): Promise<Omit<User, "password"> | string> {
    // advanced validation will increases queries, so it's better to use 
    // global error handler with prisma error in middleware

    // const { emailExist, phoneNumberExist } =
    //   await this.userRepository.checkUserUniqueness(
    //     user.email,
    //     user.phone_number,
    //   );

    // if (emailExist && phoneNumberExist) {
    //   throw new HttpException(
    //     409,
    //     "client_error",
    //     "Email dan nomor telepon sudah ada",
    //   );
    // } else if (phoneNumberExist) {
    //   throw new HttpException(
    //     409,
    //     "client_error",
    //     "Nomor telepon sudah ada",
    //   );
    // } else if (emailExist) {
    //   throw new HttpException(409, "client_error", "Email sudah ada");
    // }

    return await this.userRepository.createUser(user);
  }

  async loginUser(
    email: string,
  ): Promise<User | null> {
    return await this.userRepository.loginUser(email);
  }

  async updateUser(
    id: number,
    user: UpdateUserType,
  ): Promise<Omit<User, "password"> | null> {
    // advanced validation will increases queries, so it's better to use 
    // global error handler with prisma error in middleware
    
    // const { userExist } = await this.userRepository.checkUserExistence(id);

    // if (!userExist) {
    //   throw new HttpException(404, "client_error", "User tidak ditemukan");
    // }

    return await this.userRepository.updateUser(id, user);
  }
}
