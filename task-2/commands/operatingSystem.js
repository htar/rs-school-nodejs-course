import os from "os";

import { operationFailedMessage } from "../messages.js";

export default async (command) => {
  const option = {
    EOL: `default system ${os.EOL}`,
    cpus: os.cpus(),
    homedir: os.userInfo().homedir,
    username: os.userInfo().username,
    architecture: os.arch(),
  };
  try {
    console.log(option[command]);
  } catch (error) {
    console.error(operationFailedMessage, error);
  }
};
