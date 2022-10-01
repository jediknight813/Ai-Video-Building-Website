import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000', mode: "cors"})


//export const testServer = () => API.get("/");
export const fetchVideos = () => API.get("/video");
export const createVideo = (newVideo) => API.post("/video/newVideo", newVideo);
export const deleteVideo = (id) => API.delete(`${"video"}/${id}`);

