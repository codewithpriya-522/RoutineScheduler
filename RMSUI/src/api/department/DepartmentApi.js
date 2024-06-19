import axiosClient from "../axiosClient";
import { urls } from "../urls";


const departmentApi = {
    getAll (){
        return axiosClient.get(`${urls.GETALL_DEPARTMENT}`);
    },
    singleGet(params){
        return axiosClient.get(`${urls.SINGLEGET_DEPARTMENT}/${params}`)
    },
    update(params)
    {
        return axiosClient.put(`${urls.SINGLEGET_DEPARTMENT}/${params}`,)
    }
};

export default departmentApi;