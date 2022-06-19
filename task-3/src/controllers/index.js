import {
  messages,
  getIdFromURL,
  validateUserData,
  getReqBody,
  isUUID,
} from "../helpers/index.js";
import { responseWithHeaders } from "../helpers/middleware.js";
import Users from "../model/Users.js";
const UsersList = new Users();

export async function getUsers(req, res) {
  try {
    const users = await UsersList.getUsers();
    responseWithHeaders(200, users, res);
  } catch (error) {
    responseWithHeaders(404, { message: messages[404] }, res);
  }
}
export async function getUser(req, res) {
  const id = getIdFromURL(req.url);
  const isValidId = isUUID(id);
  if (!isValidId) {
    responseWithHeaders(400, messages[400], res);
  }

  try {
    const user = await UsersList.getUser(id);
    responseWithHeaders(200, user, res);
  } catch (error) {
    responseWithHeaders(404, { message: messages[404] }, res);
  }
}
export async function createUser(req, res) {
  const bodyData = await getReqBody(req);
  if (!bodyData.username || !bodyData.age || !bodyData.hobbies){
    return responseWithHeaders(400, { message: messages[417] }, res);
  }
  
  const userData = validateUserData(bodyData);

  try {
    const newUser = await UsersList.createUser(userData);
    responseWithHeaders(201, newUser, res);
  } catch (error) {
    responseWithHeaders(404, { message: messages[404] }, res);
  }
}
export async function updateUser(req, res) {
  const id = getIdFromURL(req.url);
  const isValidId = isUUID(id);
  if (!isValidId) {
    responseWithHeaders(400, messages[400], res);
  }

  const bodyData = await getReqBody(req);

  const userData = validateUserData(bodyData);

  try {
    const newUser = await UsersList.updateUser(id, userData);
    responseWithHeaders(202, newUser, res);
  } catch (error) {
    responseWithHeaders(404, { message: messages[404] }, res);
  }
}
export async function deleteUser(req, res) {
  const id = getIdFromURL(req.url);
  const isValidId = isUUID(id);
  if (!isValidId) {
    responseWithHeaders(400, messages[400], res);
  }

  try {
    const user = await UsersList.getUser(id);
    if (!user) return responseWithHeaders(404, { message: messages[404] }, res);
    await UsersList.deleteUser(id);
    responseWithHeaders(204, messages[204], res);
  } catch (error) {
    responseWithHeaders(404, { message: messages[404] }, res);
  }
}
