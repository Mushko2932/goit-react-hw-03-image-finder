import axios from "axios";

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY ='34323809-5db8daf5fc25ed7f9dffec99f';

  
// export const fetchImgList = async (searchQuery, page = 1) => {
//   const OPTIONS = new URLSearchParams({
//     key: API_KEY,
//     q: searchQuery,
//     image_type: 'photo',
//     orientation: 'vertical',
//     page,
//     per_page: 12,
//   });

//   const response = await axios(`${BASE_URL}?${OPTIONS}`);
//   return response.data;
// };

axios.defaults.daseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['key'] =
  '34323809-5db8daf5fc25ed7f9dffec99f';

export const fetchImgList = async (searchQuery, page = 1) => {
  const response = await axios(
    `/?q=${searchQuery}&page=${page}&image_type=photo&orientation=vertical&per_page=12`
  );
  if (response.status === 404) {
    throw new Error('Error loading images from Pixabay', response.status);
  }
  return response.data;
};
