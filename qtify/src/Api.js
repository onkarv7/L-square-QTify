// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
import axios from "axios";

const ENDPOINT_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
  try {
    const response = await axios.get(`${ENDPOINT_URL}/albums/top`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbum = async () => {
  try {
    const response = await axios.get(`${ENDPOINT_URL}/albums/new`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${ENDPOINT_URL}/songs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
