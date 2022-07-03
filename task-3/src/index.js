import dotenv from 'dotenv';
import http from "http";
import { userRouter } from "./routes/index.js";

dotenv.config();

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    return userRouter(req, res);
  })
  .listen(port, (err) => {
    if (err) {
      console.log("createServer error", err);
    }

    console.log(`Server has been started on port ${port}`);
  });
