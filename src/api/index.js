import axios from "axios";



export const fetchPosts = async (url) => await axios.get(url);
