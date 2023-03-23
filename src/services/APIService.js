import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_DEV_URL}`

export const getProvincias = async () => {
    console.log({BASE_URL})
    const res = await axios.get(BASE_URL, {
        headers: {
            'Content-type': 'application/json'
        }
    });

    return res;
}