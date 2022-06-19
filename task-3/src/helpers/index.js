export const getIdFromURL = (url) => url.split("/")[2];
export const validateUserData = (user) => {
  const { id, username, age, hobbies } = data;

  return {
    id: user.id || null,
    username: user.username || null,
    age: user.age || null,
    hobbies: user.hobbies || null,
    hobbies: user.hobbies || [],
  };
};
export * from "./messages.js";
export * from "./middleware.js";
