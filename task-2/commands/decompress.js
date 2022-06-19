import stream from "stream";
import zlib from "zlib";
import {  createReadStream, createWriteStream } from "fs";
import { operationFailedMessage } from "../messages.js";

export default async (startPath = "", endPath = "") => {

  const currentFolderPath = process.cwd();
  const currentPath = `${currentFolderPath}/${startPath}`;
  const finishPath = `${currentFolderPath}/${endPath}`;

  const unzip = zlib.createUnzip();
  const inp = createReadStream(currentPath, {
    encoding: "utf8",
  });
  const out = createWriteStream(currentFolderPath);

  stream.pipeline(inp, unzip, out, (error) => {
    console.error(operationFailedMessage, error);
  });

};
