import axios from 'axios';

// eslint-disable-next-line no-return-await
export const fetchPosts = async (url) => await axios.get(url);
