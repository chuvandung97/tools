import { TwitterApi } from "twitter-api-v2";

export default class BaseClient {
  static async getUserId(client: TwitterApi): Promise<string> {
    const user = await client.v2.me();
    return user.data.id;
  }
  static async getFollowingCountFromUserId(client: TwitterApi, userId: string): Promise<number | undefined> {
    const user = await client.v2.user(userId, {
      "user.fields": "public_metrics"
    });
    return user.data.public_metrics?.following_count;
  }
}