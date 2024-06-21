import axiosClient from "../axiosClient";
import { urls } from "../urls";

const userApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_USERS}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.GETALL_USERS}/${params}`)
    },
    update(params)
    {
        return axiosClient.put(`${urls.SINGLEGET_USERS}`,params)
    }
};

export default userApi;