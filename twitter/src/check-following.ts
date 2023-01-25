import ClientFactory from "../clientFactory";
import { clientType } from "../constants/clientType";
import BaseClient from "../clients/baseClient"
import Api from "../apis";
import UserTwitterInfo from "../types/userTwitterInfo";
import Response from "../types/response";

async function checkFollowing() {
  try {
    const userIds = [
      "1397937208993075204", //Tomsuper2870
      // "1193198763143094274", //Lehson1
      // "1501459373234688000", //Hazaki_0104
      // "1521847155732135937", //freakycre1
      // "1458466270056120320", //MinhKhaiTran2
      // "1366833296152408067", //sam010594
      // "2925507536", //Xunobita
      // "2586749916", //dhtadesigner
      // "1594145669630988288", //Thun963867891
      // "1453023619114680334", //QuanNguyen26620
      // "1257649240144134144", //Donald153Jack
      // "1422839972835430402", //calicocat2025
    ]
    const baseClient = ClientFactory.getClient(clientType.TALAVODICH);
    const bearerToken = baseClient.getBearerToken();
    const api = new Api(bearerToken);
    for (let i = 0; i < userIds.length; i++) {
      const followingCounts = await BaseClient.getFollowingCountFromUserId(baseClient.initConnection(), userIds[i]);
      if (followingCounts == undefined) continue;

      let userFollowings: Array<UserTwitterInfo> = [];
      let nextToken: string | null = null;
      do {
        let results: Response = await api.getUserFollowings(userIds[i], nextToken);
        userFollowings.push(...results.data);
        nextToken = results.meta.next_token;
      } while (nextToken != null)
    }
  } catch (error) {
    console.log(error);
  }
}

checkFollowing();