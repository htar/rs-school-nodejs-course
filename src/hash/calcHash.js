import crypto from "crypto";
const hash = crypto.getHashes();

export const calculateHash = () => {
  // Write your code here
  const hex = crypto.createHash("sha256").digest("hex");
  console.log("hex", hex);
  return hex;
};

export default (() => {
  calculateHash();
})();
