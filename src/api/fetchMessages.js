import axios from "axios";

const URL = 'https://cors-anywhere.herokuapp.com/https://api.sigfox.com/v2/devices/413E25/messages';
const USERNAME = '5fa741362564320440b77793';
const PASSWORD = '2fddf89d7b8e42d4b60fe1f2432375a7';

export const fetchMessages = async () => {
    const {data} = await axios.get(URL, {
        auth: {
            username: USERNAME,
            password: PASSWORD
        }
    })

    return data
}
