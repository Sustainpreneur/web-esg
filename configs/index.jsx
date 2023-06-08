import axios from "axios";
import { APP_CONFIG } from "../env";
import _ from "lodash";

axios.defaults.baseURL = APP_CONFIG.WEBSERVICE;