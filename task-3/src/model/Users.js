import { v4 as uuidv4 } from "uuid";
import { messages } from "../helpers/index.js";

export default class Users {
  usersLists = [];

  async getUsers() {
    return new Promise((resolve, _) => resolve(this.usersLists));
  }

  async getUser(id) {
    return new Promise((resolve, reject) => {
      let user = this.usersLists.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(messages[404]);
      }
    });
  }
  async createUser(user) {
    return new Promise((resolve, _) => {
      const newUser = { ...user, id: uuidv4() };

      this.usersLists.push(newUser);
      resolve(newUser);
    });
  }

  async updateUser(id, newUser) {
    return new Promise((resolve, reject) => {
      let userIndex = this.usersLists.findIndex((user) => user.id === id);

      if (!userIndex && userIndex !== 0) {
        reject(messages[404]);
      }
      const updatedUser = { ...this.usersLists[userIndex], ...newUser, id };

      this.usersLists.splice(userIndex, 1, updatedUser);
      resolve(updatedUser);
    });
  }

  async deleteUser(id) {
    return new Promise((resolve, reject) => {
      let userIndex = this.usersLists.findIndex((user) => user.id === id);
      if (!userIndex && userIndex !== 0) {
        reject(messages[404]);
      }
      this.usersLists.splice(userIndex, 1);
      if (!userIndex) {
        reject(messages[404]);
      }
      resolve(messages[204]);
    });
  }
}
