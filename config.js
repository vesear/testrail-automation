import "dotenv/config";

export const CONFIG = {
  USER: {
    USERNAME: process.env.USER_NAME,
    PASSWORD: process.env.PASSWORD,
    NAME: process.env.NAME,
    SURNAME: process.env.SURNAME,
  },
};
