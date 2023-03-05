import axios from "axios";
import http from "./http-common"
import Response from "../types/response"

export default class Api {
    private readonly _baseUrl: string = "https://api.twitter.com";
    private _bearerToken: string | undefined;

    constructor(bearerToken: string | undefined) {
        this._bearerToken = bearerToken;
    }

    async getUserFollowings(userId: string, paginationToken: string | null, maxResults: number = 1000): Promise<Response> {
        let results = await http.get<Response>(`https://api.twitter.com/2/users/${userId}/following`, {
            headers: {
                Authorization: "Bearer " + this._bearerToken
            },
            params: {
                max_results: maxResults,
                pagination_token: paginationToken
            }
        })
        return results.data;
    }
}

