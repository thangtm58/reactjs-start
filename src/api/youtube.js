import axios from 'axios';

const KEY = 'AIzaSyBAjovfpTQy3BLxY5WGKvDktmfgBunhDts';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',      // ref. https://developers.google.com/youtube/v3/docs/search/list#http-request
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});