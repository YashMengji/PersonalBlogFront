import axios from "axios"

const api = axios.create({
  baseURL: "/api",
  withCredentials: true
});

export function makeRequests(method, url, data) {
  const headers = data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : {};
  return api({ method, url, data, headers })
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"));
}