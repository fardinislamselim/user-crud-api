import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import userService from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User created successfully.",
    data: user,
  });
});

const getUsers = catchAsync(async (_req, res) => {
  const users = await userService.getUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully.",
    data: users,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully.",
    data: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const body = req.body;

  const user = await userService.updateUser(req.params.id as string, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully.",
    data: user,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await userService.deleteUser(req.params.id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully.",
    data: user,
  });
});

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
