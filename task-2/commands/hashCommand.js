import crypto from "crypto";
import { createReadStream } from "fs";
import { operationFailedMessage } from "../messages.js";

const hashCommand = async function (filePath) {
  const stream = createReadStream(filePath, "utf-8");
  stream.on("data", (data) => {
    const hex = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hex);
  });
  stream.on("error", () => console.error(operationFailedMessage));
};

export default hashCommand;
