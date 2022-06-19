import { createWriteStream } from "fs";
import { operationFailedMessage } from "../../messages.js";

const create = async (currentPath) => {
  let stream = await createWriteStream(currentPath);
  stream.write("", "utf-8");
  stream.on("error", () => console.error(operationFailedMessage));
  stream.end();
};

export default create;
