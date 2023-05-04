import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY ='34323809-5db8daf5fc25ed7f9dffec99f';

  
export const fetchImgList = async (searchQuery, page = 1) => {
  const OPTIONS = new URLSearchParams({
    key: API_KEY,
    // q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
  });

  // const response = await axios(`${BASE_URL}?${OPTIONS}`);
  // return response.data;
  return await axios.get(`${BASE_URL}?${OPTIONS}`)
  .then (response => response.data)
  .catch(err => console.log(err.message));
};
