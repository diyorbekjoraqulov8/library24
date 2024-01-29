import axios from "axios";
import store from "@/stores/index.js";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_SERVER_URL}/`,
  transformRequest: (data, headers) => {
    headers["Authorization"] = `Bearer ${store.accessToken}`;
    headers["Content-Type"] = "application/json";
    return JSON.stringify(data);
  }
});

let isSend = false;
const urls = new Set([]);

// function createAxiosResponseInterceptor() {
//   const interceptor = http.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response.status !== 401) {
//         return Promise.reject(error);
//       }
//       urls.add(error.response.config);
//       if(isSend === false){
//         isSend = true;
//         axios.interceptors.response.eject(interceptor);
//         return refreshAccessToken(error);
//       }
//     }
//     );
// }
  
// async function refreshAccessToken(error) {
//   const refreshToken = await JSON.parse(localStorage.getItem('z-pos-console'));
  
//   if (refreshToken?.refreshToken) {
//       return axios({
//           url: `/api/v1/auth/token`,
//           method: "POST",
//           data: {
//             grantType: "refresh_token",
//             refreshToken: refreshToken?.refreshToken,
//           }
//       })
//       .then(({ data }) => {
//           store.commit('authenticate', data);
//           return new Promise.all(urls.forEach((url) => {
//               axios({
//                   ...url,
//                   headers: {
//                       ...url.headers,
//                       Authorization: `Bearer ${data?.['access_token']}`
//                   }
//               });
//           }))
//           // return axios({
//           //     ...error.response.config,
//           //     headers: {
//           //         ...error.response.config.headers,
//           //         Authorization: `Bearer ${data?.['access_token']}`
//           //     }
//           // });
//       })
//       .catch(() => {
//           if (error.response.status !== 401) {
//               return Promise.reject(error);
//           }
//           Clear();
//       })
//       .finally(() => {
//           isSend = true;
//           createAxiosResponseInterceptor();
//       });
//   }

//   Clear();
//   return Promise.reject("Error");
// }
  
// function Clear() {
//   localStorage.removeItem('z-pos-console');
//   window.location.href = "/";
// }
export default api;
// createAxiosResponseInterceptor();