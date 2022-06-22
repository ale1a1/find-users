const environments = {
  develop: {
    serverUrl: "http://localhost:3001",
  },
  prod: {
    serverUrl: "https://find-users.herokuapp.com",
  },
};

const getEnv = () => {
  console.log(process.env.REACT_APP_ENV);
  const env = process.env.REACT_APP_ENV ?? "develop";
  return environments[env];
};

export const config = getEnv();
