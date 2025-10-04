import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52610822-f7e96d61057c97541c6e10504"; 

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}