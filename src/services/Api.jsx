import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/?';
axios.defaults.headers.common['my-api-key'] =
  '34323809-5db8daf5fc25ed7f9dffec99f';

  
export const fetchImgList = async (images, page) => {
    const OPTIONS = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 12,
    });
    
  const response = await axios(`&${OPTIONS.toString()}`);
  return response.data;
};
