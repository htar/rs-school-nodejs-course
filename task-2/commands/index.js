import { readdir } from "fs/promises";

import { pathMessage, invalidInputMessage } from "../messages.js";
import fsCommands from "./fs/index.js";
import hashCommand from "./hashCommand.js";
import compressCommand from "./compress.js";
import decompressCommand from "./decompress.js";
import operatingSystem from "./operatingSystem.js";

const actualPathMessage = () => {
  console.log(`${pathMessage}, ${process.cwd()}`);
};

const wrongCommand = () => {
  console.log(invalidInputMessage);
};

const commands = async (commandString) => {
  const { cwd, env, chdir, exit } = process;
  const homeDir = env.HOME;
  const startAppDir = cwd();

  const commandList = commandString.split(" ");
  const command = commandList[0];
  const arg1 = commandList[1];
  const arg2 = commandList[2];

  if (command === "cd") {
    try {
      process.chdir(arg1);
    } catch {
      wrongCommand();
    }
  } else if (command === "up") {
    if (cwd() === homeDir) {
      wrongCommand();
    } else {
      chdir("../");
    }
  } else if (command === "ls") {
    const files = await readdir(process.cwd());
    files.forEach((file) => {
      console.log(file);
    });
  } else if (command === "compress") {
    await compressCommand(arg1, arg2);
  } else if (command === "decompress") {
    await decompressCommand(arg1, arg2);
  } else if (command === "hash") {
    await hashCommand(arg1, arg2);
  } else if (command === "os") {
    operatingSystem(arg1?.replace("--", ""));
  } else if (command === ".exit" || command === ".quit") {
    exit();
  } else if (["cat", "add", "rn", "cp", "mv", "rm"].includes(command)) {
    fsCommands(command, arg1, arg2);
  } else {
    wrongCommand();
  }

  actualPathMessage();
};

export default commands;
