import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['x-api-key'] =
    '34323809-5db8daf5fc25ed7f9dffec99f';
  
export const fetchImgList = async () => {
    const ersponse = await axios.get()
}
