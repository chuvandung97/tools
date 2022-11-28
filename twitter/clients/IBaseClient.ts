import { TwitterApi } from "twitter-api-v2";

export default interface IBaseClient {
  initConnection(): TwitterApi;
  replyContent(): string;
}
