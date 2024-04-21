import { Prisma } from '@prisma/client';

import { NotFound } from '../../core/models/http/http-exception';
import { PrismaService } from '../../prisma/prisma.service';

export class UsersService {
  prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async create(userData: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: userData
    });
  }

  async delete(id: string) {
    try {
      return await this.prisma.user.delete({
        where: { id }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new NotFound('No user found to delete');
        }
      }
      throw error;
    }
  }

  async update(id: string, userData: Prisma.UserUpdateInput) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: userData
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new NotFound('No user found to update');
        }
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.user.findMany({});
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });
    if (!user) {
      throw new NotFound('User not found');
    }
    return user;
  }

}
