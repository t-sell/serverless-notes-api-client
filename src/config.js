
const dev = {
  STRIPE_KEY: "pk_test_rARZ4rQnhEY9AEBv05OC4sPY00zKGfLPaJ",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-knb9ihdphbyr"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://fjw4ua7nsg.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_qZMncn54S",
    APP_CLIENT_ID: "2aso063b2t89qktofl01v1bd4d",
    IDENTITY_POOL_ID: "us-west-2:9eb60ecd-2d52-4b6c-97e2-bb7837f53aea"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_rARZ4rQnhEY9AEBv05OC4sPY00zKGfLPaJ",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-5lrwnm8tvben"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://fu9djc1j73.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_d9CCK2CTJ",
    APP_CLIENT_ID: "79st6f87mro5fj1a1vt799di0r",
    IDENTITY_POOL_ID: "us-west-2:ffec24e8-7e0a-46ff-ac3b-074fa007046c"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
