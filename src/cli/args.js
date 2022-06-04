const { env } = process;

export const parseArgs = () => {
  // Write your code here
  const envName = "RSS_USER_NAME";
  const envSurname = "RSS_USER_SURNAME";
  console.log(`${envName} is ${env[envName]}, ${envSurname} is ${env[envSurname]}`);
};

export default (() => {
  parseArgs();
})();
