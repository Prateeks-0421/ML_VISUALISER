import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const trainModel = (data) => API.post("/train", data);

export const getDatasets = () => API.get("/datasets");