const environments = {
  develop: {
    serverUrl: "http://localhost:3001",
  },
  prod: {
    serverUrl: "https://findusers-ale1a184.b4a.run/",
  },
};

const getEnv = () => {
  const env = process.env.REACT_APP_ENV ?? "develop";
  return environments[env];
};

export const config = getEnv();
