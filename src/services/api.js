import axios from "axios";

const API = axios.create({
  baseURL: "https://lifelink-ai-backend-6e97.onrender.com",
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