import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID utMByZ9qnvl6dsDzS0DXh5vme2e49_MP7IqoPc4_Pns'
    }
})