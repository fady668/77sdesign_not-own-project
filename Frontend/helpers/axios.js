import axios from 'axios';
import { API_VERSION, BASE_URL } from "@/config";
import Cookies from "js-cookie";
const csrfToken = Cookies.get('77SDESIGN_CSRF_TOKEN');

const axiosInstance = axios.create({
  baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'X-CSRFToken': csrfToken
    },
});


axiosInstance.interceptors.request.use(
    (config) => {
      // Modify the request config here (add headers, authentication tokens)
      const accessToken = localStorage.getItem("access_token");
        console.log(accessToken)
      // If token is present add it to request's Authorization Header
      if (accessToken) {
        if (config.headers) config.headers.Authorization = "Bearer " + accessToken;
      }
      return config;
    },
    (error) => {
      // Handle request errors here

      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    async function (error) {
        const originalRequest = error.config

        if (typeof error.response === 'undefined') {
            console.log(
                'A server/network error occurred. ' +
                'Looks like CORS might be the problem. ' +
                'Sorry about this - we will get it fixed shortly.'
            )
            return Promise.reject(error)
        }

        if (
            error.response.status === 401 &&
            originalRequest.url === BASE_URL + `${API_VERSION}/user/refresh/`
        ) {
            window.location.href = '/'
            return Promise.reject(error)
        }

        if (
            error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh_token')

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]))

                const now = Math.ceil(Date.now() / 1000)
                console.log(tokenParts.exp)

                if (tokenParts.exp > now) {
                    return axiosInstance
                        .post(`${API_VERSION}/user/refresh/`, { refresh: refreshToken })
                        .then((response) => {
                            localStorage.setItem('access_token', response.data.access)
                            ;(
                                axiosInstance.defaults.headers
                            )['Authorization'] = 'Bearer ' + response.data.access
                            originalRequest.headers['Authorization'] =
                                'Bearer ' + response.data.access

                            return axiosInstance(originalRequest)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } else {
                    console.log('Refresh token is expired', tokenParts.exp, now)
                    //window.location.href = '/login'
                    if (localStorage.getItem('authenticated')) {
                        localStorage.removeItem('authenticated')
                    }
                }
            } else {
                console.log('Refresh token not available.')
                //window.location.href = '/login'
                if (localStorage.getItem('authenticated')) {
                    localStorage.removeItem('authenticated')
                }
            }
        }

        return Promise.reject(error)
    }
)

// End of Response interceptor

export default axiosInstance;
