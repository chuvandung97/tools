import UserTwitterInfo from "./userTwitterInfo";

export default interface Response {
    data: Array<UserTwitterInfo>,
    meta: {
        result_count: number,
        next_token: string | null,
        previous_token: string | null
    }
}