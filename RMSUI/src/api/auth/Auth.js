import axiosClient from "../axiosClient";
import { urls } from "../urls";


const authApi = {
    login(params) {
        return axiosClient.post(`${urls.LOGIN}`, params);
    },
    // refreshlogin(params){
    //     return axiosClient.post(`${urls.REFRESH_LOGIN}`,params)
    // },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default authApi;