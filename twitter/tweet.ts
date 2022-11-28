import fs from "fs";
import ClientFactory from "./clientFactory";
import { clientType } from "./constants/clientType";
import BaseClient from "./clients/baseClient"
import { sleep } from "./utils/sleep";

async function runGiveaway() {
  try {
    const baseClient = ClientFactory.getClient(clientType.TALAVODICH)?.initConnection()
    const pendingGiveaways = fs.readFileSync("./pending-giveaway.txt", "utf8").toString().split("\n");
    for (let i = 0; i < Object.keys(pendingGiveaways).length; i++) {
      try {
        const tweetId = pendingGiveaways[i].split("/").at(-1);
        if (tweetId == "" || tweetId === undefined) continue;
        if (baseClient == undefined) continue;
        const tweetInfo = await baseClient.v2.singleTweet(tweetId, {
          expansions: ["entities.mentions.username"],
        });
        const userNeedFollowIds = tweetInfo.includes?.users?.map((x) => x.id);
        for (const key in clientType) {
          //Init connection
          const client = ClientFactory.getClient(clientType[key as keyof typeof clientType]);
          if (client == undefined) continue;
          const connection = client?.initConnection()
          if (connection == undefined) continue;

          //Get userId
          const userId = await BaseClient.getUserId(connection);
          //Follow user
          userNeedFollowIds?.forEach(targetUserId => connection.v2.follow(userId, targetUserId))
          //Reply tweet
          connection.v2.reply(client.replyContent(), tweetId);
          await sleep(1000);
          //Retweet
          connection.v2.retweet(userId, tweetId);
          await sleep(1000);
          //Like
          connection.v2.like(userId, tweetId);
          await sleep(1000 * 60 * 5);
        }
        // var linesExceptFirst = pendingGiveaways.slice(1).join('\n');
        // fs.writeFileSync("./pending-giveaway.txt", linesExceptFirst)
        // fs.writeFileSync("./done-giveaway.txt", pendingGiveaways[i])
      } catch (error) {
        // fs.writeFileSync("./pending-giveaway.txt", linesExceptFirst)
        // fs.writeFileSync("./pending-giveaway.txt", pendingGiveaways[i])
        console.log(error);
        throw new Error(error instanceof Error ? error.message : "Error")
      }
    }
  } catch (error) {
    console.log(error);
  }
}

runGiveaway();