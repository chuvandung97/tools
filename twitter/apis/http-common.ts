import axios from "axios";

export default axios.create({
    baseURL: "https://api.twitter.com",
    headers: {
        "Content-type": "application/json"
    }
});