import httpStatus from "http-status";
import AppError from "../../middleware/AppError";
import prisma from "../../utils/prisma";

interface CreateUserInput {
  name: string;
  email: string;
  age: number;
}

export type UpdateUserInput = Partial<CreateUserInput>;

const createUser = async (data: CreateUserInput) => {
  const { name, email, age } = data;

  const isUser = await prisma.user.findUnique({ where: { email } });

  if (isUser) {
    throw new AppError(
      httpStatus.CONFLICT,
      "A user with this email already exists.",
    );
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      age,
    },
  });
  return user;
};

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found.");
  }
  return user;
};

const updateUser = async (id: string, data: UpdateUserInput) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found.");
  }

  const updatedUser = await prisma.user.update({ where: { id }, data });
  return updatedUser;
};

const deleteUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found.");
  }

  return await prisma.user.delete({ where: { id } });
};

const userService = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};

export default userService;
