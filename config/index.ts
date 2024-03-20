import dotenv from "dotenv";
import Joi from "joi";
import { resolve, join } from "path";
import createError from "http-errors";

dotenv.config({ path: resolve(__dirname, `../.env.${process.env.NODE_ENV}`) });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),

    DB_NAME: Joi.string().required(),
    DB_HOST: Joi.string().default("localhost"),
    DB_PORT: Joi.number().default(27017),
    DB_USER: Joi.string().required().description("Mongo DB User"),
    DB_PASSWORD: Joi.string().required().description("Mongo DB Password"),

    ACCESS_TOKEN_SECRET: Joi.string()
      .required()
      .description("JWT access_token secret key"),
    REFRESH_TOKEN_SECRET: Joi.string()
      .required()
      .description("JWT refresh_token secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which reset password token expires"),

    REDIS_HOST: Joi.string().default("redis"),
    REDIS_PORT: Joi.number().default(6379),
    REDIS_PASSWORD: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = Joi.compile(envVarsSchema)
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  const errorMessage = error.details
    .map((details) => details.message)
    .join(", ");
  throw createError(400, errorMessage);
}

export const ENV = envVars.NODE_ENV;
export const PORT = envVars.PORT;

export const DBConfig = {
  url: `mongodb://${envVars.DB_USER}:${encodeURIComponent(
    envVars.DB_PASSWORD || ""
  )}@${envVars.DB_HOST}:${envVars.DB_PORT}/${envVars.DB_NAME}`,
  options: {
    autoIndex: true,
    //   minPoolSize: db.minPoolSize, // Maintain up to x socket connections
    //   maxPoolSize: db.maxPoolSize, // Maintain up to x socket connections
    connectTimeoutMS: 60000, // Give up initial connection after 10 seconds
    //   socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  },
};

export const RedisConfig = {
  host: envVars.REDIS_HOST,
  port: parseInt(envVars.REDIS_PORT),
  password: encodeURIComponent(envVars.REDIS_PASSWORD || ""),
};

export const JwtConfig = {
  accessSecret: envVars.ACCESS_TOKEN_SECRET,
  refreshSecret: envVars.REFRESH_TOKEN_SECRET,
  accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
  refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
};
