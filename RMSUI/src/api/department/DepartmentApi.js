import axiosClient from "../axiosClient";
import { urls } from "../urls";


const departmentApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_DEPARTMENT}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_DEPARTMENT}/${params}`)
    },
    // registration(params)
    // {
    //     return axiosClient.post(`${urls.REGISTRATION}`,params)
    // }
};

export default departmentApi;