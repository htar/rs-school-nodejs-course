import readline from "readline";
import { welcomeMessage, exitMessage } from "./messages.js";
import commands from "./commands/index.js";

const { argv, cwd, stdin, stdout } = process;
const userNameArg = argv.length ? argv.slice(2)[0] : "";
let user = "";

const exit = () => {
  console.log(`${exitMessage} ${user}!`);
};

const setUser = (currentUser) => {
  user = currentUser;
  console.log(`${welcomeMessage} ${currentUser}!`);
};

const start = () => {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  if (userNameArg?.startsWith("--username=")) {
    const name = userNameArg.split("=")[1] || "";
    setUser(name);
  } else {
    rl.question("Please write your name?\n", (name) => {
      setUser(name);
    });
  }

  rl.on("line", commands);

  process.on("exit", exit);
};

start();
