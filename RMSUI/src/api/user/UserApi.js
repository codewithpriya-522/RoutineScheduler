import axiosClient from "../axiosClient";
import { urls } from "../urls";

const userApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_USERS}`);
    },
    // refreshlogin(params){
    //     return axiosClient.post(`${urls.REFRESH_LOGIN}`,params)
    // },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default userApi;