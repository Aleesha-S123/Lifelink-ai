import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function sendChatMessage(message) {
  const formData = new FormData();
  formData.append("message", message);

  const response = await API.post("/chat", formData);

  return response.data.reply;
}

export async function sendAccessibilityFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/accessibility-text", formData);

  return response.data.reply;
}