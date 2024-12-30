import { prisma } from "@repo/db";
import { User, CreateUserType, UpdateUserType } from "@repo/dto";

export class UserRepository {
  async checkUserUniqueness(
    email: string,
    phone_number: string,
  ): Promise<{ emailExist: boolean; phoneNumberExist: boolean }> {
    const checkByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const checkByPhoneNumber = await prisma.user.findUnique({
      where: {
        phone_number,
      },
    });

    return {
      emailExist: Boolean(checkByEmail),
      phoneNumberExist: Boolean(checkByPhoneNumber),
    };
  }

  async checkUserExistence(id: number): Promise<{ userExist: boolean }> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return {
      userExist: Boolean(user),
    };
  }

  async getUsers(): Promise<Array<Omit<User, "password">>> {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone_number: true,
        role: true,
        created_at: true,
      },
    });
  }

  async getUserById(id: number): Promise<Omit<User, "password"> | null> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone_number: true,
        role: true,
        created_at: true,
      },
    });
  }

  async createUser(user: CreateUserType): Promise<Omit<User, "password">> {
    return await prisma.user.create({
      data: user,
      select: {
        id: true,
        name: true,
        email: true,
        phone_number: true,
        role: true,
        created_at: true,
      },
    });
  }

  async loginUser(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        phone_number: true,
        role: true,
        created_at: true,
      },
    });
  }

  async updateUser(
    id: number,
    user: UpdateUserType,
  ): Promise<Omit<User, "password">> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: user,
      select: {
        id: true,
        name: true,
        email: true,
        phone_number: true,
        role: true,
        created_at: true,
      },
    });
  }
}
