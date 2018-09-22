export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-uploads-muffin-man"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://p91lakl0zk.execute-api.us-west-2.amazonaws.com"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_cvbCnC1bT",
    APP_CLIENT_ID: "12t5b7mmjlpg6k2jkqdfm4hohd",
    IDENTITY_POOL_ID: "us-west-2:141d5eb6-e191-4010-a440-67e50f9e424c"
  }
};
