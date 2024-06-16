import axios from "axios";
const axiosClient = axios.create({
  //baseURL: 'https://api.treeeng.com/api',
  //baseURL: 'http://localhost:3030/api',
  baseURL: "https://localhost:5000/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

// axiosClient.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error?.response?.status === 401) {
//       localStorage.removeItem("access_token");
//       localStorage.removeItem("refresh_token");
//       window.location.reload(false);
//     }
//     return Promise.reject(error);
//   }
//);
export default axiosClient;
