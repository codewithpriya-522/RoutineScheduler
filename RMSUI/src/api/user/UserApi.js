import axiosClient from "../axiosClient";
import { urls } from "../urls";

const userApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_USERS}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.GETALL_USERS}/${params}`)
    },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default userApi;