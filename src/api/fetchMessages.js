import axios from "axios";
export const fetchMessages = async () => {
  const URL = 'https://shrouded-basin-77513.herokuapp.com/mensajes';
  const {data} = await axios.get(URL)
  return data.slice(-10);
}
