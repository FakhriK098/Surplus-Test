import axios from "axios";
import axiosRetry from "axios-retry";

const AxiosApi = axios.create({
    timeout: 40000,
});
axiosRetry(AxiosApi, {retries: 3})

AxiosApi.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        console.error(
            `API Failed ${error.config.method} "${error.config.url}" => 
                [${error.response.status}]: ${JSON.stringify(error.response.data)}`
        );
        return Promise.reject(error);
    }
);

export default AxiosApi;