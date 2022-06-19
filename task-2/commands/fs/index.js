import { rm, rename, copyFile } from "fs/promises";
import { createReadStream, existsSync, createWriteStream } from "fs";
import { operationFailedMessage, invalidInputMessage } from "../../messages.js";
import createFile from "./add.js";

const fsCommands = async function (command, startPath, endPath) {
  const { cwd } = process;
  const currentFolderPath = cwd();
  const currentPath = `${currentFolderPath}/${startPath}`;
  const finishPath = `${currentFolderPath}/${endPath}`;
  try {
    if (command === "cat") {
      const stream = createReadStream(currentPath, "utf-8");
      stream.on("data", (data) => console.log(data));
      stream.on("error", () => console.error(operationFailedMessage));
      stream.end();
    } else if (command === "add") {
      await createFile(currentPath);
    } else if (command === "rn") {
      await rename(currentPath, finishPath);
    } else if (command === "cp") {
      await copyFile(currentPath, finishPath);
    } else if (command === "mv") {
      await copyFile(currentPath, finishPath);
      await rm(currentPath);
    } else if (command === "rm") {
      await rm(currentPath);
    } else {
      console.log(invalidInputMessage);
    }
  } catch {
    console.log(operationFailedMessage);
  }
};

export default fsCommands;
