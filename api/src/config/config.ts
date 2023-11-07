import dotenv from "dotenv";

dotenv.config();

interface AppConfig {
  mongo: {
    url: string;
  };
  server: {
    port: number;
  };
  jwt: {
    secret: string;
  };
  s3: {
    accesskey: string;
    secretKey: string;
  };
  aws: {
    region: string;
    sqs: string;
    sns: string;
  };
  stripe: {
    secret: string;
    publishKey: string
  };
  nodemailer:{
    user: string;
    password: string
  }
}

// Define a function to validate and load environment variables
function validateEnvVariable(
  name: string,
  defaultValue: string,
  validator?: (value: string) => boolean
): string {
  const value = process.env[name] || defaultValue;
  if (validator && !validator(value)) {
    throw new Error(`Invalid value for ${name}: ${value}`);
  }
  return value;
}

// Validate and load environment variables
const MONGO_USERNAME = validateEnvVariable("MONGO_USERNAME", "");
const MONGO_PASSWORD = validateEnvVariable("MONGO_PASSWORD", "");
const JWT_SECRET = validateEnvVariable("JWT_SECRET", "");
const AWS_ACCESS_KEY = validateEnvVariable("AWS_ACCESS__KEY", "");
const AWS_SECRET_KEY = validateEnvVariable("AWS_SECRET__KEY", "");
const AWS_REGION = validateEnvVariable("AWS_REGION", "");
const SQS_QUEUE_URL = validateEnvVariable("SQS_QUEUE_URL", "");
const SNS_TOPIC_ARN = validateEnvVariable("SNS_TOPIC_ARN", "");
const STRIPE_SECRET_KEY = validateEnvVariable("STRIPE_SECRET_KEY", "");
const STRIPE_PUBLISH_KEY = validateEnvVariable("STRIPE_PUBLISH_KEY", "");
const SENDER_EMAIL = validateEnvVariable("SENDER_EMAIL", "");
const SENDER_PASSWORD = validateEnvVariable("SENDER_PASSWORD", "");

const SERVER_PORT = validateEnvVariable("SERVER_PORT", "3500", (value) => {
  const port = parseInt(value);
  return !isNaN(port) && port >= 1 && port <= 65535;
});

// Create the configuration object
export const config: AppConfig = {
  mongo: {
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.pp0malq.mongodb.net`,
  },
  server: {
    port: parseInt(SERVER_PORT),
  },
  jwt: {
    secret: JWT_SECRET,
  },
  s3: {
    accesskey: AWS_ACCESS_KEY,
    secretKey: AWS_SECRET_KEY,
  },
  aws: {
    region: AWS_REGION,
    sns: SNS_TOPIC_ARN,
    sqs: SQS_QUEUE_URL,
  },
  stripe: {
    secret: STRIPE_SECRET_KEY,
    publishKey: STRIPE_PUBLISH_KEY
  },
  nodemailer: {
    user: SENDER_EMAIL,
    password: SENDER_PASSWORD
  }
};
