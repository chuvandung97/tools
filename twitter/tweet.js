import client1 from "./index.js";
import fs from "fs";

try {
  // const pendingGiveaways = JSON.parse(
  //   fs.readFileSync("./pending-giveaway.json", "utf8")
  // );
  // for (let i = 0; i < Object.keys(pendingGiveaways).length; i++) {
  //   const tweetId = pendingGiveaways[i].split("/").at(-1);
  //   const tweetInfo = await client.v2.singleTweet(tweetId, {
  //     expansions: ["entities.mentions.username"],
  //   });
  //   const userNeedFollowIds = tweetInfo.includes.users.map((x) => x.id);
  //   client.v2.follow();
  // }
  // const response = await client.v2.reply(
  //   "@danghoang97 @HNganhang @HoaHa97",
  //   "1589763626973683714"
  // );
  const a = await client1.v2.listTweets()
  // await client.v2.retweet("1453025469553467392", "1589763626973683714");
  // await client.v2.like("1453025469553467392", "1589763626973683714");
  // const response = await client.v2.singleTweet("1589014175455805440", {`
  //   expansions: ["entities.mentions.username"],
  // });
  console.log(a);
  // const a = await client.v2.console.log([
  //   ...new Set(response.data.entities.mentions.map((x) => x.id)),
  // ]);
} catch (error) {
  console.log(error);
}
