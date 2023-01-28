import fs from "fs";
import ClientFactory from "../clientFactory";
import { clientType } from "../constants/clientType";
import BaseClient from "../clients/baseClient"
import { sleep } from "../utils/sleep";
import { random } from "../utils/random"

async function runGiveaway() {
  try {
    const baseClient = ClientFactory.getClient(clientType.TALAVODICH)?.initConnection()
    const pendingGiveaways = fs.readFileSync("./pending-giveaway.txt", "utf8").toString().split("\n");
    for (const giveawayUrl of pendingGiveaways) {
      try {
        const tweetId = giveawayUrl.split("/").slice(-1)[0];
        if (tweetId == "" || tweetId === undefined) continue;
        const tweetInfo = await baseClient.v2.singleTweet(tweetId, {
          expansions: ["entities.mentions.username"],
        });
        const userNeedFollowIds = tweetInfo.includes?.users?.map((x) => x.id);
        for (const key in clientType) {
          console.log(`Processing account ${key}`)
          //Init connection
          const client = ClientFactory.getClient(clientType[key as keyof typeof clientType]);
          if (client == undefined) continue;
          const connection = client?.initConnection()
          if (connection == undefined) continue;

          //Get userId
          const userId = await BaseClient.getUserId(connection);
          //Follow user
          userNeedFollowIds?.forEach(targetUserId => connection.v2.follow(userId, targetUserId))
          await sleep(1000 * random(10, 20));
          //Reply tweet
          connection.v2.reply(client.replyContent(), tweetId);
          await sleep(1000 * random(4, 20));
          //Retweet
          connection.v2.retweet(userId, tweetId);
          await sleep(1000 * random(12, 18));
          //Like
          connection.v2.like(userId, tweetId);
          await sleep(1000 * 10 * random(1, 3));
          console.log(`Done account ${key}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

runGiveaway();