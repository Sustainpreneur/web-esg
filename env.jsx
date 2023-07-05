const APP_SETTING = {
  DEV: {
    WEBSERVICE: "http://localhost:4000",
  },
  PROD: {
    WEBSERVICE: "http://13.213.120.182:8080",
  },
};

const APP_CONFIG = APP_SETTING.PROD;

export { APP_CONFIG };