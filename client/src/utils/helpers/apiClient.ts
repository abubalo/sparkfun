import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include the JWT token in the headers
apiClient.interceptors.request.use((config) => {
  const token = getCookie("token")/* Get the token from where it's stored (e.g., local storage) */;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Function to read a cookie by name
function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  // Use optional chaining to handle null
}

export default apiClient;
