import IBaseClient from "./IBaseClient";
import { TwitterApi } from "twitter-api-v2";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default class NDungcn implements IBaseClient {
  initConnection(): TwitterApi {
    const initConnection: any = {
      appKey: process.env.ACCOUNT_4_APP_KEY,
      appSecret: process.env.ACCOUNT_4_APP_SECRET,
      accessToken: process.env.ACCOUNT_4_ACCESS_TOKEN,
      accessSecret: process.env.ACCOUNT_4_ACCESS_SECRET,
    };
    return new TwitterApi(initConnection);
  }
  replyContent(): string {
    return "@HoangHon0710 @HNganhang @DienquanHa";
  }
}
