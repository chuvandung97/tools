import { TwitterApi } from "twitter-api-v2";

export default class BaseClient {
  static async getUserId(client: TwitterApi): Promise<string> {
    const user = await client.v2.me();
    return user.data.id;
  }
}