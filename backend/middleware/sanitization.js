import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import xss from "xss-clean";

const sanitization = (app) => {
  app.use(mongoSanitize());
  app.use(xss());
  app.use(hpp({ whitelist: ["duration"] }));
};

export default sanitization;
