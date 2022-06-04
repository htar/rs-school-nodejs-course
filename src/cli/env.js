const { env } = process;

export const parseEnv = () => {
  // Write your code here
  const envName = "RSS_USER_NAME";
  const envSurname = "RSS_USER_SURNAME";
  console.log(`${envName}=${env[envName]}; ${envSurname}=${env[envSurname]}`);
};

export default (() => {
  parseEnv();
})();
