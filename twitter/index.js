import { TwitterApi } from "twitter-api-v2";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

// @TalaVodich
const client1 = new TwitterApi({
  appKey: process.env.ACCOUNT_1_APP_KEY,
  appSecret: process.env.ACCOUNT_1_APP_SECRET,
  accessToken: process.env.ACCOUNT_1_ACCESS_TOKEN,
  accessSecret: process.env.ACCOUNT_1_ACCESS_SECRET,
});

export default client1;
