import { messages } from "../helpers/index.js";
import { responseWithHeaders } from "../helpers/middleware.js";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index.js";

export function userRouter(request, response) {
  if (!request.url || !request.url.includes("/api/users")) {
    return responseWithHeaders(404, { message: messages[404] }, response);
  }
  switch (request.method) {
    case "GET":
      if (request.url.includes("/api/users/")) {
        getUser(request, response);
      } else {
        getUsers(request, response);
      }
      break;
    case "POST":
      createUser(request, response);
      break;
    case "DELETE":
      deleteUser(request, response);
      break;
    case "PUT":
      updateUser(request, response);
      break;

    default:
      responseWithHeaders(404, { message: messages[404] }, response);
  }
}
