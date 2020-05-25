export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "my-notes-app-ex"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://vbehzco658.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ThPUR00PI",
    APP_CLIENT_ID: "46433qndbfnupd80bbfbaotb5p",
    IDENTITY_POOL_ID: "us-west-2:a9366fcc-0b0e-48b3-8a5c-05eb546dcdc7"
  }
};