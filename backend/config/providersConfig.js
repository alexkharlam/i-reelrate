import dotenv from "dotenv";

dotenv.config();

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  URL_PROTOCOL,
  URL_DOMAIN_NAME,
} = process.env;

export default {
  google: {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${URL_PROTOCOL}://${URL_DOMAIN_NAME}/auth/google/callback`,
  },
  github: {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: `${URL_PROTOCOL}://${URL_DOMAIN_NAME}/auth/github/callback`,
  },
};
