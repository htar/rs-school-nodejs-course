import { validate } from "uuid";

export const getIdFromURL = (url) => {
  const option = url.split("/");
  return option[option.length - 1];
};

export const isUUID = (id) => {
  return validate(id);
};

export const validateUserData = (user) => {
  const data = Object.assign(
    { id: null, username: null, age: null, hobbies: [] },
    user
  );

  const { id, username, age, hobbies } = data;

  return {
    id,
    username,
    age,
    hobbies,
  };
};

export const getReqBody = (req) =>
  new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (err) {
      reject(err);
    }
  });

export * from "./messages.js";
export * from "./middleware.js";
