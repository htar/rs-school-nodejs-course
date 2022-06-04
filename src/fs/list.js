import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";

const basePath = "src/fs";
const folderPath = `${basePath}/files`;

export const list = async () => {
  // Write your code here
  if (!existsSync(folderPath)) {
    console.error("FS operation failed");
  } else {
    try {
      const fileList = await readdirSync(folderPath);
      console.log(`file list => ${fileList}`);
    } catch (error) {
      console.error("FS operation failed");
    }
  }
};

export default (() => {
  list();
})();
