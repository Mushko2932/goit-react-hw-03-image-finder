import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY ='34323809-5db8daf5fc25ed7f9dffec99f';

  
export const fetchImgList = async (images, page=1) => {
    const OPTIONS = new URLSearchParams({
    q: images,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
});
    
  const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
  return response.data;
};
