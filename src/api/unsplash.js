import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 65436428a4afbe204b35fb7febbf482d788a57ccba4f2c20f230ee6f7a5421f2'
    }
});