import axios from "axios";
export const fetchMessages = async () => {

    const URL = 'https://api.sigfox.com/v2/devices/413E25/messages';
    // const USERNAME = '60bbf43cc563d650ade95cc0';
    // const PASSWORD = '1c052b5561afb03518ad95294c09a47f';

    axios.get(URL, {
      headers: {
        'Authorization': 'Basic NjBiYmU4NTE4NTMzNDMwM2Y2ZTJiYWE4OjBiNTJiNDllZTQ0MmM0NTFjZTBlZTE4YTRkNWFjMzJi'
      }
    })
    .then( (res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
      console.error(error.code)
      console.error(error.status)
      
    })
    
}
